import React, { useState } from "react";
import { Section } from "../Section/Section";
import "./Projects.css";
import { ProjectIllustration } from "./ProjectIllustration";
import { ProjectDetails } from "./ProjectDetails";
import { AnimatedDiv } from "../../utility/AnimatedDiv";

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
        <AnimatedDiv className="toto row-start-1 col-start-1 hidden sm:block">
          <ProjectDetails
            title="CXC"
            role="Manager, UX/UI Design, Development"
            year="2024-2025 @Booking.com"
          >
            <p>
              Customer eXperience Catalog is the tool used by Booking.com to
              blablabla
            </p>
          </ProjectDetails>
        </AnimatedDiv>
        <AnimatedDiv className="row-start-1 col-start-2 xl:mr-[-4rem]">
          <ProjectIllustration i={0} />
        </AnimatedDiv>
        <AnimatedDiv className="row-start-2 col-start-2 hidden sm:block">
          <ProjectDetails
            title="Circles of Lines"
            role="Development"
            year="2025"
          ></ProjectDetails>
        </AnimatedDiv>
        <AnimatedDiv className="sm:row-start-2 sm:col-start-1">
          <ProjectIllustration i={1} />
        </AnimatedDiv>
        <AnimatedDiv className="row-start-3 col-start-1 xl:col-start-3 hidden sm:block">
          <ProjectDetails
            title="Chateau de Morin"
            role="Development"
            year="2016"
          ></ProjectDetails>
        </AnimatedDiv>
        <AnimatedDiv className="row-start-3 col-start-2 xl:ml-[-3rem]">
          <ProjectIllustration i={2} />
        </AnimatedDiv>
        <AnimatedDiv className="row-start-4 col-start-2 hidden sm:block">
          <ProjectDetails
            title="Coming Soon"
            role="Development"
            year="2025"
          ></ProjectDetails>
        </AnimatedDiv>
        <AnimatedDiv className="row-start-4 col-start-1 xl:col-start-3">
          <ProjectIllustration i={3} />
        </AnimatedDiv>
        <AnimatedDiv className="row-start-5 col-start-1 hidden sm:block">
          <ProjectDetails
            title="Math is Art"
            role="Development"
            year="2025"
          ></ProjectDetails>
        </AnimatedDiv>
        <AnimatedDiv className="row-start-5 col-start-2">
          <ProjectIllustration i={4} />
        </AnimatedDiv>
        <AnimatedDiv className="row-start-6 col-start-2 hidden sm:block">
          <ProjectDetails
            title="Hawaya"
            role="Direction of Engineering"
            year="2021-2022 @MatchGroup"
          ></ProjectDetails>
        </AnimatedDiv>
        <AnimatedDiv className="row-start-6 col-start-1">
          <ProjectIllustration i={5} />
        </AnimatedDiv>
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
