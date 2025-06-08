import React from "react";
import { ReactNative } from "./ReactNative";

export const TechBar = ({ reactNative = true }) => {
  return <div className="h-[2rem]">{reactNative ? <ReactNative /> : null}</div>;
};
