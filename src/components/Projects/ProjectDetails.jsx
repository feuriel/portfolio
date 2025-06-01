import React from "react";

export const ProjectDetails = ({
  title = "Project0",
  role = "Engineering",
  year = "2025",
  children,
}) => {
  return (
    <div>
      <h3 className="text-5xl ">{title}</h3>
      <div className="text-sm">
        {year} - <span className="italic">{role}</span>
      </div>
      {/* {children} */}
    </div>
  );
};
