import { useState, useEffect } from "react";
import { Logo } from "../Logo/Logo.jsx";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar fixed left-0 right-0 m-auto top-0 z-50 w-full max-w-7xl px-4 md:px-24 xl:px-12 py-2 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Desktop Layout (grid-cols-3) */}
      <div className="hidden md:grid grid-cols-3 w-full items-center">
        <a
          data-cursor-pointer="true"
          style={{ cursor: "none" }}
          href="#"
          className="justify-self-start"
        >
          <Logo />
        </a>
        <div className="flex gap-6 justify-self-center">
          <a className="hover-underline-animation" href="#about">
            About
          </a>
          <a className="hover-underline-animation" href="#journey">
            Journey
          </a>
          <a className="hover-underline-animation" href="#projects">
            Projects
          </a>
        </div>
        <div className="justify-self-end">
          <a className="hover-underline-animation" href="#contact">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Layout (hamburger menu) */}
      <div className="md:hidden flex justify-between items-center px-4">
        <a href="#" className="justify-self-start">
          <Logo />
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none transition-all duration-300"
          aria-label="Menu"
        >
          <div
            className={`w-6 flex flex-col gap-1 ${
              isMenuOpen ? "transform rotate-180" : ""
            }`}
          >
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden px-4 py-2 flex flex-col gap-3 h-[calc(100dvh-54px)] justify-around items-center text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#journey" onClick={() => setIsMenuOpen(false)}>
            Journey
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
