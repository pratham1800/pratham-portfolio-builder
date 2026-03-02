import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Product Manager", "Builder", "Engineer", "Problem Solver"];

const Typewriter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-primary italic"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default Typewriter;
