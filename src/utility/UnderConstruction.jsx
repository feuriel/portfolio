import React, { useRef, useEffect, useState } from "react";
import "./UnderConstruction.css";

const useDiagonalAngle = (ref) => {
  const [angle, setAngle] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const updateAngle = () => {
      console.log("toto");
      if (ref && ref.current && ref.current) {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        const angleRad = Math.atan2(height, width);
        const angleDeg = angleRad * (180 / Math.PI);
        const diagonalLength = Math.sqrt(width * width + height * height);

        setAngle(angleDeg);
        setLength(diagonalLength);
      }
    };

    updateAngle();
    window.addEventListener("resize", updateAngle);

    return () => {
      window.removeEventListener("resize", updateAngle);
    };
  }, [ref]);

  return { angle, length };
};

export const UnderConstruction = (doubled = false) => {
  const containerRef = useRef(null);
  const { angle, length } = useDiagonalAngle(containerRef);
  return (
    <div ref={containerRef} className="relative w-full h-dvh overflow-hidden">
      <div
        className="police-line flex justify-start"
        style={{
          "--angle": `${angle}deg`,
          width: `${length}px`,
          transform: `rotate(${angle}deg)`,
        }}
      ></div>
      {doubled && (
        <div
          className="police-line flex justify-start"
          style={{
            "--angle": `-${angle}deg`,
            width: `${length}px`,
            transform: `rotate(-${angle}deg)`,
            top: "100%",
          }}
        ></div>
      )}
    </div>
  );
};
