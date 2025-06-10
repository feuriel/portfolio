import React from "react";
import { useState } from "react";
import { useRandomProjectsLock } from "../../utility/RandomProjectsLockContext";

export const DarkLightToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const { RandomProjectsLocks, unlockProject } = useRandomProjectsLock();

  const onClick = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark");
    if (
      !RandomProjectsLocks.isPhaserStarUnlocked &&
      isDark &&
      RandomProjectsLocks.isMemorielUnlocked
    ) {
      unlockProject("isPhaserStarUnlocked");
    }
  };

  return (
    <button
      data-cursor-pointer="true"
      style={{ cursor: "none" }}
      onClick={onClick}
      className="w-12 h-12 rounded-full flex items-center justify-center
                  hover:bg-neutral-700 transition-all duration-300 shadow-md hover:shadow-xl
                 hover:cursor-pointer"
      aria-label={
        isDark
          ? "Switch to light mode, if you really cannot do dark mode.."
          : "Switch back to dark mode"
      }
    >
      {isDark ? <span>🌙</span> : <span>🌞</span>}
    </button>
  );
};
