import React from "react";
import "./SectionDivider.css";
import { useRef, useEffect, useState } from "react";

export const SectionDivider = () => {
  const handleMouseMove = (event) => {
    const scrollX = window.scrollX || document.documentElement.scrollLeft;

    const windowHeight = window.innerHeight; // total height
    const windowWidth = window.innerWidth; // total width
    const x = event.clientX;
    const y = event.clientY;
    const currentX = x - scrollX; // x on current viewport
    const currentY = y; // y on current viewport

    const ratioX = currentX / windowWidth;
    const ratioY = currentY / windowHeight;

    const rotateY = -11 + ratioX * 22; // between -11 and +11
    const rotateX = -11 + ratioY * 22;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotatez(0deg)`
    );
  };
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(1.8354deg) rotateY(-20.36076deg) rotate(0deg)"
  );
  const [lineWidth, setLineWidth] = useState("100%");
  //const [left, setLeft] = useState("0px");
  const elementRef = useRef(null);
  useEffect(() => {
    setLineWidth(window.innerWidth + 40);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("resize", () => {
      () => {
        setLineWidth(window.innerWidth + 40);
      };
    });

    //setLeft(`-${(window.innerWidth - elementRef.current.offsetWidth) / 2}px`); -- no need if not maxed at 1280px
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div ref={elementRef} className="interactive-divider">
      <div
        className="line"
        style={{ transform, width: lineWidth, left: "-20px" }}
      ></div>
    </div>
  );
};
