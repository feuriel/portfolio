import React, { useState, useEffect } from "react";
import "./PreLoader.css";

export const PreLoader = () => {
  const [done, setDone] = useState(true);
  useEffect(() => {
    if (done) {
      console.log("coucou");
    }
  }, [done]);
  return (
    <div className="preloader">
      <div>G</div>
      <div>S</div>
    </div>
  );
};
