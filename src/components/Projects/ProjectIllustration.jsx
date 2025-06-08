import React, { useContext } from "react";
import { ModalContext } from "../../utility/ModalContext";
import "./ProjectIllustration.css";

export const ProjectIllustration = ({ i = 0 }) => {
  const [imageSrc, setImageSrc] = React.useState(null);
  const { openModal } = useContext(ModalContext);

  React.useEffect(() => {
    // Static import map for known images
    const images = {
      0: import("./assets/project0-lg.webp"),
      1: import("./assets/project1-lg.webp"),
      2: import("./assets/project2-lg.webp"),
      3: import("./assets/project3-lg.webp"),
      4: import("./assets/project4-lg.webp"),
      5: import("./assets/project5-lg.webp"),
    };

    if (images[i]) {
      images[i].then((module) => setImageSrc(module.default));
    }
  }, [i]);

  return (
    <div className="project-illustration">
      <img
        src={imageSrc}
        alt={`Project ${i} illustration`}
        className="w-full h-auto object-cover"
        //        loading="lazy"
        decoding="async"
        onClick={() => {
          console.log(`opening project ${i}`);
          openModal(i);
        }}
      />
    </div>
  );
};
