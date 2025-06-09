import React, { useState } from "react";
import { Section } from "../Section/Section";
import "./Projects.css";
import { ProjectIllustration } from "./ProjectIllustration";
import { ProjectDetails } from "./ProjectDetails";
import { AnimatedDiv } from "../../utility/AnimatedDiv";
import { projectsData } from "./data/projects-data";
import { useRandomProjectsLock } from "../../utility/RandomProjectsLockContext";

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

const RandomProject = ({ name, link, stateIsUnlocked }) => {
  return (
    <a href={stateIsUnlocked ? link : null} target="_blank" rel="noreferrer">
      {stateIsUnlocked ? "🏆" : "🔒"} {name}
    </a>
  );
};

export const Projects = () => {
  // read url params for bulbhead and cssclock
  const { RandomProjectsLocks, unlockProject, lockAllProjects } =
    useRandomProjectsLock();

  const [nbHints, setNbHints] = useState(0);
  let aUselessVar = "";
  let a2ndUselessVar = "";

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
          class2="sm:row-start-2 sm:col-start-1 onleft"
          project={projectsData[1]}
        />
        <ProjectRow
          class1="row-start-3 col-start-1 xl:col-start-3 hidden sm:block"
          class2="row-start-3 col-start-2 xl:ml-[-3rem] onleft"
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
          class2="row-start-6 col-start-1 onleft"
          project={projectsData[5]}
        />
      </div>
      <AnimatedDiv className="text-sm pb-[1rem]">
        And some [fun] projects...{" "}
        <span
          data-cursor-pointer="true"
          onClick={() => {
            if (!RandomProjectsLocks.isMemorielUnlocked) {
              alert(
                "Locked? Of course they are! Love escape rooms? Find the eggs, crack the code… BOOM! One unlocked just for clicking here. 😉"
              );
              unlockProject("isMemorielUnlocked");
            } else if (!RandomProjectsLocks.isCssAnimsUnlocked) {
              alert(
                "🖱️ Click-happy, aren't you? Fine… here's another freebie. Shhh!"
              );
              unlockProject("isCssAnimsUnlocked");
            } else if (nbHints < 2) {
              setNbHints(nbHints + 1);
              alert("Nope! No more handouts. Go hunt those eggs 🥚 !");
            } else if (nbHints === 2) {
              alert(
                "Psst… devs hide secrets in console.log. Last hint! Scout smarter 🕵️‍♂️ !"
              );
              setNbHints(nbHints + 1);
              if (!RandomProjectsLocks.isBulbheadUnlocked) {
                aUselessVar =
                  "try that url : https://gabriel-somogyi.vercel.app/?isBulbheadUnlocked=true";
                console.log("🕵️‍♂️ breakpoint here 🕵️‍♂️");
              } else if (!RandomProjectsLocks.isCssClockUnlocked) {
                a2ndUselessVar =
                  "try that url : https://gabriel-somogyi.vercel.app/?isCssClockUnlocked=true";
                console.log("🕵️‍♂️ breakpoint here 🕵️‍♂️");
              } else if (!RandomProjectsLocks.isMonaLisaUnlocked) {
                console.log("what could 'elegant' mean ?");
              } else if (!RandomProjectsLocks.isPhaserStarUnlocked) {
                console.log(
                  "You will find the solution from light to darkness"
                );
              }
            } else {
              alert("That's it ! I'm out of hints. Go poke around elsewhere !");
            }
          }}
        >
          💡
        </span>
      </AnimatedDiv>
      <div className="text-sm grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {/* <RandomProject name="Memo-riel" icon="🔒" /> */}
        <AnimatedDiv>
          <RandomProject
            name="Memo-riel"
            stateIsUnlocked={RandomProjectsLocks.isMemorielUnlocked}
            link="https://memory-game-gabriels.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="awCSSome"
            stateIsUnlocked={RandomProjectsLocks.isCssAnimsUnlocked}
            link="https://cssanimationfun.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="CSS Clock"
            stateIsUnlocked={RandomProjectsLocks.isCssClockUnlocked}
            link="https://cssclock-gabriels.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="Pixel art MonaLisa"
            stateIsUnlocked={RandomProjectsLocks.isMonaLisaUnlocked}
            link="https://art-style-gabriels.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="Phaser Star"
            stateIsUnlocked={RandomProjectsLocks.isPhaserStarUnlocked}
            link="https://collect-star-phaser-gabriels.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="Outer circle"
            stateIsUnlocked={RandomProjectsLocks.isOuterCircleUnlocked}
            link="https://math-is-art-gabriels.vercel.app/art/mandala1/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="Bulbhead"
            stateIsUnlocked={RandomProjectsLocks.isBulbheadUnlocked}
            link="https://www.npmjs.com/package/console_font"
          />
        </AnimatedDiv>
        <AnimatedDiv>🔒 Landing Page</AnimatedDiv>
        <AnimatedDiv>🔒 Loadinmage</AnimatedDiv>
        <AnimatedDiv>
          <span onClick={() => lockAllProjects()}>🔒</span> Locked
        </AnimatedDiv>
        {aUselessVar && <div className="hidden">{aUselessVar}</div>}
        {a2ndUselessVar && <div className="hidden">{a2ndUselessVar}</div>}
      </div>
    </Section>
  );
};
