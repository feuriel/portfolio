import React, { useEffect } from "react";
import "./PreLoader.css";

export const PreLoader = () => {
  useEffect(() => {
    // Disable scrolling when preloader mounts
    document.body.style.overflow = "hidden";
  }, []);
  setTimeout(() => {
    // Re-enable scrolling when preloader unmounts
    document.body.style.overflow = "visible";
  }, 1800);
  //document.body.style.overflow = "hidden";
  return (
    <div className="preloader">
      <div>G</div>
      <div>G</div>
    </div>
  );
};
