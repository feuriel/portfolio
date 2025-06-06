import React from "react";
import { motion as MOTION } from "framer-motion";

export const AnimatedDiv = ({ className, amount = 0.5, y = 35, children }) => {
  return (
    <MOTION.div
      className={className}
      initial={{
        y: y,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      }}
      viewport={{ once: true, amount: amount }}
    >
      {children}
    </MOTION.div>
  );
};
