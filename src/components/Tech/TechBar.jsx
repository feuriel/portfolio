import React from "react";
import { ReactNativeLogo } from "./ReactNativeLogo";
import { GCPLogo } from "./GCPLogo";
import { ReactLogo } from "./ReactLogo";
import "./TechBar.css";
import { AWSLogo } from "./AWSLogo";
import { TailwindLogo } from "./TailwindLogo";
import { JestLogo } from "./JestLogo";
import { ViteLogo } from "./ViteLogo";
import { SassLogo } from "./SassLogo";
import { VercelLogo } from "./VercelLogo";
// import { TestingLibraryLogo } from "./TestingLibraryLogo";
import { TSLogo } from "./TSLogo";
import { WebpackLogo } from "./WebpackLogo";
import { PlaywrightLogo } from "./PlaywrightLogo";
import { NPMLogo } from "./NPMLogo";

export const TechBar = ({
  withReactNative = false,
  withGCP = false,
  withReact = false,
  withAWS = false,
  withTailwind = false,
  withJest = false,
  withVite = false,
  withSass = false,
  withVercel = false,
  //withTestingLibrary = false,
  withTS = false,
  withWebpack = false,
  withPlaywright = false,
  withNPM = false,
}) => {
  if (
    !withReactNative &&
    !withReact &&
    !withTailwind &&
    !withSass &&
    !withTS &&
    !withJest &&
    //    !withTestingLibrary &&
    !withPlaywright &&
    !withGCP &&
    !withAWS &&
    !withVite &&
    !withWebpack &&
    !withVercel &&
    !withNPM
  ) {
    return null;
  }
  return (
    <div className="tech-bar h-[2.5rem] flex items-center gap-4 overflow-hidden">
      {withReactNative && <ReactNativeLogo />}
      {withReact && <ReactLogo />}
      {withTailwind && <TailwindLogo />}
      {withSass && <SassLogo />}
      {withTS && <TSLogo />}
      {withJest && <JestLogo />}
      {/* {withTestingLibrary && <TestingLibraryLogo />} */}
      {withPlaywright && <PlaywrightLogo />}
      {withGCP && <GCPLogo />}
      {withAWS && <AWSLogo />}
      {withVite && <ViteLogo />}
      {withWebpack && <WebpackLogo />}
      {withVercel && <VercelLogo />}
      {withNPM && <NPMLogo />}
    </div>
  );
};
