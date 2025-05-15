import React from "react";

export const Section = ({
  id,
  className, // eslint-disable-next-line no-unused-vars
  as: Tag = "section", // Defaults to div, but can be any HTML tag
  children,
}) => {
  const totalClassNames = `relative m-auto w-full max-w-7xl pt-20 px-4 md:px-12 xl:px-4 ${className}`;
  return (
    <Tag className={totalClassNames} id={id}>
      {children}
    </Tag>
  );
};
