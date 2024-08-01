import React from "react";
import { motion } from "framer-motion";
const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
          rotate: "2.5deg",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        Click me!
      </motion.button>
      <motion.button
        className="example-button"
        whileHover={{
          scale: 1.15,
        }}
        whileTap={{
          scale: 0.85,
          rotate: "-2.5deg",
        }}
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
        style={{ backgroundColor: "black" }}
      >
        Click me!
      </motion.button>
    </div>
  );
};

export default Gestures;
