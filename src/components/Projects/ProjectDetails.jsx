import React, { useContext } from "react";
import { ModalContext } from "../../utility/ModalContext";

export const ProjectDetails = ({
  title = "Project0",
  role = "Engineering",
  year = "2025",
  i = 0,
  children,
}) => {
  const { openModal } = useContext(ModalContext);
  return (
    <div>
      <h3
        className="font-['Bebas_Neue'] text-5xl tracking-wider pb-4 cursor-pointer"
        onClick={() => {
          openModal(i);
        }}
      >
        {title}
      </h3>
      <div className="text-sm  pb-4">{year}</div>
      <div className="text-sm  pb-4 italic">Role: {role}</div>
      {/* {children} */}
    </div>
  );
};
