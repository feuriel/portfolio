import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (projectIndex) => {
    setCurrentProject(projectIndex);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentProject(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, currentProject, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
