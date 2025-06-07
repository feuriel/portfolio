import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { projectsData } from "../components/Projects/data/projects-data";

export const Popup = () => {
  const { isOpen, currentProject, closeModal } = useContext(ModalContext);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-90 backdrop-blur-md z-50 overflow-hidden "
      onClick={handleOutsideClick}
    >
      <div className="max-w-7xl m-auto bg-red-200">
        {projectsData[currentProject].title}
      </div>
    </div>
  );
};
