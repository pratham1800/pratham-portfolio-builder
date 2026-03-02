import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Product Manager", "Builder", "Engineer", "Problem Solver"];

const Typewriter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-primary"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block w-[3px] h-[1em] bg-primary align-middle"
      />
    </span>
  );
};

export default Typewriter;
