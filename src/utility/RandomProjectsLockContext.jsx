import { createContext, useContext, useState, useEffect } from "react";

// Define the shape of your Easter Egg states
const RandomProjectsLockContext = createContext();

export const RandomProjectsLockProvider = ({ children }) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isBulbheadUnlocked = urlParams.get("isBulbheadUnlocked") === "true";
    const isCssClockUnlocked = urlParams.get("isCssClockUnlocked") === "true";
    if (isBulbheadUnlocked) {
      window.localStorage.setItem("isBulbheadUnlocked", "true");
      unlockProject("isBulbheadUnlocked");
    }
    if (isCssClockUnlocked) {
      window.localStorage.setItem("isCssClockUnlocked", "true");
      unlockProject("isCssClockUnlocked");
    }
  }, []);

  // Initialize state from localStorage or defaults
  const [RandomProjectsLocks, setRandomProjectsLocks] = useState({
    isMemorielUnlocked:
      localStorage.getItem("isMemorielUnlocked") === "true" ? true : false, // Default: true if not set
    isCssAnimsUnlocked:
      localStorage.getItem("isCssAnimsUnlocked") === "true" ? true : false,
    isCssClockUnlocked:
      localStorage.getItem("isCssClockUnlocked") === "true" ? true : false,
    isMonaLisaUnlocked:
      localStorage.getItem("isMonaLisaUnlocked") === "true" ? true : false,
    isPhaserStarUnlocked:
      localStorage.getItem("isPhaserStarUnlocked") === "true" ? true : false,
    isOuterCircleUnlocked:
      localStorage.getItem("isOuterCircleUnlocked") === "true" ? true : false,
    isBulbheadUnlocked:
      localStorage.getItem("isBulbheadUnlocked") === "true" ? true : false,
    isRingCursorUnlocked:
      localStorage.getItem("isRingCursorUnlocked") === "true" ? true : false,
    isLandingUnlocked: false,
    isLoadinmageUnlocked: false,
    isLockedUnlocked: false,
  });

  // Function to unlock a specific Easter Egg
  const unlockProject = (projectName) => {
    setRandomProjectsLocks((prev) => ({
      ...prev,
      [projectName]: true,
    }));
    localStorage.setItem(projectName, true);
  };

  const lockAllProjects = () => {
    setRandomProjectsLocks((prev) => ({
      ...prev,
      isMemorielUnlocked: false,
      isCssAnimsUnlocked: false,
      isCssClockUnlocked: false,
      isMonaLisaUnlocked: false,
      isPhaserStarUnlocked: false,
      isOuterCircleUnlocked: false,
      isBulbheadUnlocked: false,
      isRingCursorUnlocked: false,
      isLandingUnlocked: false,
      isLoadinmageUnlocked: false,
    }));
    localStorage.setItem("isMemorielUnlocked", false);
    localStorage.setItem("isCssAnimsUnlocked", false);
    localStorage.setItem("isCssClockUnlocked", false);
    localStorage.setItem("isMonaLisaUnlocked", false);
    localStorage.setItem("isPhaserStarUnlocked", false);
    localStorage.setItem("isOuterCircleUnlocked", false);
    localStorage.setItem("isBulbheadUnlocked", false);
    localStorage.setItem("isLandingUnlocked", false);
    localStorage.setItem("isLoadinmageUnlocked", false);
    localStorage.setItem("isRingCursorUnlocked", false);
  };

  return (
    <RandomProjectsLockContext.Provider
      value={{ RandomProjectsLocks, unlockProject, lockAllProjects }}
    >
      {children}
    </RandomProjectsLockContext.Provider>
  );
};

export const useRandomProjectsLock = () =>
  useContext(RandomProjectsLockContext);
