import React from "react";
import "./Section.css";

export const Section = ({
  id,
  className, // eslint-disable-next-line no-unused-vars
  as: Tag = "section", // Defaults to div, but can be any HTML tag
  children,
  ...restProps
}) => {
  const totalClassNames = `relative section overflow-visible m-auto w-full max-w-7xl pt-20 px-4 md:px-24 xl:px-12 ${className}`;
  return (
    <Tag id={id} className={totalClassNames} {...restProps}>
      {children}
    </Tag>
  );
};
