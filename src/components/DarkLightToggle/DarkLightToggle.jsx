// import React from "react";

// export const DarkLightToggle = () => {
//   const onClick = () => {
//     document.documentElement.classList.toggle("dark");
//   };
//   return (
//     <div className="absolute top-10 right-10 z-10">
//       <button onClick={onClick}>DarkLightToggle 🌞🌙 </button>
//     </div>
//   );
// };

import React from "react";
import { useEffect, useState } from "react";

export const DarkLightToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedMode === "dark" || (!savedMode && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const onClick = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <button
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
