import ScrollFadeIn from "@/components/ScrollFadeIn";
import Footer from "@/components/Footer";
import { ArrowUp, CheckCircle, XCircle, AlertTriangle, Thermometer, Eye, ShieldCheck, Snowflake, BarChart3, Database, Cpu, Camera } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import zeptoLogo from "@/assets/zepto-logo.png";
import screenFreshness from "@/assets/zepto-screen-freshness.png";
import screenThermal from "@/assets/zepto-screen-thermal.png";
import screenFrozen from "@/assets/zepto-screen-frozen.png";
import mockupPdp from "@/assets/zepto-mockup-pdp.png";
import mockupFreshness from "@/assets/zepto-mockup-freshness.png";
import AmbientCrystals from "@/components/AmbientCrystals";
import blinkitLogo from "@/assets/blinkit-logo.png";
import swiggyLogo from "@/assets/swiggy-logo.png";
import dunzoLogo from "@/assets/dunzo-logo.png";
import bigbasketLogo from "@/assets/bigbasket-logo.png";
import thermalShieldImg from "@/assets/zepto-thermal-shield.png";
import frozenGuardianImg from "@/assets/zepto-frozen-guardian.png";

/* ── Zepto palette (matching actual Zepto branding) ── */
const Z = {
  purple: "#818CF8",
  purpleLight: "rgba(129,140,248,0.08)",
  purpleBorder: "rgba(129,140,248,0.20)",
  purpleDark: "#6366F1",
  white: "#F0F0F5",
  offWhite: "#0A0A0F",
  lavender: "#0D0D14",
  charcoal: "#E8E8ED",
  charcoalLight: "#B0B0C0",
  muted: "#6B6B80",
  cardBg: "#111118",
  cardBorder: "rgba(255,255,255,0.08)",
  amber: "#FBBF24",
  red: "#F87171",
  green: "#34D399",
};

const frictionPoints = [
  {
    icon: Eye,
    title: "The Expiry Blind Spot",
    subtitle: "Perishables",
    stat: "57%",
    statLabel: "consumers concerned about missing 'best before' dates",
    quote: '"Received a packet of bread expiring in 1 day, while a regular loaf has 5-7 days. I ended up throwing half of it away."',
    desc: "Regulations mandate food items have 30% of shelf life remaining, yet online platforms are often perceived as 'dumping yards' for slow stock.",
  },
  {
    icon: Thermometer,
    title: "Last-Mile Thermal Decay",
    subtitle: "Beverages",
    stat: "8-12%",
    statLabel: "last-mile wastage in temperature-sensitive categories",
    quote: null,
    desc: "Indian summers (40°C+) test the limits of two-wheeler deliveries. Standard bags rise by 2-4°C every five minutes. Chilled beverages arrive at room temperature, killing the 'Instant Gratification' value proposition.",
  },
  {
    icon: Snowflake,
    title: "The Frozen Failure",
    subtitle: "Ice Cream",
    stat: "2.7x",
    statLabel: "higher margin per SKU than dairy staples",
    quote: '"Ordered ice cream, it arrived completely melted, and the agent said he has nothing to do with it. Cones became weird paper!"',
    desc: "Frozen goods represent the highest margin per SKU. 68% of users will abandon a platform after receiving melted or spoiled goods.",
  },
];

const personas = [
  {
    emoji: "👩‍🍳",
    name: "Ananya",
    role: "The 'Morning Anchor' Homemaker",
    about: "38, Tier-1 city, manages a family of four. Daily transacting user. Places a ₹600+ order at 7 AM for milk, bread, and breakfast staples.",
    pains: ["Hidden expiry dates on bread and milk", "Bread that expires in 48 hours when she needs it for 4 days", "'Forced wastage' from near-expiry products"],
    needs: ["Transparency — 'Minimum 5 days life remaining' before adding to cart"],
  },
  {
    emoji: "💼",
    name: "Rajesh",
    role: "The 'Evening Peak' Professional",
    about: "28, IT Professional, high-heat urban hub. Orders during 4 PM – 9 PM window for chilled juices and carbonated drinks.",
    pains: ["Beverages consistently arrive at room temperature", "'Instant gratification' killed — has to freeze for 20 minutes"],
    needs: ["Thermal Reliability — 'Verified Chilled' guarantee for items delivered"],
  },
  {
    emoji: "🎓",
    name: "Priya",
    role: "The 'Late-Night' Student",
    about: "21, University student, night-owl (9 PM – 12 AM). High impulse buyer — frequently adds premium frozen desserts to snack basket.",
    pains: ["Ice cream arrives melted, paper-thin state", "45-minute 'Refund Drama' with chatbots for ₹150"],
    needs: ["Frictionless Redressal — frozen until doorstep or instant photo-verified refund"],
  },
];

