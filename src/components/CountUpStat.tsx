import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  dark?: boolean;
}

const CountUpStat = ({ end, suffix = "", prefix = "", label, duration = 2000, dark = false }: CountUpStatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-mono-metric text-4xl md:text-6xl font-bold gradient-text">
        {prefix}{count}{suffix}
      </div>
      <p className="mt-3 text-sm text-muted-foreground uppercase tracking-widest font-medium">{label}</p>
    </motion.div>
  );
};

export default CountUpStat;
