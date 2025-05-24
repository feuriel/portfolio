import React from "react";
import "./About.css";
import { Section } from "../Section/Section";
import { motion as MOTION } from "framer-motion";

export const About = () => {
  return (
    <Section
      id="about"
      className={`about min-h-dvh grid gap-4 grid-cols-1 md:grid-cols-2 `}
      data-before-content={"about"}
      as="main"
    >
      <div>
        <img src="https://preetheme.com/html/flowa/assets/img/hero.png" />
      </div>
      <MOTION.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-gray-400 flex justify-center flex-col gap-6"
      >
        <h3>Hi there, I'm Gabriel !</h3>
        <p>
          I am a <em>tech lead and team catalyst</em> who wears many hats - and
          loves every one of them. With <em>10 years of experience</em>, I
          orchestrate environments where great software emerges from empowered
          and connected teams. My superpower is
          <em> connecting people and ideas</em> - spotting invisible synergies
          between engineers, designers, and business goals, then wiring them for
          success.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href={"#contact"}
            className="flex gap-2 px-4 py-3 bg-[color:var(--primary-color)] hover:bg-[color:var(--primary-hover)] 
          text-black font-medium rounded-md transition-colors duration-150 pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              ></path>
            </svg>
            Contact me
          </a>
          <a
            href="#projects"
            className="px-4 py-3 secondary-button font-medium rounded-md transition-colors duration-150 pointer bg-[var(--background-color)] hover:bg-[var(--background-color-hover)] text-[color:var(--text-color)]"
          >
            See my projects
          </a>
        </div>
      </MOTION.div>
      <MOTION.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-gray-400 md:col-span-2"
      >
        <h4 className="pb-4">What drives me:</h4>
        <ul className="pb-4 *:pb-2">
          <li>
            <em>People-first</em> - Cultivating teams where engineers thrive,
            not just deliver
          </li>
          <li>
            <em>Connecting the dots</em> - Bridging design, business, and
            engineering with equal fluency
          </li>
          <li>
            <em>Continuous learning</em> - Exploring how AI can elevate both
            products and teams
          </li>
        </ul>
        <h4 className="pb-4">Beyond work, you can find me:</h4>
        <ul className="pb-6 *:pb-2">
          <li>
            <em>Tinkering with side projects</em> - From AI experiments to
            nostalgic game mods
          </li>
          <li>
            <em>Designing board games</em> - Where UX principles meet offline
            fun
          </li>
          <li>
            <em>Improvising on some instruments</em> - Last in date, the handpan
            !
          </li>
        </ul>
      </MOTION.div>
    </Section>
  );
};