const solutionPillars = [
  {
    num: "01",
    title: "Freshness Visibility System",
    subtitle: "Perishables",
    color: Z.green,
    summary: "Replacing the 'expiry blind spot' with transparent, real-time freshness data surfaced at every touchpoint — from category listing to checkout.",
    subsections: [
      {
        heading: "Listing-Level Freshness",
        mockup: mockupFreshness,
        mockupAlt: "Freshness Visibility before and after comparison",
        features: [
          { label: "Minimum Shelf-Life Badge", desc: "A green overlay badge on every product card (e.g., 'Min. 4 Days Life') pulling real-time metadata from the dark store's active batch inventory. Eliminates guesswork — users know exactly what they're getting before adding to cart.", icon: ShieldCheck },
          { label: "Shelf Life Filtering", desc: "A new 'Longest Shelf Life' sort filter in category search results. Users can digitally replicate the kirana habit of picking from the back of the shelf — choosing the freshest loaf every time.", icon: BarChart3 },
        ],
      },
      {
        heading: "Detailed Product Page (PDP)",
        mockup: mockupPdp,
        mockupAlt: "Product Detail Page before and after comparison",
        features: [
          { label: "Freshness Details Card", desc: "A dedicated card on every PDP showing Manufacturing Date, Best Before Date, and computed Minimum Shelf Life remaining. Transforms the product page into a 'freshness passport.'", icon: Eye },
          { label: "Freshness Guarantee Badge", desc: "A trust seal confirming the product meets the minimum shelf-life threshold before dispatch. If the guarantee is broken, users get instant credit — no questions asked.", icon: ShieldCheck },
          { label: "Shelf Life Badge on Image", desc: "Green overlay badge ('5 Day Shelf Life') on the product hero image for instant visual confidence. Works as a pre-purchase reassurance anchor.", icon: CheckCircle },
        ],
      },
    ],
    beforePoints: ["User cannot see shelf life", "Risk of receiving near-expiry stock"],
    afterPoints: ["Users see minimum shelf life", "Pick the freshest products possible"],
  },
  {
    num: "02",
    title: "The Thermal Shield",
    subtitle: "Beverages & Chilled",
    color: Z.amber,
    summary: "An end-to-end cold-chain verification system that guarantees beverages arrive chilled — turning 'thermal decay' into a competitive advantage.",
    subsections: null,
    features: [
      { label: "Verified Chilled Badge", desc: "Users choose between 'Verified Chilled' (4°C) or 'Room Temperature' at product level.", icon: Thermometer },
      { label: "IoT Cooler Sync", desc: "Real-time dark store cooler sensor integration. Product card shows 'Last verified at 3.8°C.'", icon: Cpu },
      { label: "Cold-Chain Premium", desc: "Micro-fee option (₹7) for Thermal Bubble-Wrap Foil Sleeve. Free for Zepto Pass users.", icon: ShieldCheck },
    ],
    beforePoints: ["Beverages arrive at room temperature", "'Instant gratification' killed"],
    afterPoints: ["Drink arrives at verified 4°C", "Delight; repeatable high-margin indulgence"],
  },
  {
    num: "03",
    title: "Frozen Guardian Infrastructure",
    subtitle: "Ice Cream & Meds",
    color: Z.red,
    summary: "Phase-change material packaging and AI-powered dispute resolution ensure frozen goods survive the last mile — unlocking the highest-margin category.",
    subsections: null,
    features: [
      { label: "PCM Sub-Compartmentalization", desc: "Rider backpacks with Phase Change Material (PCM) boxes maintaining -18°C for 30 minutes.", icon: Snowflake },
      { label: "Visual AI 'Melt-Scan' Refunds", desc: "3-second video submission → AI analyzes viscosity/state → instant refund to source.", icon: Camera },
      { label: "Frozen Guarantee Marker", desc: "Trust badge indicating 'Guardian Box' packing — product will arrive intact.", icon: ShieldCheck },
    ],
    beforePoints: ["Ice cream arrives melted", "45-minute 'Refund Drama' with chatbots"],
    afterPoints: ["Frozen until doorstep guaranteed", "Instant photo-verified refund"],
  },
];

const journeys = [
  {
    persona: "Ananya",
    before: "Orders bread blindly → Receives near-expiry stock → Wastage occurs → Churns back to Kirana.",
    after: "Filters by 'Longest Shelf Life' → Adds bread with '5 Days Guarantee' → Basket grows to ₹650 → Habit retained; LTV protected.",
  },
  {
    persona: "Rajesh",
    before: "Orders cold drink → Arrives at room temp → Mood spoiled → Churns back to Kirana.",
    after: "Tracking shows 'Cold Chain Active' → Drink arrives at 4.2°C → Delight; repeatable high-margin indulgence.",
  },
];

