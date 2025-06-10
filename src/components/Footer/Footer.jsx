import React from "react";
import { Media } from "../Media/Media.jsx";
import { Logo } from "../Logo/Logo.jsx";
import { Section } from "../Section/Section.jsx";
import { DarkLightToggle } from "../DarkLightToggle/DarkLightToggle.jsx";

export const Footer = () => {
  return (
    <Section
      id="footer"
      as="footer"
      className="grid grid-cols-2 md:grid-cols-3  py-12"
    >
      <div className="justify-self-start">
        <a href="#" data-cursor-pointer="true" style={{ cursor: "none" }}>
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
      <div className="justify-self-end col-span-2 md:col-span-1">
        <DarkLightToggle />
      </div>
    </Section>
  );
};
