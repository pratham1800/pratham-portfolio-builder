import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Product Manager", "Builder", "Engineer", "Problem Solver"];

const letterVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] as const },
  }),
  exit: { opacity: 0, y: -20, rotateX: 90, transition: { duration: 0.2 } },
};

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
          className="inline-flex text-primary"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words[index].split("").map((char, i) => (
            <motion.span key={i} custom={i} variants={letterVariants} className="inline-block" style={{ whiteSpace: "pre" }}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block w-[3px] h-[1em] bg-primary align-middle"
      />
    </span>
  );
};

export default Typewriter;
