import React from "react";

export const ProjectDetails = ({
  title = "Project0",
  role = "Engineering",
  year = "2025",
  children,
}) => {
  return (
    <div>
      <h3 className="font-['Bebas_Neue'] text-5xl tracking-wider pb-4">
        {title}
      </h3>
      <div className="text-sm  pb-4">{year}</div>
      <div className="text-sm  pb-4">Role: {role}</div>
      {/* {children} */}
    </div>
  );
};
