import { useEffect, useRef, useState } from "react";

interface CountUpStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

const CountUpStat = ({ end, suffix = "", prefix = "", label, duration = 2000 }: CountUpStatProps) => {
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
      <div className="font-display text-4xl md:text-6xl text-primary">
        {prefix}{count}{suffix}
      </div>
      <p className="mt-3 text-sm font-body text-cream-muted tracking-wide uppercase">{label}</p>
    </div>
  );
};

export default CountUpStat;
