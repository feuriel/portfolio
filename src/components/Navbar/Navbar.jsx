import { useState } from "react";
import { Logo } from "../Logo/Logo.jsx";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed left-0 right-0 m-auto top-0 z-50 w-full max-w-7xl px-5 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Desktop Layout (grid-cols-3) */}
      <div className="hidden md:grid grid-cols-3 w-full items-center">
        <a href="#" className="justify-self-start">
          <Logo size={54} color={"white"} />
        </a>
        <div className="flex gap-6 justify-self-center">
          <a className="hover-underline-animation" href="#about">
            About
          </a>
          <a className="hover-underline-animation" href="#experiences">
            Experiences
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
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <div className="font-bold">Logo</div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 flex flex-col gap-3">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#experiences" onClick={() => setIsMenuOpen(false)}>
            Experiences
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
