import React from "react";

export const ProjectIllustration = ({ i = 0 }) => {
  const [imageSrc, setImageSrc] = React.useState(null);

  React.useEffect(() => {
    // Static import map for known images
    const images = {
      0: import("./assets/project0-lg.jpg"),
    };

    if (images[i]) {
      images[i].then((module) => setImageSrc(module.default));
    }
  }, [i]);

  return (
    <div>
      <picture>
        <source srcSet={imageSrc} />
        <img
          src={imageSrc}
          srcSet={`${imageSrc?.replace(".jpg", "@2x.jpg")} 2x`}
          alt={`Project ${i} illustration`}
          className="w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
};
