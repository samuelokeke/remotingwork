"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = ["Employer", "Job Seeker"];

const FlipText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const flipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          variants={flipVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="inline-block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
  );
};

export default FlipText;
