import React from "react";
import { Media } from "../Media/Media.jsx";
import { AnimatedDiv } from "../../utility/AnimatedDiv.jsx";

export const ContactSide = ({ className }) => {
  return (
    <AnimatedDiv className={`flex flex-col gap-6 ${className}`}>
      <h3>Let's connect !</h3>
      <p>
        Feel free to reach out to me directly via email at{" "}
        <a href="mailto:gabriel.somogyi.feuga@gmail.com">
          gabriel.somogyi.feuga@gmail.com
        </a>
      </p>
      <p>You can also reach on my social network.</p>
      <Media
        withLinkedin={true}
        withGithub={true}
        moreClassName={"justify-start"}
      />
    </AnimatedDiv>
  );
};
