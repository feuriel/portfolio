import React from "react";
import { Linkedin } from "./Linkedin";
import { GMail } from "./GMail";
import "./Media.css";
import { Github } from "./Github";

export const Media = ({
  withLinkedin = false,
  withGithub = false,
  withGoogle = false,
  moreClassName,
}) => {
  return (
    <div className={`${moreClassName} media flex justify-center gap-4`}>
      {withLinkedin && <Linkedin />}
      {withGithub && <Github />}
      {withGoogle && <GMail />}
    </div>
  );
};
