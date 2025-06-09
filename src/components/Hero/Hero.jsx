import React from "react";
import { Apparition } from "./Apparition.jsx";
import { Section } from "../Section/Section.jsx";
import { LightAnimation } from "./LightAnimation.jsx";
import { useRandomProjectsLock } from "../../utility/RandomProjectsLockContext.jsx";
import "./Hero.css";

export const Hero = () => {
  const { RandomProjectsLocks, unlockProject } = useRandomProjectsLock();
  const onHover = () => {
    if (
      !RandomProjectsLocks.isMonaLisaUnlocked &&
      RandomProjectsLocks.isMemorielUnlocked
    ) {
      unlockProject("isMonaLisaUnlocked");
    }
  };
  return (
    <section
      id="hero"
      className="hero flex justify-center items-center w-full h-full relative"
    >
      <LightAnimation />
      <Section className="flex justify-center items-center min-h-[85dvh]">
        <div className="flex flex-col justify-center items-center  px-6">
          <Apparition
            text="GABRIEL SOMOGYI"
            delay={1.8}
            time={500}
            as="h1"
            className="font-['Bebas_Neue'] text-6xl text-center mb-2"
          />

          <h2 className="font-['Bebas_Neue'] flex md:flex-row flex-col gap-2 mb-2">
            <Apparition
              text="Engineering the present,"
              delay={3}
              className="text-5xl"
            />
            <Apparition
              text="Shaping the future"
              delay={4.5}
              className="text-5xl"
            />
          </h2>
          <h3 className="hero-subtitle text-lg font-normal">
            From leading global tech teams to crafting
            <span
              className="hero-span"
              onMouseEnter={onHover}
              onClick={onHover}
              title="clean, robust, and adaptable"
            >
              {" "}
              elegant{/* add easter egg here */}
            </span>{" "}
            code, I bridge innovation and execution.
          </h3>
          <div></div>
        </div>
      </Section>
    </section>
  );
};
