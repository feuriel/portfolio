import React from "react";
import "./Section.css";
import { UnderConstruction } from "../../utility/UnderConstruction";

export const Section = ({
  id,
  className, // eslint-disable-next-line no-unused-vars
  as: Tag = "section", // Defaults to div, but can be any HTML tag
  children,
  finished = true,
  ...restProps
}) => {
  const totalClassNames = `relative section overflow-visible m-auto w-full max-w-7xl pt-20 px-4 md:px-24 xl:px-12 bg-[var(--base-bg-color-transparent)] ${className}`;
  if (!finished) {
    return (
      <Tag id={id} className={totalClassNames} {...restProps}>
        <UnderConstruction />
      </Tag>
    );
  }
  return (
    <Tag id={id} className={totalClassNames} {...restProps}>
      {children}
    </Tag>
  );
};
