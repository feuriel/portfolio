import React from "react";
import { Section } from "../Section/Section";
import "./Projects.css";

export const Projects = () => {
  return (
    <Section
      id="projects"
      className="min-h-dvh grid grid-cols-12 gap-4 md:pt-35 xl:pt-20 xl:pl-[7rem]"
      data-before-content="projects"
      finished={true}
    >
      <h3 className="col-span-12 order-[-2] mt-[-2rem] mb-[2rem] md:hidden">
        Some of my projects
      </h3>
      <div className="col-start-1 col-span-4">Project1</div>
      <div className="">Project1Illustration</div>
      <div className="">Project2</div>
      <div className="">Project2Illustration</div>
      <div className="">Project3</div>
      <div className="">Project3Illustration</div>
      <div className="">Project4</div>
      <div className="">Project4Illustration</div>
      <div className="">Project5</div>
      <div className="">Project5Illustration</div>
      <div className="">Project6</div>
      <div className="">Project6Illustration</div>
    </Section>
  );
};
