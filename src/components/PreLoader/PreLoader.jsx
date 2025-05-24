import React, { useEffect } from "react";
import "./PreLoader.css";

export const PreLoader = () => {
  useEffect(() => {
    // Disable scrolling when preloader mounts
    //document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
    //document.body.classList.add("overflow-hidden"); //style.overflow = "hidden";
  }, []);
  setTimeout(() => {
    // Re-enable scrolling when preloader unmounts
    document.body.style.overflowY = "auto";
    //document.body.classList.remove("overflow-hidden"); //style.overflow = "visible";
  }, 1800);
  //document.body.style.overflow = "hidden";
  return (
    <div className="preloader">
      <div>G</div>
      <div>S</div>
    </div>
  );
};
