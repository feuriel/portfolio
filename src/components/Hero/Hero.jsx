import React from "react";
import { Apparition } from "./Apparition.jsx";

export const Hero = () => {
  return (
    <section id="hero" className="hero flex justify-center items-center">
      <section className="flex justify-center items-center min-h-dvh max-w-7xl px-4 md:px-12 xl:px-4">
        <div></div>
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
              text="Transforming the present,"
              delay={3}
              className="text-5xl"
            />
            <Apparition
              text="Engineering the future"
              delay={4.5}
              className="text-5xl"
            />
          </h2>
          <h3 className="text-lg">
            From leading global tech teams to crafting elegant code, I bridge
            innovation and execution.
          </h3>
          <div>
            <a>Explore my journey</a>
            <a></a>
          </div>
        </div>
      </section>
    </section>
  );
};
