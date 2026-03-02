import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}

const Typewriter = ({ words, className = "", speed = 100, deleteSpeed = 60, pause = 2000 }: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink text-primary">|</span>
    </span>
  );
};

export default Typewriter;
