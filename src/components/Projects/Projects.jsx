import React from "react";
import { Section } from "../Section/Section";
import "./Projects.css";
import { ProjectIllustration } from "./ProjectIllustration";
import { ProjectDetails } from "./ProjectDetails";

export const Projects = () => {
  return (
    <Section
      id="projects"
      className="min-h-dvh md:pt-35 lg:pt-36 xl:pl-[7rem]"
      data-before-content="projects"
      finished={true}
    >
      <h3 className="mt-[-2rem] mb-[2rem] md:hidden">Selected projects :</h3>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 grid-rows-[minmax(200px,1fr)]">
        <div className="row-start-1 col-start-1">
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
        </div>
        <div className="row-start-1 col-start-2 ml-[-1rem] ps-[1rem]">
          <ProjectIllustration i={0} />
        </div>
        <div className="row-start-2 col-start-2">
          <ProjectDetails
            title="Circles of Lines"
            role="Development"
            year="2025"
          ></ProjectDetails>
        </div>
        <div className="row-start-2 col-start-1">
          <ProjectIllustration i={1} />
        </div>
        <div className="row-start-3 col-start-1 xl:col-start-3">
          <ProjectDetails
            title="Chateau de Morin"
            role="Development"
            year="2016"
          ></ProjectDetails>
        </div>
        <div className="row-start-3 col-start-2">
          <ProjectIllustration i={2} />
        </div>
        <div className="row-start-4 col-start-2">
          <ProjectDetails
            title="Under Construction"
            role="Development"
            year="2025"
          ></ProjectDetails>
        </div>
        <div className="row-start-4 col-start-1 xl:col-start-3">
          <ProjectIllustration i={3} />
        </div>
        <div className="row-start-5 col-start-1">
          <ProjectDetails
            title="Math is Art"
            role="Development"
            year="2025"
          ></ProjectDetails>
        </div>
        <div className="row-start-5 col-start-2">
          <ProjectIllustration i={4} />
        </div>
        <div className="row-start-6 col-start-2">
          <ProjectDetails
            title="Hawaya"
            role="Direction of Engineering"
            year="2021-2022 @MatchGroup"
          ></ProjectDetails>
        </div>
        <div className="row-start-6 col-start-1">
          <ProjectIllustration i={5} />
        </div>
      </div>
      <div className="text-sm">And some older projects...</div>
      <div className="text-sm grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        <div>random1</div>
        <div>random2</div>
        <div>random3</div>
        <div>random4</div>
        <div>random5</div>
        <div>random6</div>
        <div>random7</div>
        <div>random8</div>
      </div>
    </Section>
  );
};
