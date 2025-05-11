import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-dvh">
      <h1 className="font-['Bebas_Neue'] text-7xl">GABRIEL SOMOGYI</h1>
      <div className="flex flex-row gap-2">
        <div className="text-3xl font-[figtree]">Transforming the present,</div>
        <div className="text-3xl font-[figtree]">Engineering the future </div>
      </div>
    </section>
  );
};
