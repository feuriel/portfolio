import React from "react";
import { Media } from "../Media/Media.jsx";

export const ContactSide = ({ className }) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <h3>Let's connect !</h3>
      <p>
        Feel free to reach out to me directly via email at
        gabriel.somogyi.feuga@gmail.com
      </p>
      <p>You can also reach on my social network.</p>
      <Media
        withLinkedin={true}
        withGithub={true}
        moreClassName={"justify-start"}
      />
    </div>
  );
};
