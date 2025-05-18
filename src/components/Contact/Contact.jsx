import React from "react";
import { Section } from "../Section/Section";
import { SphereAnimation } from "./SphereAnimation";
import { ContactForm } from "./ContactForm";
import "./Contact.css";

export const Contact = () => {
  return (
    <Section
      id="contact"
      data-before-content="contact"
      className="min-h-dvh relative"
      finished={false}
    >
      <SphereAnimation />
      <ContactForm />
    </Section>
  );
};
