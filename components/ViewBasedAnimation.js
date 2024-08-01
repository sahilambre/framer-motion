import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("is in view ->", isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: "150vh" }}></div>
      <motion.div
        style={{ height: "100vh", background: "coral" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "yellow" : "pink",
          transition: "1s background",
        }}
      ></div>
    </>
  );
};

export default ViewBasedAnimation;
