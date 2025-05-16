import React from "react";
import "./About.css";
import { Section } from "../Section/Section";

export const About = () => {
  return (
    <Section
      id="about"
      className={`min-h-dvh grid grid-cols-2 `}
      data-before-content={"about"}
    >
      <div>
        <img src="https://preetheme.com/html/flowa/assets/img/hero.png" />
      </div>
      <div>
        <h3>Hi there! I'm Gabriel !</h3>
        <p>
          I am a <em>tech lead and team catalyst</em> who wears many hats - and
          loves every one of them. At heart, I'm a leader who believes great
          software emerges when teams feel empowered, connected, and inspired.
          My superpower is
          <em> connecting people and ideas</em> - whether that's bridging
          engineers with designers, aligning tech with business goals, or
          mentoring developers into confident leaders.
        </p>
        <h4>What drives me</h4>
        <ul>
          <li>
            🤝 People-first - Cultivating teams where engineers thrive, not just
            deliver
          </li>
          <li>
            🚀 Connecting the dot - Bridging design, business, and engineering
            with equal fluency
          </li>
          <li>
            🧠 Continuous learning - Exploring how AI can elevate both products
            and teams
          </li>
        </ul>
        <h4>Beyond work, you can find me:</h4>
        <ul>
          <li>
            💻 Tinkering with side projects - From AI experiments to nostalgic
            game mods
          </li>
          <li>
            🎲 Designing board games - Where UX principles meet offline fun
          </li>
          <li>
            🎶 Improvising on some instruments - Last in date, the handpan !
          </li>
        </ul>
      </div>
    </Section>
  );
};
