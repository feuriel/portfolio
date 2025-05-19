import React from "react";
import { Section } from "../Section/Section";
import { SphereAnimation } from "./SphereAnimation";
import { ContactForm } from "./ContactForm";
import { ContactSide } from "./ContactSide";
import "./Contact.css";

export const Contact = () => {
  // grid grid-cols-1 xl:grid-cols-12
  return (
    <Section
      id="contact"
      data-before-content="contact"
      className="relative min-h-[85dvh] hidden"
      finished={false}
      data-finished="false"
    >
      <SphereAnimation />
      <ContactSide className="col-span-12 xl:col-start-2 " />
      <ContactForm className="col-span-12 xl:col-start-2 " />
    </Section>
  );
};
