import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import { ArrowUp, CheckCircle, XCircle, Shield, Users, Handshake, Settings, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import gharsevaFamily from "@/assets/gharseva-family.png";

/* ── GharSeva palette ── */
const C = {
  cream: "#FFF8F0",
  creamDark: "#FFF1E0",
  orange: "#E8890C",
  orangeLight: "rgba(232,137,12,0.12)",
  orangeBorder: "rgba(232,137,12,0.3)",
  green: "#2D6A4F",
  greenLight: "rgba(45,106,79,0.10)",
  greenBorder: "rgba(45,106,79,0.25)",
  charcoal: "#2C2C2C",
  charcoalLight: "#4A4A4A",
  muted: "#7A7A7A",
  cardBg: "#FFFFFF",
  cardBorder: "#F0E6D9",
};

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

const GharSeva = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="pt-16" style={{ background: C.cream, color: C.charcoal }}>
      {/* P0: Hero */}
      <section className="relative flex flex-col items-center overflow-hidden pt-12 pb-0" style={{ background: C.cream }}>
        {/* Text content on top */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mb-8">
          <motion.p
            className="text-sm tracking-widest uppercase mb-4"
            style={{ color: C.charcoal }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Case Study
          </motion.p>
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span style={{ color: "#F5A623" }}>Ghar</span>
              <span style={{ color: "#4CAF50" }}>Seva</span>
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-3 font-semibold"
            style={{ color: "#1A3C34" }}
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
            className="text-sm max-w-xl mx-auto"
            style={{ color: C.charcoalLight }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A Trust + Support Platform for India's Domestic Help Market.
          </motion.p>
        </div>
        {/* Image below */}
        <div className="w-full max-w-5xl mx-auto px-6">
          <motion.img
            src={gharsevaFamily}
            alt="GharSeva family"
            className="w-full h-auto object-contain rounded-t-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </section>

      {/* Mission & Vision — separate section */}
      <section className="px-6 py-20" style={{ background: C.cream }}>
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="rounded-xl p-6 text-left cursor-default"
                style={{ background: C.orangeLight, border: `1px solid ${C.orangeBorder}`, borderTop: `4px solid ${C.orange}` }}
                whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${C.orange}25` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="text-2xl mb-2">🎯</p>
                <h3 className="font-bold mb-2" style={{ color: C.orange }}>Mission</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.charcoalLight }}>
                  Eliminate the chaos of finding and retaining domestic help by building a managed platform — where families get verified, reliable workers and workers get fair pay, financial security, and dignity.
                </p>
              </motion.div>
              <motion.div
                className="rounded-xl p-6 text-left cursor-default"
                style={{ background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderTop: `4px solid ${C.green}` }}
                whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${C.green}25` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="text-2xl mb-2">🌍</p>
                <h3 className="font-bold mb-2" style={{ color: C.green }}>Vision</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.charcoalLight }}>
                  Become India's trust infrastructure for domestic help — a world where no family spends weeks searching, and no worker is exploited because there was no system to protect them.
                </p>
              </motion.div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Problem — bigger heading */}
      <section className="px-6 py-20" style={{ background: C.cardBg }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-6xl md:text-8xl font-extrabold mb-3" style={{ color: C.charcoal }}>The Problem</h2>
            <p className="text-4xl md:text-5xl font-bold mb-3" style={{ color: C.green }}>Broken System</p>
            <p className="text-sm mb-2" style={{ color: C.muted }}>A 21st-century problem stuck in a 19th-century solution</p>
            <p className="max-w-3xl leading-relaxed mb-12" style={{ color: C.charcoalLight }}>
              Every day in India, millions of families and domestic workers desperately search for each other — often in the same locality — yet never connect. The system runs on informal trust, word-of-mouth, and hope.
            </p>
          </ScrollFadeIn>

          {/* 2. Animated problem cards with hover zoom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "For Families", color: C.orange, bg: C.orangeLight, items: ["No verification means constant safety anxiety", "No replacement guarantee disrupts weeks of life", "No substitute during leaves — household bears all burden"] },
              { title: "For Workers", color: C.green, bg: C.greenLight, items: ["No job security — income always at risk", "No financial safety nets during emergencies", "Undignified job search, dependent on who you know"] },
              { title: "For the Market", color: "#EF4444", bg: "rgba(239,68,68,0.08)", items: ["Trust deficit on both sides", "No platform owns the trust layer", "Neither side has reason to change"] },
            ].map((c, i) => (
              <ScrollFadeIn key={c.title} delay={i * 0.1}>
                <motion.div
                  className="rounded-xl p-6 shadow-sm cursor-default h-full"
                  style={{ background: c.bg, border: `1px solid ${c.color}30`, borderTop: `4px solid ${c.color}` }}
                  whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${c.color}25` }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="font-bold mb-4 text-lg" style={{ color: c.color }}>{c.title}</h3>
                  <ul className="space-y-3">
                    {c.items.map((item) => (
                      <li key={item} className="text-sm flex items-start gap-2" style={{ color: C.charcoalLight }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* 3. Animated count-up stats */}
          <ScrollFadeIn>
            <div className="rounded-2xl p-8 md:p-12" style={{ background: C.charcoal }}>
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
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Research — 4. Flip animations on Phase cards */}
      <section className="px-6 py-20" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: C.green }}>Research & Discovery</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: C.charcoal }}>I Didn't Assume. I Went and Found Out.</h2>
            <p className="max-w-3xl mb-12 leading-relaxed" style={{ color: C.charcoalLight }}>
              The domestic help market operates through informal networks, cash transactions, and unspoken social dynamics. Understanding it required getting off the desk.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
            ].map((phase, idx) => (
              <ScrollFadeIn key={phase.title} delay={idx * 0.15}>
                <motion.div
                  className="rounded-xl p-6 shadow-sm cursor-default h-full"
                  style={{ background: phase.bg, border: `2px solid ${phase.color}40`, borderTop: `4px solid ${phase.color}` }}
                  initial={{ rotateY: 90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${phase.color}25` }}
                >
                  <h3 className="font-bold mb-4 text-lg" style={{ color: phase.color }}>{phase.title}</h3>
                  <ul className="space-y-3 text-sm" style={{ color: C.charcoalLight }}>
                    {phase.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                  <motion.div
                    className="mt-4 p-3 rounded-lg"
                    style={{ background: phase.bg }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-xs font-medium" style={{ color: C.charcoal }}>{phase.keyTitle}</p>
                    <p className="text-xs" style={{ color: C.charcoalLight }}>{phase.keyText}</p>
                  </motion.div>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* 5. Interactive Insight to Decision Table */}
          <ScrollFadeIn>
            <motion.h3
              className="text-2xl font-bold mb-6"
              style={{ color: C.charcoal }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              From Insights to Decisions
            </motion.h3>
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ border: `2px solid ${C.orange}30` }}>
              <Table>
                <TableHeader>
                  <TableRow style={{ background: C.orange }}>
                    <TableHead className="font-bold text-white" style={{ color: "#FFFFFF" }}>Research Finding</TableHead>
                    <TableHead className="font-bold text-white" style={{ color: "#FFFFFF" }}>Product Decision</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {researchTable.map((r, i) => (
                    <motion.tr
                      key={i}
                      className="border-b transition-colors"
                      style={{ background: i % 2 === 0 ? C.cardBg : C.cream }}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ background: C.orangeLight, scale: 1.01 }}
                    >
                      <TableCell className="text-sm" style={{ color: C.charcoalLight }}>{r.finding}</TableCell>
                      <TableCell className="text-sm font-semibold" style={{ color: C.charcoal }}>→ {r.decision}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 6. Personas — highlighted & interactive */}
      <section className="px-6 py-20" style={{ background: C.cardBg }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-6xl md:text-8xl font-extrabold mb-3" style={{ color: C.charcoal }}>Who We're Building For</h2>
            <p className="text-4xl md:text-5xl font-bold mb-12" style={{ color: C.green }}>User Personas</p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            ].map((persona, idx) => (
              <ScrollFadeIn key={persona.name} delay={idx * 0.15}>
                <motion.div
                  className="rounded-xl border-2 p-6 cursor-default h-full"
                  style={{ borderColor: persona.color, background: persona.bgLight, borderTop: `4px solid ${persona.color}` }}
                  whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${persona.color}25` }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl"
                      style={{ background: persona.bgLight }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {persona.emoji}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: C.charcoal }}>{persona.name}</h3>
                      <p className="text-xs" style={{ color: C.muted }}>{persona.meta}</p>
                    </div>
                  </motion.div>
                  <p className="text-sm mb-4" style={{ color: C.charcoalLight }}>{persona.bio}</p>
                  <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#EF4444" }}>Pain Points</h4>
                  <ul className="space-y-2 mb-4">
                    {persona.pains.map((p, pi) => (
                      <motion.li
                        key={p}
                        className="text-sm flex items-start gap-2"
                        style={{ color: C.charcoalLight }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pi * 0.05 }}
                      >
                        <XCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#EF4444" }} />{p}
                      </motion.li>
                    ))}
                  </ul>
                  <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: C.green }}>Needs</h4>
                  <ul className="space-y-2">
                    {persona.needs.map((n, ni) => (
                      <motion.li
                        key={n}
                        className="text-sm flex items-start gap-2"
                        style={{ color: C.charcoalLight }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ni * 0.05 }}
                      >
                        <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: C.green }} />{n}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Solution — hover-reveal cards */}
      <section className="px-6 py-20" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-6xl md:text-8xl font-extrabold mb-3" style={{ color: C.charcoal }}>The Solution</h2>
            <p className="text-4xl md:text-5xl font-bold mb-3" style={{ color: C.green }}>Not Just Matching. A Complete Ecosystem.</p>
            <p className="text-sm mb-2 mb-12" style={{ color: C.muted }}>The 3-Pillar Approach</p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { num: "01", title: "Verify", icon: Shield, desc: "Multi-level background checks covering ID, police verification, and references. Peace of mind for families, credibility for workers.", color: C.orange },
              { num: "02", title: "Match & Trial", icon: Users, desc: "AI-powered matching + 3-day trial period. Both sides evaluate fit before committing — removing risk from both ends.", color: C.green },
              { num: "03", title: "Manage", icon: Settings, desc: "Salary handling, replacements, substitutes, attendance tracking. The platform stays involved after the match.", color: C.charcoal },
            ].map((p, i) => (
              <ScrollFadeIn key={p.num} delay={i * 0.1}>
                <SolutionCard pillar={p} />
              </ScrollFadeIn>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollFadeIn>
              <motion.div
                className="rounded-xl p-6 shadow-sm"
                style={{ background: C.orangeLight, border: `1px solid ${C.orangeBorder}`, borderTop: `4px solid ${C.orange}` }}
                whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${C.orange}25` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="font-bold mb-4" style={{ color: C.orange }}>For Families</h3>
                <ul className="space-y-2 text-sm" style={{ color: C.charcoalLight }}>
                  {["Verified workers matched within 48 hours", "Replacement within 2 days", "Instant substitute during unplanned leaves", "Low monthly subscription — no heavy upfront fees"].map(b => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: C.green }} />{b}</li>
                  ))}
                </ul>
              </motion.div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <motion.div
                className="rounded-xl p-6 shadow-sm"
                style={{ background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderTop: `4px solid ${C.green}` }}
                whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${C.green}25` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="font-bold mb-4" style={{ color: C.green }}>For Workers</h3>
                <ul className="space-y-2 text-sm" style={{ color: C.charcoalLight }}>
                  {["Fast job matching without door-to-door searching", "Salary advances and emergency funds", "Government scheme facilitation", "Performance bonuses tied to retention"].map(b => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: C.green }} />{b}</li>
                  ))}
                </ul>
              </motion.div>
            </ScrollFadeIn>
          </div>

          {/* Virtuous Cycle */}
          <ScrollFadeIn>
            <motion.div
              className="rounded-xl p-8 text-center"
              style={{ background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderTop: `4px solid ${C.green}` }}
              whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${C.green}25` }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="font-bold mb-4" style={{ color: C.green }}>The Virtuous Cycle</h3>
              <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: C.charcoalLight }}>
                More workers in a cluster → more families served → higher worker bonuses → stronger worker loyalty → better service → more referrals → lower acquisition cost → higher margins
              </p>
            </motion.div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Product Walkthrough */}
      <section className="px-6 py-20" style={{ background: C.cardBg }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: C.green }}>Product Walkthrough</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: C.charcoal }}>The Dual-Sided User Journey</h2>
          </ScrollFadeIn>

          {/* Vertical Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 hidden md:block" style={{ background: C.cardBorder }} />
            {journeySteps.map((step, i) => (
              <ScrollFadeIn key={i} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-12 items-center">
                  <div className={`text-right ${i % 2 === 0 ? "" : "md:order-3 md:text-left"}`}>
                    <motion.div
                      className="inline-block rounded-xl p-4 text-left md:text-inherit shadow-sm"
                      style={{ background: C.orangeLight, border: `1px solid ${C.orangeBorder}`, borderTop: `4px solid ${C.orange}` }}
                      whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${C.orange}25` }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: C.orange }}>Employer</p>
                      <p className="text-sm font-medium" style={{ color: C.charcoal }}>{step.employer}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex flex-col items-center">
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10"
                      style={{ background: C.orange, color: "#FFFFFF" }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {i + 1}
                    </motion.div>
                    <p className="text-xs mt-1 text-center max-w-[100px]" style={{ color: C.muted }}>{step.system}</p>
                  </div>
                  <div className={i % 2 === 0 ? "" : "md:order-1 md:text-right"}>
                    <motion.div
                      className="inline-block rounded-xl p-4 shadow-sm"
                      style={{ background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderTop: `4px solid ${C.green}` }}
                      whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${C.green}25` }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: C.green }}>Worker</p>
                      <p className="text-sm font-medium" style={{ color: C.charcoal }}>{step.worker}</p>
                    </motion.div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* 8. Website link instead of Key Screens */}
          <ScrollFadeIn>
            <motion.a
              href="https://gharseva-househelp.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl p-8 mt-8 text-center cursor-pointer no-underline"
              style={{ background: C.orange, color: "#FFFFFF" }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 60px rgba(232,137,12,0.35)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ExternalLink size={24} />
              <span className="text-xl font-bold">Visit the Live GharSeva Website</span>
            </motion.a>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 9. Footer without line partition — continuous look */}
      <section style={{ background: C.cream }}>
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <ScrollFadeIn>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: C.charcoal, fontFamily: "'Outfit', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Let's Talk
              </motion.h2>
              <motion.p
                className="mb-8 text-sm"
                style={{ color: C.muted }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Got a product problem worth solving? I'd love to hear about it.
              </motion.p>
              <motion.a
                href="mailto:pratham@example.com"
                className="inline-block px-8 py-3 rounded-lg font-medium text-white no-underline"
                style={{ background: C.orange }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(232,137,12,0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                pratham@example.com
              </motion.a>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40"
          style={{ background: C.orange, color: "#FFFFFF" }}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(232,137,12,0.4)" }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </main>
  );
};

/* Solution card with hover-reveal description */
const SolutionCard = ({ pillar }: { pillar: { num: string; title: string; icon: any; desc: string; color: string } }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = pillar.icon;

  return (
    <motion.div
      className="rounded-xl p-6 shadow-sm cursor-pointer h-full flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{ background: pillar.color === C.orange ? C.orangeLight : pillar.color === C.green ? C.greenLight : "rgba(44,44,44,0.08)", border: `2px solid ${pillar.color}30`, borderTop: `4px solid ${pillar.color}`, minHeight: "220px" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.05, y: -8, boxShadow: `0 20px 40px ${pillar.color}25` }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div animate={{ opacity: hovered ? 0.3 : 1, scale: hovered ? 0.8 : 1 }} transition={{ duration: 0.3 }}>
        <p className="font-mono-metric text-xs mb-3" style={{ color: pillar.color }}>{pillar.num}</p>
        <Icon size={36} className="mb-3 mx-auto" style={{ color: pillar.color }} />
        <h3 className="text-xl font-bold" style={{ color: C.charcoal }}>{pillar.title}</h3>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm leading-relaxed" style={{ color: C.charcoalLight }}>{pillar.desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default GharSeva;
