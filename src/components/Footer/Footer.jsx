import React from "react";
import { Media } from "../Media/Media.jsx";
import { Logo } from "../Logo/Logo.jsx";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex justify-center items-center pt-12 pb-12"
    >
      <section className="w-full grid grid-cols-2 md:grid-cols-3 max-w-7xl px-4 md:px-12 xl:px-4">
        <div className="justify-self-start">
          <a href="#">
            <Logo size={54} className="no" />
          </a>
          <p className="text-sm">
            <span> Gabriel Somogyi</span>
            <br /> Copyright © {new Date().getFullYear()}
          </p>
        </div>
        <div className="justify-self-end md:justify-self-center">
          <Media withGithub={true} withGoogle={true} withLinkedin={true} />
        </div>
      </section>
    </footer>
  );
};