const takeaways = [
  { title: "Quality is the Real Speed", desc: "In a market where every player delivers in under 15 minutes, the new competitive moat is Sustained Velocity — speed that never compromises product integrity." },
  { title: "Staples are the Gateway", desc: "Dairy and Bakery are 'Habitual Hooks' that drive app-open frequency. Solving for 'Hidden Expiry' is a defensive strategy to prevent Kirana Reversion." },
  { title: "Ops as Product Feature", desc: "Product management in quick commerce extends beyond the app interface into the physical warehouse. Bridging digital metadata (WMS) with physical reality (thermal bags)." },
  { title: "Trust as Economic Multiplier", desc: "Resolving 'Melted Product' and 'Refund Drama' unlocks high-margin categories like frozen desserts (2.7x margin) and pharmaceuticals. Trust is a top-line driver." },
];

/* ── Animated stat counter ── */
const AnimatedStat = ({ val, label, color }: { val: string; label: string; color: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const numMatch = val.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix = val.slice(0, val.indexOf(numMatch?.[0] ?? ""));
  const suffix = val.slice((val.indexOf(numMatch?.[0] ?? "") + (numMatch?.[0]?.length ?? 0)));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(eased * num);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, num]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="font-mono-metric text-3xl md:text-4xl font-bold"
        style={{ color }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {prefix}{Number.isInteger(num) ? Math.round(display) : display.toFixed(num % 1 === 0 ? 0 : 1)}{suffix}
      </motion.div>
      <p className="mt-2 text-xs" style={{ color: "#B0B0B0" }}>{label}</p>
    </div>
  );
};

