import React from "react";
import "./Apparition.css";

export const Apparition = ({
  text,
  time = 800,
  delay = 1.9,
  className = "",
  as: Tag = "div", // Defaults to div, but can be any HTML tag
}) => {
  const allChars = text.split("");

  return (
    <Tag className={className}>
      {allChars.map((element, i) => {
        const random = Math.floor(Math.random() * time);

        return (
          <span
            className={"apparition"}
            data-anim={random}
            data-anim-delay={delay}
            key={i}
          >
            {element}
          </span>
        );
      })}
    </Tag>
  );
};
