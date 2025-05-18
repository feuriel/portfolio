import React from "react";
import { Section } from "../Section/Section";
import "./Experience.css";
import { Timeline } from "./Timeline";

export const Experience = () => {
  return (
    <Section
      id="experiences"
      className="min-h-dvh"
      data-before-content="journey"
      finished={true}
    >
      <h3 className="mt-[-2rem] mb-[1rem] md:hidden">My journey so far </h3>
      <Timeline />
    </Section>
  );
};
