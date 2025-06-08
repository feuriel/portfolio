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

const RandomProject = ({ name, link, stateIsLocked }) => {
  return (
    <a href={stateIsLocked ? null : link} target="_blank" rel="noreferrer">
      {stateIsLocked ? "🔒" : "🏆"} {name}
    </a>
  );
};

export const Projects = () => {
  // read url params for bulbhead and cssclock
  const urlParams = new URLSearchParams(window.location.search);
  const isBulbhead = urlParams.get("bulbhead") === "true";
  console.log(isBulbhead);
  const isCSSClock = urlParams.get("cssclock") === "true";
  if (isBulbhead) {
    window.localStorage.setItem("bulbhead", "true");
  }
  if (isCSSClock) {
    window.localStorage.setItem("cssclock", "true");
  }

  const initialIsLockedMemoriel =
    window.localStorage.getItem("memoriel") === "true" ? false : true;
  const initialIsLockedCSSAnims =
    window.localStorage.getItem("cssanims") === "true" ? false : true;
  const initialIsLockedCSSClock =
    window.localStorage.getItem("cssclock") === "true" ? false : true;
  const initialIsLockedMonaLisa =
    window.localStorage.getItem("monalisa") === "true" ? false : true;
  const initialIsLockedPhaserStar =
    window.localStorage.getItem("phaserstar") === "true" ? false : true;
  const initialIsLockedOuterCircle =
    window.localStorage.getItem("outercircle") === "true" ? false : true;
  const initialIsLockedBulbhead =
    window.localStorage.getItem("bulbhead") === "true" ? false : true;
  const initialIsLockedLanding = true; //window.localStorage.getItem("landing") === "true" ? false : true;
  const initialIsLockedLoadinmage = true; //window.localStorage.getItem("landing") === "true" ? false : true;;
  const initialIsLockedLocked = true;

  const [isLockedMemoriel, setIsLockedMemoriel] = useState(
    initialIsLockedMemoriel
  );
  const [isLockedCSSAnims, setIsLockedCSSAnims] = useState(
    initialIsLockedCSSAnims
  );
  const [isLockedCSSClock, setIsLockedCSSClock] = useState(
    initialIsLockedCSSClock
  );
  const [isLockedMonaLisa, setIsLockedMonaLisa] = useState(
    initialIsLockedMonaLisa
  );
  const [isLockedPhaserStar, setIsLockedPhaserStar] = useState(
    initialIsLockedPhaserStar
  );
  const [isLockedOuterCircle, setIsLockedOuterCircle] = useState(
    initialIsLockedOuterCircle
  );
  const [isLockedBulbhead, setIsLockedBulbhead] = useState(
    initialIsLockedBulbhead
  );
  const [isLockedLanding, setIsLockedLanding] = useState(
    initialIsLockedLanding
  );
  const [isLockedLoadinmage, setIsLockedLoadinmage] = useState(
    initialIsLockedLoadinmage
  );
  const [isLockedLocked, setIsLockedLocked] = useState(initialIsLockedLocked);
  const [nbHints, setNbHints] = useState(0);

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
          style={{ cursor: "pointer" }}
          onClick={() => {
            setNbHints(nbHints + 1);
            if (isLockedMemoriel && isLockedCSSAnims) {
              alert(
                "Locked? Of course they are! Love escape rooms? Find the eggs, crack the code… BOOM! One unlocked just for clicking here. 😉"
              );
              setIsLockedMemoriel(false);
              window.localStorage.setItem("memoriel", "true");
            } else if (isLockedCSSAnims) {
              alert(
                "🖱️ Click-happy, aren't you? Fine… here's another freebie. Shhh!"
              );
              setIsLockedCSSAnims(false);
              window.localStorage.setItem("cssanims", "true");
            } else if (nbHints < 3) {
              alert("Nope! No more handouts. Go hunt those eggs 🥚 !");
            } else if (nbHints === 3) {
              alert(
                "Psst… devs hide secrets in console.log. Last hint! Scout smarter 🕵️‍♂️ !"
              );
              if (isLockedBulbhead) {
                const aUselessVar =
                  "try that url : https://gabriel-somogyi.vercel.app/?bulbhead=true";
                console.log("🕵️‍♂️ breakpoint here 🕵️‍♂️");
              } else if (isLockedCSSClock) {
                const a2ndUselessVar =
                  "try that url : https://gabriel-somogyi.vercel.app/?cssclock=true";
                console.log("🕵️‍♂️ breakpoint here 🕵️‍♂️");
              } else if (isLockedMonaLisa) {
                console.log("what could 'elegant' mean ?");
              }
            } else {
              alert("That's it! I'm out of hints. Go poke around elsewhere!");
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
            stateIsLocked={isLockedMemoriel}
            link="https://memory-game-gabriels.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="awCSSome"
            stateIsLocked={isLockedCSSAnims}
            link="https://cssanimationfun.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="CSS Clock"
            stateIsLocked={isLockedCSSClock}
            link="https://cssclock-gabriels.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="Pixel art MonaLisa"
            stateIsLocked={isLockedMonaLisa}
            link="https://art-style-gabriels.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="Phaser Star"
            stateIsLocked={isLockedPhaserStar}
            link="https://collect-star-phaser-gabriels.vercel.app/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="Outer circle"
            stateIsLocked={isLockedOuterCircle}
            link="https://math-is-art-gabriels.vercel.app/art/mandala1/"
          />
        </AnimatedDiv>
        <AnimatedDiv>
          <RandomProject
            name="Bulbhead"
            stateIsLocked={isLockedBulbhead}
            link="https://www.npmjs.com/package/console_font"
          />
        </AnimatedDiv>
        <AnimatedDiv>🔒 Landing Page</AnimatedDiv>
        <AnimatedDiv>🔒 Loadinmage</AnimatedDiv>
        <AnimatedDiv>
          <span
            onClick={() => {
              window.localStorage.setItem("bulbhead", "");
              setIsLockedBulbhead(true);
              window.localStorage.setItem("cssclock", "");
              setIsLockedCSSClock(true);
              window.localStorage.setItem("memoriel", "");
              setIsLockedMemoriel(true);
              window.localStorage.setItem("cssanims", "");
              setIsLockedCSSAnims(true);
              window.localStorage.setItem("monalisa", "");
              setIsLockedMonaLisa(true);
              window.localStorage.setItem("phaserstar", "");
              setIsLockedPhaserStar(true);
              window.localStorage.setItem("outercircle", "");
              setIsLockedOuterCircle(true);
              window.localStorage.setItem("landing", "");
              setIsLockedLanding(true);
              window.localStorage.setItem("loadinmage", "");
              setIsLockedLoadinmage(true);
            }}
          >
            🔒
          </span>{" "}
          Locked
        </AnimatedDiv>
      </div>
    </Section>
  );
};
