import React from "react";
import "./ProjectIllustration.css";

export const ProjectIllustration = ({ i = 0 }) => {
  const [imageSrc, setImageSrc] = React.useState(null);

  React.useEffect(() => {
    // Static import map for known images
    const images = {
      0: import("./assets/project0-lg.jpg"),
      1: import("./assets/project1-lg.png"),
      2: import("./assets/project2-lg.jpg"),
      3: import("./assets/project3-lg.png"),
      4: import("./assets/project4-lg.png"),
      5: import("./assets/project5-lg.png"),
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
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
