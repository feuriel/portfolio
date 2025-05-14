import React from "react";
import { Media } from "../Media/Media.jsx";

export const Footer = () => {
  return (
    <section id="footer" className="flex justify-center items-center">
      <section className="w-full about max-w-7xl">
        <div>Let's connect</div>
        <Media />
      </section>
    </section>
  );
};
