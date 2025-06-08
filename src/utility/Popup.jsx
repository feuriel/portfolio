import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { projectsData } from "../components/Projects/data/projects-data";
import "./Popup.css";

export const Popup = () => {
  const { isOpen, currentProject, closeModal } = useContext(ModalContext);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-90 backdrop-blur-md z-50 overflow-hidden flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div className="fixed top-0 right-0">coucou</div>
      <div className="max-w-7xl bg-[var(--base-bg-color)] m-12 rounded-md overflow-hidden">
        <img
          className="max-h-[300px] popup-img"
          src={projectsData[currentProject].illustration}
          alt={`Illlustration of project ${projectsData[currentProject].title}`}
        ></img>
        <div className="p-8 mt-[-5rem]">
          <h3 className="m-auto text-center font-['Bebas_Neue'] text-5xl tracking-wider pb-4">
            {projectsData[currentProject].title}
          </h3>
          <div>{projectsData[currentProject].year}</div>
          <div>{projectsData[currentProject].role}</div>
          <div> {projectsData[currentProject].details}</div>
        </div>
      </div>
    </div>
  );
};
