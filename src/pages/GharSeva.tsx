import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import { ArrowUp, CheckCircle, XCircle, Shield, Users, Handshake, Settings, ExternalLink, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import gharsevaFamily from "@/assets/gharseva-family.png";
import AmbientCrystals from "@/components/AmbientCrystals";

/* ── GharSeva accent colors ── */
const C = {
  orange: "#6366F1",
  orangeLight: "rgba(99,102,241,0.10)",
  orangeBorder: "rgba(99,102,241,0.28)",
  green: "#38BDF8",
  greenLight: "rgba(56,189,248,0.08)",
  greenBorder: "rgba(56,189,248,0.22)",
};

/* ── Tilt Card wrapper ── */
const TiltCard = ({ children, className = "", style = {}, glowColor = C.orange }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; glowColor?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ ...style, perspective: 800, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -6, boxShadow: `0 25px 50px ${glowColor}30` }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {children}
        {/* Animated gradient border glow */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ border: `2px solid transparent`, borderImage: `linear-gradient(135deg, ${glowColor}00, ${glowColor}60, ${glowColor}00) 1` }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

/* ── Animated counter pill ── */
const AnimatedPill = ({ text, color }: { text: string; color: string }) => (
  <motion.span
    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
    style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
    whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${color}30` }}
    whileTap={{ scale: 0.95 }}
  >
    <Sparkles size={10} />
    {text}
  </motion.span>
);

const researchTable = [
  { finding: "Families fear losing workers more than finding them", decision: "Replacement guarantee + substitute during leaves" },
  { finding: "Workers leave due to financial emergencies", decision: "Salary advances + emergency funds" },
  { finding: "Trust deficit on both sides", decision: "Verification + 3-day trial period" },
  { finding: "Tier 1 platforms ignore Tier 2 cities", decision: "Initial focus on Tier 2 as primary market" },
  { finding: "High upfront fees create friction", decision: "Low monthly subscription model" },
];

const journeySteps = [
  { employer: "Browse Categories", system: "Landing Page", worker: "KYC Onboarding" },
  { employer: "Fill Requirements", system: "Requirement Matching", worker: "Set Availability" },
  { employer: "View Verified Profiles", system: "AI Match & Notify", worker: "Receive Trial Request" },
  { employer: "Select & Pay Booking", system: "Payment Processing", worker: "Accept/Reject" },
  { employer: "Trial Period (1-2 Days)", system: "Trial Management", worker: "Trial Execution" },
  { employer: "Subscription Activation", system: "Contract & Payroll", worker: "Regular Employment" },
];

/* ── Stagger container variants ── */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 260, damping: 20 } },
};

/* ── Animated arrow component ── */
const AnimatedArrow = ({ color, active, direction = "right" }: { color: string; active: boolean; direction?: "right" | "left" }) => (
  <motion.div
    className="hidden md:flex items-center mx-1"
    animate={{ opacity: active ? 1 : 0.3 }}
    transition={{ duration: 0.4 }}
  >
    <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
      {direction === "right" ? (
        <>
          <motion.path
            d="M0 8H40"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="40"
            initial={{ strokeDashoffset: 40 }}
            animate={{ strokeDashoffset: active ? 0 : 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.path
            d="M36 3L43 8L36 13"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: active ? 1 : 0.3 }}
            transition={{ delay: 0.4 }}
          />
        </>
      ) : (
        <>
          <motion.path
            d="M48 8H8"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="40"
            initial={{ strokeDashoffset: 40 }}
            animate={{ strokeDashoffset: active ? 0 : 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.path
            d="M12 3L5 8L12 13"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: active ? 1 : 0.3 }}
            transition={{ delay: 0.4 }}
          />
        </>
      )}
    </svg>
  </motion.div>
);

/* ── Interactive flowchart node ── */
const TimelineNode = ({ step, index }: { step: typeof journeySteps[0]; index: number }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    setActive(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="mb-8 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Step number badge */}
      <div className="flex justify-center mb-3">
        <motion.div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold relative z-20"
          style={{ background: active ? C.orange : `${C.orange}40`, color: "#FFFFFF" }}
          animate={active ? { scale: [1, 1.15, 1], boxShadow: `0 0 20px ${C.orange}40` } : { scale: 1, boxShadow: "none" }}
          transition={{ duration: 0.5 }}
        >
          {index + 1}
        </motion.div>
      </div>

      {/* Flowchart row: Employer → GharSeva → Worker */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 md:gap-0">
        {/* Employer action */}
        <TiltCard glowColor={C.orange} className="w-full">
          <motion.div
            className="rounded-lg px-3 py-2.5 shadow-sm h-full min-h-[56px] flex flex-col justify-center"
            style={{ background: C.orangeLight, border: `1px solid ${C.orangeBorder}`, borderLeft: `4px solid ${C.orange}` }}
            animate={active ? { scale: 1.02, borderColor: C.orange } : { scale: 1, borderColor: `${C.orange}30` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: C.orange }}>👤 Employer</p>
            <p className="text-sm font-medium text-foreground">{step.employer}</p>
          </motion.div>
        </TiltCard>

        {/* Arrow: Employer → GharSeva */}
        <AnimatedArrow color={C.orange} active={active} direction="right" />

        {/* GharSeva / System */}
        <motion.div
          className="w-full relative z-20"
          animate={active ? { scale: 1.05 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="rounded-lg px-3 py-2.5 text-center shadow-md h-full min-h-[56px] flex flex-col justify-center"
            style={{
              background: "hsl(var(--card))",
              border: `1px solid`,
              borderColor: active ? `${C.orange}` : `${C.orange}30`,
              boxShadow: active ? `0 0 24px ${C.orange}20, 0 0 24px ${C.green}20` : "none",
            }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-1 text-muted-foreground">⚙️ GharSeva</p>
            <p className="text-sm font-bold text-foreground">{step.system}</p>
          </div>
        </motion.div>

        {/* Arrow: GharSeva → Worker */}
        <AnimatedArrow color={C.green} active={active} direction="right" />

        {/* Worker action */}
        <TiltCard glowColor={C.green} className="w-full">
          <motion.div
            className="rounded-lg px-3 py-2.5 shadow-sm h-full min-h-[56px] flex flex-col justify-center"
            style={{ background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderRight: `4px solid ${C.green}` }}
            animate={active ? { scale: 1.02, borderColor: C.green } : { scale: 1, borderColor: `${C.green}30` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: C.green }}>🔧 Worker</p>
            <p className="text-sm font-medium text-foreground">{step.worker}</p>
          </motion.div>
        </TiltCard>
      </div>
    </motion.div>
  );
};

const GharSeva = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="pt-16 bg-background text-foreground relative">
      <AmbientCrystals accentColor="#4353FF" intensity="moderate" />

      {/* ═══ Hero ═══ */}
      <section className="relative flex flex-col items-center overflow-hidden pt-12 pb-0 bg-background">
        <div className="relative z-10 text-center px-6 mb-2">
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <AnimatedPill text="Case Study" color={C.orange} />
          </motion.div>
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundImage: `linear-gradient(90deg, ${C.orange}, #fff, ${C.orange})`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              GharSeva
            </motion.span>
          </motion.h1>
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-6">
          <motion.img
            src={gharsevaFamily}
            alt="GharSeva family"
            className="w-full h-auto object-contain rounded-t-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-8">
          <motion.p
            className="text-xl md:text-2xl mb-3 font-semibold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.span
              className="inline-block"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              Connecting India's Households with the Help they Need
            </motion.span>
          </motion.p>
          <motion.p
            className="text-sm max-w-xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A Trust + Support Platform for India's Domestic Help Market.
          </motion.p>
        </div>
      </section>

      {/* ═══ Mission & Vision ═══ */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { emoji: "🎯", title: "Mission", color: C.orange, bg: C.orangeLight, border: C.orangeBorder, text: "Eliminate the chaos of finding and retaining domestic help by building a managed platform — where families get verified, reliable workers and workers get fair pay, financial security, and dignity." },
                { emoji: "🌍", title: "Vision", color: C.green, bg: C.greenLight, border: C.greenBorder, text: "Become India's trust infrastructure for domestic help — a world where no family spends weeks searching, and no worker is exploited because there was no system to protect them." },
              ].map((card) => (
                <motion.div key={card.title} variants={staggerItem} className="h-full">
                  <TiltCard glowColor={card.color} className="h-full">
                    <div
                      className="rounded-xl p-6 text-left cursor-default h-full"
                      style={{ background: card.bg, border: `1px solid ${card.border}`, borderTop: `4px solid ${card.color}` }}
                    >
                      <motion.p
                        className="text-2xl mb-2"
                        whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        {card.emoji}
                      </motion.p>
                      <h3 className="font-bold mb-2" style={{ color: card.color }}>{card.title}</h3>
                      <p className="text-sm leading-relaxed text-foreground/85">{card.text}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ═══ Problem ═══ */}
      <section className="px-6 py-20 bg-card">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <AnimatedPill text="The Problem" color={C.orange} />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 mt-3 text-foreground">Broken System</h2>
            <p className="text-sm mb-2 text-muted-foreground">A 21st-century problem stuck in a 19th-century solution</p>
            <p className="max-w-3xl leading-relaxed mb-12 text-muted-foreground">
              Every day in India, millions of families and domestic workers desperately search for each other — often in the same locality — yet never connect. The system runs on informal trust, word-of-mouth, and hope.
            </p>
          </ScrollFadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "For Families", color: C.orange, bg: C.orangeLight, items: ["No verification means constant safety anxiety", "No replacement guarantee disrupts weeks of life", "No substitute during leaves — household bears all burden"] },
              { title: "For Workers", color: C.green, bg: C.greenLight, items: ["No job security — income always at risk", "No financial safety nets during emergencies", "Undignified job search, dependent on who you know"] },
              { title: "For the Market", color: "hsl(217, 91%, 60%)", bg: "hsla(217, 91%, 60%, 0.08)", items: ["Trust deficit on both sides", "No platform owns the trust layer", "Neither side has reason to change"] },
            ].map((c) => (
              <motion.div key={c.title} variants={staggerItem}>
                <TiltCard glowColor={c.color} className="h-full">
                  <div
                    className="rounded-xl p-6 shadow-sm cursor-default h-full"
                    style={{ background: c.bg, border: `1px solid ${c.color}30`, borderTop: `4px solid ${c.color}` }}
                  >
                    <h3 className="font-bold mb-4 text-lg" style={{ color: c.color }}>{c.title}</h3>
                    <ul className="space-y-3">
                      {c.items.map((item, idx) => (
                        <motion.li
                          key={item}
                          className="text-sm flex items-start gap-2 text-foreground/85"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, type: "spring" }}
                        >
                          <motion.span
                            className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                            style={{ background: c.color }}
                            whileHover={{ scale: 2 }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <ScrollFadeIn>
            <motion.div
              className="rounded-2xl p-8 md:p-12 bg-secondary"
              whileHover={{ boxShadow: `0 0 60px ${C.orange}15` }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { end: 35, suffix: "M+", label: "Urban households stuck in chaos" },
                  { end: 10, suffix: "M+", label: "Workers trapped in the same cycle" },
                  { end: 90, suffix: "%", label: "Market still completely unorganised" },
                  { end: 150, suffix: " Cr", label: "Market size with zero infrastructure", prefix: "₹" },
                ].map((s) => (
                  <CountUpStat key={s.label} end={s.end} suffix={s.suffix} prefix={s.prefix || ""} label={s.label} />
                ))}
              </div>
            </motion.div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ═══ Research ═══ */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <AnimatedPill text="Research & Discovery" color={C.green} />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 mt-3 text-foreground">I Didn't Assume. I Went and Found Out.</h2>
            <p className="max-w-3xl mb-12 leading-relaxed text-muted-foreground">
              The domestic help market operates through informal networks, cash transactions, and unspoken social dynamics. Understanding it required getting off the desk.
            </p>
          </ScrollFadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Phase 1 — Market Research",
                color: C.orange,
                bg: C.orangeLight,
                items: ["ILO & NITI Aayog: ₹1.5L Cr market, 90% unorganised", "14M+ households willing to pay for verified platforms", "Competitors optimize for speed of first transaction — nobody builds for long-term relationships"],
                keyTitle: "Key Finding:",
                keyText: "No reliable long-term relationship model exists despite the industry depending on trust.",
              },
              {
                title: "Phase 2 — User Research",
                color: C.green,
                bg: C.greenLight,
                items: ["Spoke with households about hiring anxiety", "Spoke with domestic workers about job search experience", "Registered on competing platforms as a worker", "Walked door-to-door in residential societies"],
                keyTitle: "Key Finding:",
                keyText: "Demand is huge, but fragmented supply fails to meet it. Trust deficit is the core blocker.",
              },
            ].map((phase) => (
              <motion.div key={phase.title} variants={staggerItem}>
                <TiltCard glowColor={phase.color} className="h-full">
                  <div
                    className="rounded-xl p-6 shadow-sm cursor-default h-full"
                    style={{ background: phase.bg, border: `2px solid ${phase.color}40`, borderTop: `4px solid ${phase.color}` }}
                  >
                    <h3 className="font-bold mb-4 text-lg" style={{ color: phase.color }}>{phase.title}</h3>
                    <ul className="space-y-3 text-sm text-foreground/85">
                      {phase.items.map((item, idx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 }}
                        >
                          • {item}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      className="mt-4 p-4 rounded-lg"
                      style={{ background: `${phase.color}10`, border: `1px dashed ${phase.color}40` }}
                      whileHover={{ scale: 1.03, background: `${phase.color}18` }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <p className="text-xs font-semibold text-foreground">{phase.keyTitle}</p>
                      <p className="text-xs text-foreground/80 mt-1">{phase.keyText}</p>
                    </motion.div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <ScrollFadeIn>
            <motion.h3
              className="text-2xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              From Insights to Decisions
            </motion.h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow style={{ background: C.orange }}>
                    <TableHead className="font-bold" style={{ color: "#FFFFFF" }}>Research Finding</TableHead>
                    <TableHead className="font-bold" style={{ color: "#FFFFFF" }}>Product Decision</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {researchTable.map((r, i) => (
                    <motion.tr
                      key={i}
                      className="border-b border-border transition-colors cursor-default group"
                      style={{ background: i % 2 === 0 ? 'hsl(var(--card))' : 'hsl(var(--secondary))' }}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ background: C.orangeLight, scale: 1.01, x: 4 }}
                    >
                      <TableCell className="text-sm text-foreground/80">{r.finding}</TableCell>
                      <TableCell className="text-sm font-semibold text-foreground">
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 4 }}
                        >
                          → {r.decision}
                        </motion.span>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ═══ Personas ═══ */}
      <section className="px-6 py-20 bg-card">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <AnimatedPill text="User Personas" color={C.green} />
            <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-3 text-foreground">Who We're Building For</h2>
          </ScrollFadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Priya Sharma", emoji: "👩‍💼", meta: "34 | Working Professional | Tier 2 City", color: C.orange, bgLight: C.orangeLight,
                bio: "Manages a full-time job while running a household. Relies on neighbours and WhatsApp groups to find help.",
                pains: ["Spends 1–3 weeks finding a replacement", "No way to verify background", "No substitute during unannounced leave", "High upfront agency fees"],
                needs: ["Quick access to verified workers", "Guaranteed replacement & substitute", "Affordable, low-risk pricing"],
              },
              {
                name: "Rekha Devi", emoji: "👩‍🍳", meta: "32 | Domestic Worker | Tier 2 City", color: C.green, bgLight: C.greenLight,
                bio: "Worked across multiple households for 8 years. Primary earner with no formal protections.",
                pains: ["Loses weeks searching door-to-door", "No financial help during emergencies", "Frequently exploited — delayed payments", "Existing platforms offer no support"],
                needs: ["Fast, dignified access to jobs", "Financial safety nets — advances, insurance", "Stable long-term employment"],
              },
            ].map((persona) => (
              <motion.div key={persona.name} variants={staggerItem}>
                <TiltCard glowColor={persona.color} className="h-full">
                  <div
                    className="rounded-xl border-2 p-6 cursor-default h-full"
                    style={{ borderColor: `${persona.color}40`, background: persona.bgLight, borderTop: `4px solid ${persona.color}` }}
                  >
                    <motion.div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-xl"
                        style={{ background: `${persona.color}15` }}
                        whileHover={{ rotate: [0, -15, 15, -10, 10, 0], scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        {persona.emoji}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{persona.name}</h3>
                        <p className="text-xs text-muted-foreground">{persona.meta}</p>
                      </div>
                    </motion.div>
                    <p className="text-sm mb-4 text-foreground/80">{persona.bio}</p>
                    <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#F87171" }}>Pain Points</h4>
                    <ul className="space-y-2 mb-4">
                      {persona.pains.map((p, pi) => (
                        <motion.li
                          key={p}
                          className="text-sm flex items-start gap-2 text-foreground/85"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pi * 0.06 }}
                          whileHover={{ x: 6, color: "#F87171" }}
                        >
                          <XCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#F87171" }} />{p}
                        </motion.li>
                      ))}
                    </ul>
                    <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: C.green }}>Needs</h4>
                    <ul className="space-y-2">
                      {persona.needs.map((n, ni) => (
                        <motion.li
                          key={n}
                          className="text-sm flex items-start gap-2 text-foreground/85"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: ni * 0.06 }}
                          whileHover={{ x: 6, color: C.green }}
                        >
                          <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: C.green }} />{n}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ Solution ═══ */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <AnimatedPill text="The Solution" color={C.green} />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 mt-3 text-foreground">Not Just Matching. A Complete Ecosystem.</h2>
            <p className="mb-12 text-muted-foreground">The 3-Pillar Approach</p>
          </ScrollFadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: "01", title: "Verify", icon: Shield, desc: "Multi-level background checks covering ID, police verification, and references. Peace of mind for families, credibility for workers.", color: C.orange },
              { num: "02", title: "Match & Trial", icon: Users, desc: "AI-powered matching + 3-day trial period. Both sides evaluate fit before committing — removing risk from both ends.", color: C.green },
              { num: "03", title: "Manage", icon: Settings, desc: "Salary handling, replacements, substitutes, attendance tracking. The platform stays involved after the match.", color: "hsl(var(--primary))" },
            ].map((p) => (
              <motion.div key={p.num} variants={staggerItem}>
                <SolutionCard pillar={p} />
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "For Families", color: C.orange, bg: C.orangeLight, border: C.orangeBorder, items: ["Verified workers matched within 48 hours", "Replacement within 2 days", "Instant substitute during unplanned leaves", "Low monthly subscription — no heavy upfront fees"] },
              { title: "For Workers", color: C.green, bg: C.greenLight, border: C.greenBorder, items: ["Fast job matching without door-to-door searching", "Salary advances and emergency funds", "Government scheme facilitation", "Performance bonuses tied to retention"] },
            ].map((card) => (
              <motion.div key={card.title} variants={staggerItem}>
                <TiltCard glowColor={card.color} className="h-full">
                  <div
                    className="rounded-xl p-6 shadow-sm h-full"
                    style={{ background: card.bg, border: `1px solid ${card.border}`, borderTop: `4px solid ${card.color}` }}
                  >
                    <h3 className="font-bold mb-4" style={{ color: card.color }}>{card.title}</h3>
                    <ul className="space-y-2 text-sm text-foreground/85">
                      {card.items.map((b, bi) => (
                        <motion.li
                          key={b}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: bi * 0.08 }}
                          whileHover={{ x: 6 }}
                        >
                          <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: C.green }} />{b}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Virtuous Cycle */}
          <ScrollFadeIn>
            <VirtuousCycle />
          </ScrollFadeIn>
        </div>
      </section>

      {/* ═══ Product Walkthrough ═══ */}
      <section className="px-6 py-20 bg-card">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <AnimatedPill text="Product Walkthrough" color={C.green} />
            <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-3 text-foreground">The Dual-Sided User Journey</h2>
          </ScrollFadeIn>

          <div className="relative">
            {/* Vertical connector between steps */}
            <motion.div
              className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 hidden md:block z-0"
              style={{ background: `linear-gradient(to bottom, ${C.orange}40, ${C.green}40)` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            {journeySteps.map((step, i) => (
              <TimelineNode key={i} step={step} index={i} />
            ))}
          </div>

          <ScrollFadeIn>
            <motion.a
              href="https://gharseva-househelp.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl p-8 mt-8 text-center cursor-pointer no-underline group"
              style={{ background: C.orange, color: "#FFFFFF" }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 60px rgba(232,137,12,0.35)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <ExternalLink size={24} />
              </motion.div>
              <span className="text-xl font-bold">Visit the Live GharSeva Website</span>
            </motion.a>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ═══ Footer CTA ═══ */}
      <section className="bg-background">
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <ScrollFadeIn>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Let's Talk
              </motion.h2>
              <motion.p
                className="mb-8 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Got a product problem worth solving? I'd love to hear about it.
              </motion.p>
              <motion.a
                href="mailto:pratham@example.com"
                className="inline-block px-8 py-3 rounded-lg font-medium no-underline bg-primary text-primary-foreground"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px hsl(var(--primary) / 0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                pratham@example.com
              </motion.a>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40 bg-primary text-primary-foreground"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ y: -4, boxShadow: "0 10px 30px hsl(var(--primary) / 0.4)", rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
};

/* ═══ Solution card with hover-reveal ═══ */
const SolutionCard = ({ pillar }: { pillar: { num: string; title: string; icon: any; desc: string; color: string } }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = pillar.icon;
  const bg = pillar.color === C.orange ? C.orangeLight : pillar.color === C.green ? C.greenLight : "rgba(99,102,241,0.08)";

  return (
    <TiltCard glowColor={pillar.color} className="h-full">
      <motion.div
        className="rounded-xl p-6 shadow-sm cursor-pointer h-full flex flex-col items-center justify-center text-center relative overflow-hidden"
        style={{ background: bg, border: `2px solid ${pillar.color}30`, borderTop: `4px solid ${pillar.color}`, minHeight: "220px" }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div
          animate={{ opacity: hovered ? 0.2 : 1, scale: hovered ? 0.7 : 1, y: hovered ? -10 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.p
            className="font-mono text-xs mb-3"
            style={{ color: pillar.color }}
            animate={{ letterSpacing: hovered ? "0.3em" : "0em" }}
          >
            {pillar.num}
          </motion.p>
          <motion.div
            animate={{ rotate: hovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon size={36} className="mb-3 mx-auto" style={{ color: pillar.color }} />
          </motion.div>
          <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-sm leading-relaxed text-foreground/85">{pillar.desc}</p>
        </motion.div>
      </motion.div>
    </TiltCard>
  );
};

/* ═══ Animated Virtuous Cycle ═══ */
const VirtuousCycle = () => {
  const steps = [
    "More workers in a cluster",
    "More families served",
    "Higher worker bonuses",
    "Stronger worker loyalty",
    "Better service",
    "More referrals",
    "Lower acquisition cost",
    "Higher margins",
  ];

  return (
    <motion.div
      className="rounded-xl p-8 text-center"
      style={{ background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderTop: `4px solid ${C.green}` }}
      whileHover={{ boxShadow: `0 20px 60px ${C.green}20` }}
    >
      <h3 className="font-bold mb-6" style={{ color: C.green }}>The Virtuous Cycle</h3>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((step, i) => (
          <motion.span
            key={step}
            className="inline-flex items-center gap-1 text-sm text-foreground/85"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1, color: C.green }}
          >
            <motion.span
              className="px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ background: `${C.green}15`, border: `1px solid ${C.green}30` }}
              whileHover={{ background: `${C.green}25`, boxShadow: `0 0 15px ${C.green}30` }}
            >
              {step}
            </motion.span>
            {i < steps.length - 1 && (
              <motion.span
                style={{ color: C.green }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
              >
                →
              </motion.span>
            )}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default GharSeva;
