import { useEffect, useRef, useState } from "react";

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
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className={`font-mono-metric text-3xl md:text-4xl font-bold ${dark ? "gradient-text" : "text-primary"}`}>
        {prefix}{count}{suffix}
      </div>
      <p className={`mt-2 text-sm ${dark ? "text-slate-400" : "text-muted-foreground"}`}>{label}</p>
    </div>
  );
};

export default CountUpStat;
