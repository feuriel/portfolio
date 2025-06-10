import React from "react";
import { Media } from "../Media/Media.jsx";
import { AnimatedDiv } from "../../utility/AnimatedDiv.jsx";
import Resume from "./Gabriel Somogyi - Resume.pdf";

export const ContactSide = ({ className }) => {
  return (
    <AnimatedDiv className={`flex flex-col gap-6 ${className}`}>
      <h3>Let's connect !</h3>
      <p>
        Feel free to reach out to me directly via email at{" "}
        <a href="mailto:gabriel.somogyi.feuga@gmail.com" className="underline">
          gabriel.somogyi.feuga@gmail.com
        </a>
      </p>
      <p>
        You can also reach out on my social network and{" "}
        <a href={Resume} download className="underline">
          download my resume
        </a>
        .
      </p>
      <Media
        withLinkedin={true}
        withGithub={true}
        moreClassName={"justify-start"}
      />
    </AnimatedDiv>
  );
};
