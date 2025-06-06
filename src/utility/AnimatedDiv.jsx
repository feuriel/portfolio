import React from "react";
import { motion as MOTION } from "framer-motion";

export const AnimatedDiv = ({ className, children }) => {
  return (
    <MOTION.div
      className={className}
      initial={{
        y: 25,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </MOTION.div>
  );
};
