import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { projectsData } from "../components/Projects/data/projects-data";
import "./Popup.css";
import { TechBar } from "../components/Tech/TechBar";

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
      <div
        className="fixed top-4 right-4 cursor-pointer"
        onClick={handleOutsideClick}
      >
        ╳
      </div>
      <div className="popup max-w-7xl bg-[var(--base-bg-color)] m-16 rounded-md overflow-auto max-h-[80dvh]">
        <img
          className="max-h-[300px] min-h-[250px] object-cover popup-img m-auto"
          src={projectsData[currentProject].illustration}
          alt={`Illlustration of project ${projectsData[currentProject].title}`}
        ></img>
        <div className="p-8 mt-[-5rem]">
          <h3 className="m-auto text-center font-['Bebas_Neue'] text-5xl tracking-wider pb-4">
            {projectsData[currentProject].title}
          </h3>
          <div className="sm:hidden mb-2">
            {projectsData[currentProject].year}
          </div>
          <div className="sm:hidden mb-2 italic">
            Role: {projectsData[currentProject].role}
          </div>
          <div className="flex gap-4 justify-center mb-4">
            <a
              href={
                projectsData[currentProject].link &&
                !projectsData[currentProject].blocked
                  ? projectsData[currentProject].link
                  : null
              }
              target="_blank"
              rel="noreferrer"
              className={`flex gap-2 px-4 py-3 bg-[color:var(--primary-color)] hover:bg-[color:var(--primary-hover)] 
          text-black font-medium rounded-md transition-colors duration-150 pointer ${
            projectsData[currentProject].blocked ? "blocked" : ""
          }`}
            >
              {projectsData[currentProject].blocked ? "🔒" : "➥"} View project
            </a>
          </div>
          <div className="mb-4"> {projectsData[currentProject].details}</div>
          <TechBar {...projectsData[currentProject]} />
        </div>
      </div>
    </div>
  );
};
