import React from "react";
import { Section } from "../Section/Section";
import { SphereAnimation } from "./SphereAnimation";
import { ContactSide } from "./ContactSide";
import { FAQ } from "./FAQ";
import "./Contact.css";

export const Contact = () => {
  // grid grid-cols-1 xl:grid-cols-12
  return (
    <Section
      id="contact"
      data-before-content="contact"
      className="relative min-h-[85dvh]"
      finished={true}
    >
      {/* <SphereAnimation /> */}
      <div className="xl:px-[6rem]">
        <ContactSide className="col-span-12 xl:col-start-2 py-[2rem]" />
        {/* <ContactForm className="col-span-12 xl:col-start-2 " /> */}
        <FAQ />
      </div>
    </Section>
  );
};