/* ── Animated SHAP bar ── */
const AnimatedBar = ({ width, color, delay = 0 }: { width: string; color: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <div ref={ref} className="h-2 rounded-full overflow-hidden" style={{ background: Z.lavender }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: "0%" }}
        animate={inView ? { width } : { width: "0%" }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

const Zepto = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="pt-16 relative" style={{ background: Z.offWhite, color: Z.charcoal }}>
      <AmbientCrystals accentColor="#818CF8" intensity="subtle" />
      {/* Hero */}
      <section className="px-6 py-20 md:py-28" style={{ background: `linear-gradient(180deg, ${Z.lavender} 0%, ${Z.offWhite} 100%)` }}>
        <div className="max-w-6xl mx-auto text-center">
          <ScrollFadeIn>
            <img src={zeptoLogo} alt="Zepto" className="h-12 md:h-16 mx-auto mb-8 object-contain" />
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: Z.purple }}>Case Study</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ color: Z.charcoal }}>
              Beyond the Stopwatch
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: Z.charcoalLight }}>
              Building the Trust Infrastructure for Zepto's Perishable Goods Experience
            </p>
            <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: Z.muted }}>
              Zepto's 10-minute delivery promise attracts users, but hidden product metadata and last-mile infrastructure failures drive them away. Users receive perishables expiring in 24–72 hours, beverages at room temperature, and melted ice cream.
            </p>
          </ScrollFadeIn>

          {/* About Zepto Card */}
          <ScrollFadeIn delay={0.2}>
            <div className="mt-12 max-w-4xl mx-auto rounded-2xl p-8 md:p-10 text-left" style={{ background: Z.purpleLight, border: `1px solid ${Z.purpleBorder}` }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: Z.purple }}>About Zepto</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: Z.charcoalLight }}>
                India's fastest growing quick commerce platform — delivering groceries in 10 minutes. Valued at $7B, operating 900+ dark stores across 70+ cities. A "pure-play" operator optimized for sub-10-minute delivery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg" style={{ background: 'rgba(129,140,248,0.12)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: Z.purple }}>Mission</p>
                  <p className="text-sm" style={{ color: Z.charcoalLight }}>"Save you time — making every second count."</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'rgba(129,140,248,0.12)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: Z.purple }}>Vision</p>
                  <p className="text-sm" style={{ color: Z.charcoalLight }}>"To become the leading online grocery platform, setting new standards for convenience and quality."</p>
                </div>
              </div>

              {/* Competitors */}
              <div className="border-t pt-6" style={{ borderColor: Z.purpleBorder }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: Z.purple }}>Key Competitors</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { name: "Blinkit", logo: blinkitLogo },
                    { name: "Swiggy Instamart", logo: swiggyLogo },
                    { name: "Dunzo", logo: dunzoLogo },
                    { name: "BigBasket", logo: bigbasketLogo },
                  ].map((c) => (
                    <div key={c.name} className="flex flex-col items-center gap-2 p-4 rounded-xl transition-colors hover:bg-[rgba(129,140,248,0.15)]" style={{ background: 'rgba(129,140,248,0.06)' }}>
                      <img src={c.logo} alt={c.name} className="h-10 w-10 object-contain rounded-lg" />
                      <span className="text-xs font-medium text-center" style={{ color: Z.charcoalLight }}>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="px-6 py-20" style={{ background: Z.offWhite }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: Z.purple }}>The Problem</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: Z.purple }}>The Trust Crisis</h3>
            <p className="text-sm md:text-base max-w-4xl leading-relaxed mb-4" style={{ color: Z.charcoalLight }}>
              Zepto's 10-minute delivery promise successfully attracts users, but hidden product metadata and last-mile infrastructure failures are driving them away. Users receive perishables expiring in 24–72 hours without prior knowledge, beverages arrive at room temperature, and ice cream often reaches the doorstep in a melted state — killing the instant gratification which Zepto aims at providing.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-12" style={{ color: Z.charcoal }}>Why It Matters</h2>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "The Kirana Reversion", desc: "When quality fails, users default to local kirana stores for 'Anchor Categories' (Dairy/Bakery), where they can manually inspect products.", icon: AlertTriangle, color: Z.amber },
              { title: "Habit Disruption", desc: "Dairy and Bakery are destination categories with 55% penetration and 15–20x monthly frequency. Breaking this loop kills cross-sell potential.", icon: BarChart3, color: Z.purple },
              { title: "Revenue at Risk", desc: "A 10% churn in high-frequency fresh categories puts ₹611 crore in annual revenue at risk based on FY25 projections.", icon: AlertTriangle, color: Z.red },
            ].map((c, i) => (
              <ScrollFadeIn key={c.title} delay={i * 0.1}>
                <motion.div
                  className="rounded-xl p-6 shadow-sm h-full flex flex-col cursor-default"
                  style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}`, borderTop: `3px solid ${c.color}` }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: `0 0 24px ${c.color}33, 0 0 48px ${c.color}15`,
                    borderColor: c.color,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <c.icon size={24} className="mb-3" style={{ color: c.color }} />
                  <h3 className="font-bold mb-2" style={{ color: Z.charcoal }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: Z.charcoalLight }}>{c.desc}</p>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Business Impact Stats */}
          <ScrollFadeIn>
            <div className="rounded-2xl p-8 md:p-12" style={{ background: "rgba(129,140,248,0.06)", border: `1px solid ${Z.purpleBorder}` }}>
              <h3 className="text-center font-bold mb-8" style={{ color: Z.charcoal }}>Current Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { val: "68%", label: "of consumers abandon after one spoiled experience", color: Z.red },
                  { val: "57%", label: "report concerns about missing 'best before' dates", color: Z.amber },
                  { val: "₹611 Cr", label: "annual revenue at risk from fresh category churn", color: Z.purple },
                 ].map(s => (
                  <AnimatedStat key={s.val} val={s.val} label={s.label} color={s.color} />
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Research */}
      <section className="px-6 py-20" style={{ background: Z.lavender }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: Z.purple }}>Research & Discovery</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: Z.charcoal }}>The Data Black Hole</h2>
            <p className="max-w-3xl mb-12 leading-relaxed" style={{ color: Z.charcoalLight }}>
              To validate severity, I analyzed industry churn data, consumer sentiment reports, and 200+ qualitative reviews across Reddit, Twitter, and App Stores.
            </p>
          </ScrollFadeIn>

          {/* SHAP Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <ScrollFadeIn>
              <motion.div className="rounded-xl p-6 shadow-sm h-full flex flex-col cursor-default" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }} whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${Z.purple}33, 0 0 48px ${Z.purple}15`, borderColor: Z.purple }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <h3 className="font-bold mb-4" style={{ color: Z.purple }}>Churn Driver Analysis (SHAP Lens)</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium" style={{ color: Z.charcoal }}>Delivery Reliability</span>
                      <span className="font-mono-metric text-xs" style={{ color: Z.red }}>SHAP 0.221</span>
                    </div>
                    <AnimatedBar width="88%" color={Z.red} />
                    <p className="text-xs mt-1" style={{ color: Z.muted }}>Churn spikes to 65% when reliability falls below 80%</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium" style={{ color: Z.charcoal }}>Support Resolution Time</span>
                      <span className="font-mono-metric text-xs" style={{ color: Z.amber }}>SHAP 0.142</span>
                    </div>
                    <AnimatedBar width="57%" color={Z.amber} delay={0.3} />
                    <p className="text-xs mt-1" style={{ color: Z.muted }}>Churn risk increases 1.18x for every 24-hour delay</p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg" style={{ background: Z.lavender }}>
                  <p className="text-xs font-medium" style={{ color: Z.charcoal }}>"Leaky Bucket" Correlation:</p>
                  <p className="text-xs" style={{ color: Z.muted }}>High-value customers prioritize consistency over speed. A single melted order offsets 10 successful deliveries.</p>
                </div>
              </motion.div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <motion.div className="rounded-xl p-6 shadow-sm h-full flex flex-col cursor-default" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }} whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${Z.amber}33, 0 0 48px ${Z.amber}15`, borderColor: Z.amber }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <h3 className="font-bold mb-4" style={{ color: Z.amber }}>Basket Abandonment: The Halo Effect</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: Z.charcoalLight }}>
                  Dairy and Bakery are "Destination Categories" that anchor the household's daily habit loop.
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg" style={{ background: Z.lavender }}>
                    <p className="text-xs font-medium" style={{ color: Z.charcoal }}>The Basket Loss</p>
                    <p className="text-xs" style={{ color: Z.muted }}>35% of users place daily orders for staples. A user needing fresh milk at 7 AM typically places a ₹500+ order with high-margin impulse items.</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: Z.lavender }}>
                    <p className="text-xs font-medium" style={{ color: Z.charcoal }}>The Kirana Drain</p>
                    <p className="text-xs" style={{ color: Z.muted }}>If a user buys milk from kirana due to trust issues, the entire ₹500 basket is lost. App opening frequency drops 60–70%.</p>
                  </div>
                </div>
              </motion.div>
            </ScrollFadeIn>
          </div>

          {/* 3 Core Friction Points */}
          <ScrollFadeIn>
            <h3 className="text-xl font-bold mb-8" style={{ color: Z.charcoal }}>The Three Core Friction Points</h3>
          </ScrollFadeIn>
          <div className="space-y-6 mb-12">
            {frictionPoints.map((fp, i) => (
              <ScrollFadeIn key={fp.title} delay={i * 0.1}>
                <motion.div className="rounded-xl p-6 md:p-8 shadow-sm cursor-default" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }} whileHover={{ scale: 1.02, boxShadow: `0 0 24px ${Z.purple}33, 0 0 48px ${Z.purple}15`, borderColor: Z.purple }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0">
                      <fp.icon size={32} style={{ color: Z.purple }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold" style={{ color: Z.charcoal }}>{fp.title}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: Z.purpleLight, color: Z.purple }}>{fp.subtitle}</span>
                      </div>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: Z.charcoalLight }}>{fp.desc}</p>
                      <motion.div className="flex flex-wrap items-center gap-4 mb-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <span className="font-mono-metric text-2xl font-bold" style={{ color: Z.red }}>{fp.stat}</span>
                        <span className="text-xs" style={{ color: Z.muted }}>{fp.statLabel}</span>
                      </motion.div>
                      {fp.quote && (
                        <blockquote className="text-sm italic border-l-2 pl-4" style={{ borderColor: Z.purple, color: Z.muted }}>
                          {fp.quote}
                        </blockquote>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Key Insight Callout */}
          <ScrollFadeIn>
            <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: `linear-gradient(135deg, rgba(129,140,248,0.08) 0%, rgba(99,102,241,0.04) 100%)`, border: `1px solid ${Z.purpleBorder}` }}>
              <p className="text-sm uppercase tracking-widest mb-4" style={{ color: Z.purple }}>Key Insight</p>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: Z.white }}>
                "Speed is the hook, but Trust is the hook-remover."
              </h3>
              <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "#B0B0B0" }}>
                If Zepto continues to prioritize the stopwatch over the thermometer and the expiry label, it will find its growth hitting a "Trust Ceiling."
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Personas */}
      <section className="px-6 py-20" style={{ background: Z.offWhite }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: Z.purple }}>User Personas</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: Z.charcoal }}>Who's Affected</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((p, i) => (
              <ScrollFadeIn key={p.name} delay={i * 0.1}>
                <motion.div className="rounded-xl p-6 shadow-sm h-full flex flex-col cursor-default" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }} whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${Z.purple}33, 0 0 48px ${Z.purple}15`, borderColor: Z.purple }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{p.emoji}</span>
                    <div>
                      <h3 className="font-bold" style={{ color: Z.charcoal }}>{p.name}</h3>
                      <p className="text-xs" style={{ color: Z.muted }}>{p.role}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: Z.charcoalLight }}>{p.about}</p>
                  <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: Z.red }}>Pain Points</h4>
                  <ul className="space-y-2 mb-4">
                    {p.pains.map(pain => (
                      <li key={pain} className="text-sm flex items-start gap-2" style={{ color: Z.charcoalLight }}><XCircle size={14} className="mt-0.5 shrink-0" style={{ color: Z.red }} />{pain}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                  <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: Z.green }}>Needs</h4>
                  <ul className="space-y-2">
                    {p.needs.map(need => (
                      <li key={need} className="text-sm flex items-start gap-2" style={{ color: Z.charcoalLight }}><CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: Z.green }} />{need}</li>
                    ))}
                  </ul>
                  </div>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-20" style={{ background: Z.lavender }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: Z.purple }}>The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: Z.charcoal }}>Beyond the Stopwatch</h2>
            <p className="mb-12 max-w-3xl leading-relaxed" style={{ color: Z.charcoalLight }}>
              Moving Zepto from a "Speed-First" to a "Quality-First" architecture, neutralizing the Kirana store's primary advantage: physical inspection.
            </p>
          </ScrollFadeIn>

          {solutionPillars.map((pillar, fi) => (
            <ScrollFadeIn key={pillar.num} delay={fi * 0.08}>
              <div className="mb-16 last:mb-0">
                {/* Solution Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono-metric text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${pillar.color}22`, color: pillar.color }}>{pillar.num}</span>
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: Z.charcoal }}>{pillar.title}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full" style={{ background: Z.purpleLight, color: Z.purple }}>{pillar.subtitle}</span>
                </div>
                <p className="text-sm leading-relaxed mb-6 max-w-3xl" style={{ color: Z.charcoalLight }}>{pillar.summary}</p>

                {/* Subsections layout (for Freshness Visibility with multiple sub-parts) */}
                {pillar.subsections ? (
                  <div className="space-y-4">
                    {/* Before / After */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="rounded-lg p-3" style={{ background: 'rgba(248,113,113,0.06)', border: `1px solid rgba(248,113,113,0.15)` }}>
                        <p className="text-xs font-bold uppercase tracking-wide mb-1.5 flex items-center gap-1.5" style={{ color: Z.red }}>
                          <XCircle size={12} /> Before
                        </p>
                        <ul className="space-y-1">
                          {pillar.beforePoints.map(p => (
                            <li key={p} className="text-xs flex items-start gap-1.5" style={{ color: Z.charcoalLight }}>
                              <XCircle size={11} className="mt-0.5 shrink-0" style={{ color: Z.red }} />{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg p-3" style={{ background: 'rgba(52,211,153,0.06)', border: `1px solid rgba(52,211,153,0.15)` }}>
                        <p className="text-xs font-bold uppercase tracking-wide mb-1.5 flex items-center gap-1.5" style={{ color: Z.green }}>
                          <CheckCircle size={12} /> After
                        </p>
                        <ul className="space-y-1">
                          {pillar.afterPoints.map(p => (
                            <li key={p} className="text-xs flex items-start gap-1.5" style={{ color: Z.charcoalLight }}>
                              <CheckCircle size={11} className="mt-0.5 shrink-0" style={{ color: Z.green }} />{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 3-column: Left image | Center cards | Right image */}
                    <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                      {/* Left mockup - Listing Level */}
                      <motion.div
                        className="shrink-0 rounded-xl overflow-hidden shadow-lg lg:w-[240px]"
                        style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }}
                        whileHover={{ boxShadow: `0 0 30px ${pillar.color}22` }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={pillar.subsections[0].mockup} alt={pillar.subsections[0].mockupAlt} className="w-full h-full object-contain" />
                      </motion.div>

                      {/* Center cards */}
                      <div className="flex-1 flex flex-col gap-2.5 justify-center">
                        {[
                          { label: "Minimum Shelf-Life Badge", desc: "Green overlay badge on every product card (e.g., 'Min. 4 Days Life') pulling real-time batch metadata. Eliminates guesswork before adding to cart.", icon: ShieldCheck },
                          { label: "Shelf Life Filtering", desc: "A 'Longest Shelf Life' sort filter in search results — digitally replicating the kirana habit of picking from the back of the shelf.", icon: BarChart3 },
                          { label: "Detailed PDP Metadata", desc: "Dedicated freshness card on every PDP showing Manufacturing Date, Best Before Date, computed Shelf Life, and a trust-seal guarantee badge.", icon: Eye },
                        ].map((feat) => (
                          <motion.div
                            key={feat.label}
                            className="rounded-lg px-4 py-3 cursor-default"
                            style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}`, borderLeft: `3px solid ${pillar.color}` }}
                            whileHover={{ scale: 1.01, boxShadow: `0 0 16px ${pillar.color}33` }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <div className="flex items-start gap-2.5">
                              <feat.icon size={15} className="mt-0.5 shrink-0" style={{ color: pillar.color }} />
                              <div>
                                <p className="text-xs font-bold mb-0.5" style={{ color: Z.charcoal }}>{feat.label}</p>
                                <p className="text-[11px] leading-[1.5]" style={{ color: Z.charcoalLight }}>{feat.desc}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Right mockup - PDP */}
                      <motion.div
                        className="shrink-0 rounded-xl overflow-hidden shadow-lg lg:w-[240px]"
                        style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }}
                        whileHover={{ boxShadow: `0 0 30px ${pillar.color}22` }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={pillar.subsections[1].mockup} alt={pillar.subsections[1].mockupAlt} className="w-full h-full object-contain" />
                      </motion.div>
                    </div>

                    {/* User Journey: The Morning Habit */}
                    <div className="rounded-xl p-4" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">👩‍🍳</span>
                        <h4 className="text-sm font-bold" style={{ color: Z.charcoal }}>The Morning Habit</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: Z.purpleLight, color: Z.purple }}>Persona: Ananya</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="rounded-lg p-3" style={{ background: 'rgba(248,113,113,0.06)', border: `1px solid rgba(248,113,113,0.15)` }}>
                          <p className="text-xs font-bold uppercase tracking-wide mb-1.5 flex items-center gap-1.5" style={{ color: Z.red }}>
                            <XCircle size={12} /> Before
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: Z.charcoalLight }}>
                            Orders bread blindly → Receives near-expiry stock → Wastage occurs → Churns back to Kirana for staples.
                          </p>
                        </div>
                        <div className="rounded-lg p-3" style={{ background: 'rgba(52,211,153,0.06)', border: `1px solid rgba(52,211,153,0.15)` }}>
                          <p className="text-xs font-bold uppercase tracking-wide mb-1.5 flex items-center gap-1.5" style={{ color: Z.green }}>
                            <CheckCircle size={12} /> After
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: Z.charcoalLight }}>
                            Filters by "Longest Shelf Life" → Adds bread with "5 Days Guarantee" → Basket grows to ₹650 with high-margin eggs/butter → Habit retained; LTV protected.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Image + Before/After + Features side by side */}
                    <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                      {/* Visual */}
                      {(pillar.num === "02" || pillar.num === "03") && (
                        <motion.div
                          className="shrink-0 rounded-xl overflow-hidden shadow-lg lg:w-[260px] flex items-center"
                          style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }}
                          whileHover={{ boxShadow: `0 0 30px ${pillar.color}22` }}
                          transition={{ duration: 0.3 }}
                        >
                          <img src={pillar.num === "02" ? thermalShieldImg : frozenGuardianImg} alt={`${pillar.title} before and after comparison`} className="w-full object-contain" />
                        </motion.div>
                      )}
                      <div className="flex-1 space-y-4">
                        {/* Before / After */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="rounded-lg p-3" style={{ background: 'rgba(248,113,113,0.06)', border: `1px solid rgba(248,113,113,0.15)` }}>
                            <p className="text-xs font-bold uppercase tracking-wide mb-1.5 flex items-center gap-1.5" style={{ color: Z.red }}>
                              <XCircle size={12} /> Before
                            </p>
                            <ul className="space-y-1">
                              {pillar.beforePoints.map(p => (
                                <li key={p} className="text-xs flex items-start gap-1.5" style={{ color: Z.charcoalLight }}>
                                  <XCircle size={11} className="mt-0.5 shrink-0" style={{ color: Z.red }} />{p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="rounded-lg p-3" style={{ background: 'rgba(52,211,153,0.06)', border: `1px solid rgba(52,211,153,0.15)` }}>
                            <p className="text-xs font-bold uppercase tracking-wide mb-1.5 flex items-center gap-1.5" style={{ color: Z.green }}>
                              <CheckCircle size={12} /> After
                            </p>
                            <ul className="space-y-1">
                              {pillar.afterPoints.map(p => (
                                <li key={p} className="text-xs flex items-start gap-1.5" style={{ color: Z.charcoalLight }}>
                                  <CheckCircle size={11} className="mt-0.5 shrink-0" style={{ color: Z.green }} />{p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* Feature cards */}
                        <div className="grid grid-cols-1 gap-2.5">
                          {pillar.features && pillar.features.map((feat) => (
                            <motion.div
                              key={feat.label}
                              className="rounded-lg px-4 py-3 cursor-default"
                              style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}`, borderLeft: `3px solid ${pillar.color}` }}
                              whileHover={{ scale: 1.01, boxShadow: `0 0 16px ${pillar.color}33` }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                              <div className="flex items-start gap-2.5">
                                <feat.icon size={15} className="mt-0.5 shrink-0" style={{ color: pillar.color }} />
                                <div>
                                  <p className="text-xs font-bold mb-1" style={{ color: Z.charcoal }}>{feat.label}</p>
                                  <p className="text-[11px] leading-[1.6]" style={{ color: Z.charcoalLight }}>{feat.desc}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Tech Architecture */}
      <section className="px-6 py-20" style={{ background: Z.lavender }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: Z.purple }}>Technical Architecture</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: Z.charcoal }}>The Trust Hub</h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Database, title: "Data Sync Layer", desc: "WMS-to-Storefront API integration. Every inwarding includes Batch ID + Expiry Date scan updating the dark store's digital inventory map.", color: Z.purple },
                { icon: Cpu, title: "IoT-Enabled Last Mile", desc: "Bluetooth temperature sensors in rider bags. If temperature crosses Critical Melt Threshold (-12°C), automated quality-failure refund triggers before user complains.", color: Z.amber },
                { icon: Camera, title: "Visual AI Dispute Resolution", desc: "Computer Vision model trained on viscosity patterns for melted liquids to automate refunds without human support intervention.", color: Z.red },
              ].map((a, i) => (
                <ScrollFadeIn key={a.title} delay={i * 0.1}>
                  <motion.div className="rounded-xl p-6 shadow-sm h-full flex flex-col cursor-default" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}`, borderTop: `3px solid ${a.color}` }} whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${a.color}33, 0 0 48px ${a.color}15`, borderColor: a.color }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <a.icon size={28} className="mb-3" style={{ color: a.color }} />
                    <h3 className="font-bold mb-2" style={{ color: Z.charcoal }}>{a.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: Z.charcoalLight }}>{a.desc}</p>
                  </motion.div>
                </ScrollFadeIn>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="px-6 py-20" style={{ background: Z.offWhite }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: Z.purple }}>Success Metrics</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: Z.charcoal }}>The Trust Pyramid</h2>
          </ScrollFadeIn>

          {/* North Star */}
          <ScrollFadeIn>
            <div className="rounded-2xl p-8 text-center mb-8" style={{ background: `linear-gradient(135deg, rgba(129,140,248,0.08) 0%, rgba(99,102,241,0.04) 100%)`, border: `1px solid ${Z.purpleBorder}` }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: Z.purple }}>North Star Metric</p>
              <h3 className="text-2xl font-bold mb-2" style={{ color: Z.charcoal }}>Customer Lifetime Value (LTV)</h3>
              <AnimatedStat val="+22%" label="" color={Z.purple} />
              <p className="text-xs max-w-lg mx-auto" style={{ color: "#B0B0B0" }}>
                LTV = AOV × Purchase Frequency × Customer Lifespan. By solving for trust, we extend Lifespan and maintain Frequency.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollFadeIn>
              <motion.div className="rounded-xl p-6 shadow-sm h-full flex flex-col cursor-default" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }} whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${Z.purple}33, 0 0 48px ${Z.purple}15`, borderColor: Z.purple }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <h3 className="font-bold mb-4" style={{ color: Z.purple }}>L1 Metrics: Behavioral Shift</h3>
                <ul className="space-y-3 text-sm" style={{ color: Z.charcoalLight }}>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: Z.purple }} />Category-Specific Churn (Dairy/Bakery): Reduce from 12% → 7%</li>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: Z.purple }} />Frozen Dessert Attach Rate: +15–20% via "Verified Frozen" badges</li>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: Z.purple }} />Transparency Conversion Rate: Measure CTR of "Min Shelf Life" badge</li>
                </ul>
              </motion.div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <motion.div className="rounded-xl p-6 shadow-sm h-full flex flex-col cursor-default" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }} whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${Z.amber}33, 0 0 48px ${Z.amber}15`, borderColor: Z.amber }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <h3 className="font-bold mb-4" style={{ color: Z.amber }}>L2/Guardrail Metrics</h3>
                <ul className="space-y-3 text-sm" style={{ color: Z.charcoalLight }}>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: Z.amber }} />Thermal Wastage: Reduce from 8–12% → under 4%</li>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: Z.amber }} />Quality Support Tickets: Decrease by 40% via Visual AI</li>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: Z.amber }} />Guardrail: ADT increase ≤ 45 seconds despite stricter SOPs</li>
                </ul>
              </motion.div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="px-6 py-20" style={{ background: Z.lavender }}>
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: Z.purple }}>Key Takeaways</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: Z.charcoal }}>Beyond the Stopwatch</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {takeaways.map((t, i) => (
              <ScrollFadeIn key={t.title} delay={i * 0.1}>
                <motion.div className="rounded-xl p-6 shadow-sm h-full flex flex-col cursor-default" style={{ background: Z.cardBg, border: `1px solid ${Z.cardBorder}` }} whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${Z.purple}33, 0 0 48px ${Z.purple}15`, borderColor: Z.purple }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <h3 className="font-bold mb-2" style={{ color: Z.charcoal }}>{t.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: Z.charcoalLight }}>{t.desc}</p>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40"
          style={{ background: Z.purple, color: Z.white }}
          aria-label="Back to top"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </main>
  );
};

export default Zepto;
