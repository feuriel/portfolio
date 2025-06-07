import React, { useState } from "react";
import { Section } from "../Section/Section";
import "./Projects.css";
import { ProjectIllustration } from "./ProjectIllustration";
import { ProjectDetails } from "./ProjectDetails";
import { AnimatedDiv } from "../../utility/AnimatedDiv";
import { projectsData } from "./data/projects-data";

const ProjectRow = ({ class1, class2, project }) => {
  return (
    <>
      <AnimatedDiv className={class1}>
        <ProjectDetails
          title={project.title}
          role={project.role}
          year={project.year}
          i={project.id}
        ></ProjectDetails>
      </AnimatedDiv>
      <AnimatedDiv className={class2}>
        <ProjectIllustration i={project.id} />
      </AnimatedDiv>
    </>
  );
};

export const Projects = () => {
  let [isUnlocked, setIsUnlocked] = useState(false);
  return (
    <Section
      id="projects"
      className="min-h-dvh md:pt-35 lg:pt-36 xl:pl-[7rem]"
      data-before-content="projects"
      finished={true}
    >
      <h3 className="mt-[-2rem] pt-[2rem] mb-[2rem] md:hidden">
        Selected projects :
      </h3>
      <div className="pb-[2rem] flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-4 ">
        <ProjectRow
          class1="row-start-1 col-start-1 hidden sm:block"
          class2="row-start-1 col-start-2 xl:mr-[-4rem]"
          project={projectsData[0]}
        />
        <ProjectRow
          class1="row-start-2 col-start-2 hidden sm:block"
          class2="sm:row-start-2 sm:col-start-1"
          project={projectsData[1]}
        />
        <ProjectRow
          class1="row-start-3 col-start-1 xl:col-start-3 hidden sm:block"
          class2="row-start-3 col-start-2 xl:ml-[-3rem]"
          project={projectsData[2]}
        />
        <ProjectRow
          class1="row-start-4 col-start-2 hidden sm:block"
          class2="row-start-4 col-start-1 xl:col-start-3"
          project={projectsData[3]}
        />
        <ProjectRow
          class1="row-start-5 col-start-1 hidden sm:block"
          class2="row-start-5 col-start-2"
          project={projectsData[4]}
        />
        <ProjectRow
          class1="row-start-6 col-start-2 hidden sm:block"
          class2="row-start-6 col-start-1"
          project={projectsData[5]}
        />
      </div>
      <AnimatedDiv className="text-sm pb-[1rem]">
        And some [fun] projects... 💡
      </AnimatedDiv>
      <div className="text-sm grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {/* <RandomProject name="Memo-riel" icon="🔒" /> */}
        <AnimatedDiv>🔒 Memo-riel</AnimatedDiv>
        <AnimatedDiv>🔒 CSS Anims</AnimatedDiv>
        <AnimatedDiv>🔒 CSS Clock</AnimatedDiv>
        <AnimatedDiv>🔒 Pixel Art MonaLisa</AnimatedDiv>
        <AnimatedDiv>🔒 Phaser Star</AnimatedDiv>
        <AnimatedDiv>🔒 Outer Circle</AnimatedDiv>
        <AnimatedDiv>🔒 Bulbhead</AnimatedDiv>
        <AnimatedDiv>🔒 Landing Page</AnimatedDiv>
        <AnimatedDiv>🔒 Loadinmage</AnimatedDiv>
        <AnimatedDiv>🔒 Locked</AnimatedDiv>
        <AnimatedDiv>🔒 Inner Circle</AnimatedDiv>
      </div>
    </Section>
  );
};
