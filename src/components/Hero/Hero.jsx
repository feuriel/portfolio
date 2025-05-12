import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="flex justify-center items-center min-h-dvh">
      <div className="flex flex-col justify-center items-center  px-6">
        <h1 className="font-['Bebas_Neue'] text-6xl text-center mb-2">
          GABRIEL SOMOGYI
        </h1>
        <h2 className="font-['Bebas_Neue'] flex md:flex-row flex-col gap-2 mb-2">
          <div className="text-5xl">Transforming the present,</div>
          <div className="text-5xl">Engineering the future </div>
        </h2>
        <h3 className="text-lg">
          From leading global tech teams to crafting elegant code, I bridge
          innovation and execution—discover how.
        </h3>
        <div>
          <a>Explore my journey</a>
        </div>
      </div>
    </section>
  );
};
