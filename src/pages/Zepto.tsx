import ScrollFadeIn from "@/components/ScrollFadeIn";
import Footer from "@/components/Footer";
import { ArrowUp, CheckCircle, XCircle, AlertTriangle, Thermometer, Eye, ShieldCheck, Snowflake, BarChart3, Database, Cpu, Camera } from "lucide-react";
import { useState, useEffect } from "react";

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

const features = [
  {
    num: "01",
    title: "Freshness Visibility System",
    subtitle: "Perishables",
    items: [
      { label: "Minimum Shelf-Life Badge", desc: "UI marker on product image (e.g., 'Min. 4 Days Life') pulling real-time metadata from dark store's active batch." },
      { label: "Detailed PDP Metadata", desc: "Manufacturing and Best Before dates for the current stock on Product Detail Page." },
      { label: "Shelf Life Filtering", desc: "Search filter to sort categories by 'Longest Shelf Life' — digitally pick the freshest loaf." },
    ],
  },
  {
    num: "02",
    title: "The Thermal Shield",
    subtitle: "Beverages & Chilled",
    items: [
      { label: "Verified Chilled Badge", desc: "Users choose between 'Verified Chilled' (4°C) or 'Room Temperature' at product level." },
      { label: "IoT Cooler Sync", desc: "Real-time dark store cooler sensor integration. Product card shows 'Last verified at 3.8°C.'" },
      { label: "Cold-Chain Premium", desc: "Micro-fee option (₹7) for Thermal Bubble-Wrap Foil Sleeve. Free for Zepto Pass users." },
    ],
  },
  {
    num: "03",
    title: "Frozen Guardian Infrastructure",
    subtitle: "Ice Cream & Meds",
    items: [
      { label: "PCM Sub-Compartmentalization", desc: "Rider backpacks with Phase Change Material (PCM) boxes maintaining -18°C for 30 minutes." },
      { label: "Visual AI 'Melt-Scan' Refunds", desc: "3-second video submission → AI analyzes viscosity/state → instant refund to source." },
      { label: "Frozen Guarantee Marker", desc: "Trust badge indicating 'Guardian Box' packing — product will arrive intact." },
    ],
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

const Zepto = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="pt-16" style={{ ["--z-charcoal" as string]: "#111827", ["--z-blue" as string]: "#3B82F6", ["--z-amber" as string]: "#F59E0B", ["--z-red" as string]: "#EF4444" }}>
      {/* Hero */}
      <section className="px-6 py-20 md:py-28" style={{ background: "linear-gradient(135deg, #111827 0%, #0a0f1a 100%)" }}>
        <div className="max-w-6xl mx-auto text-center">
          <ScrollFadeIn>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#3B82F6" }}>Case Study</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
              Beyond the Stopwatch
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" style={{ color: "#D1D5DB" }}>
              Building the Trust Infrastructure for Zepto's Perishable Goods Experience
            </p>
            <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: "#9CA3AF" }}>
              Zepto's 10-minute delivery promise attracts users, but hidden product metadata and last-mile infrastructure failures drive them away. Users receive perishables expiring in 24–72 hours, beverages at room temperature, and melted ice cream.
            </p>
          </ScrollFadeIn>

          {/* About Zepto Card */}
          <ScrollFadeIn delay={0.2}>
            <div className="mt-12 max-w-2xl mx-auto rounded-xl p-6 text-left" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <h3 className="font-bold mb-2" style={{ color: "#3B82F6" }}>About Zepto</h3>
              <p className="text-sm mb-4" style={{ color: "#D1D5DB" }}>
                India's fastest growing quick commerce platform — delivering groceries in 10 minutes. Valued at $7B, operating 900+ dark stores across 70+ cities. A "pure-play" operator optimized for sub-10-minute delivery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg" style={{ background: "rgba(59,130,246,0.1)" }}>
                  <p className="text-xs font-medium" style={{ color: "#3B82F6" }}>Mission</p>
                  <p className="text-xs" style={{ color: "#D1D5DB" }}>"Save you time — making every second count."</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(59,130,246,0.1)" }}>
                  <p className="text-xs font-medium" style={{ color: "#3B82F6" }}>Vision</p>
                  <p className="text-xs" style={{ color: "#D1D5DB" }}>"To become the leading online grocery platform, setting new standards for convenience and quality."</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#3B82F6" }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why It Matters</h2>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "The Kirana Reversion", desc: "When quality fails, users default to local kirana stores for 'Anchor Categories' (Dairy/Bakery), where they can manually inspect products.", icon: AlertTriangle, color: "#F59E0B" },
              { title: "Habit Disruption", desc: "Dairy and Bakery are destination categories with 55% penetration and 15–20x monthly frequency. Breaking this loop kills cross-sell potential.", icon: BarChart3, color: "#3B82F6" },
              { title: "Revenue at Risk", desc: "A 10% churn in high-frequency fresh categories puts ₹611 crore in annual revenue at risk based on FY25 projections.", icon: AlertTriangle, color: "#EF4444" },
            ].map((c, i) => (
              <ScrollFadeIn key={c.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-6" style={{ borderTop: `3px solid ${c.color}` }}>
                  <c.icon size={24} className="mb-3" style={{ color: c.color }} />
                  <h3 className="font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Business Impact Stats */}
          <ScrollFadeIn>
            <div className="rounded-2xl p-8 md:p-12" style={{ background: "#111827" }}>
              <h3 className="text-center font-bold mb-8" style={{ color: "#FFFFFF" }}>Current Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { val: "68%", label: "of consumers abandon after one spoiled experience", color: "#EF4444" },
                  { val: "57%", label: "report concerns about missing 'best before' dates", color: "#F59E0B" },
                  { val: "₹611 Cr", label: "annual revenue at risk from fresh category churn", color: "#3B82F6" },
                ].map(s => (
                  <div key={s.val} className="text-center">
                    <div className="font-mono-metric text-3xl md:text-4xl font-bold" style={{ color: s.color }}>{s.val}</div>
                    <p className="mt-2 text-xs" style={{ color: "#9CA3AF" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Research */}
      <section className="px-6 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#3B82F6" }}>Research & Discovery</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">The Data Black Hole</h2>
            <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              To validate severity, I analyzed industry churn data, consumer sentiment reports, and 200+ qualitative reviews across Reddit, Twitter, and App Stores.
            </p>
          </ScrollFadeIn>

          {/* SHAP Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <ScrollFadeIn>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4" style={{ color: "#3B82F6" }}>Churn Driver Analysis (SHAP Lens)</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Delivery Reliability</span>
                      <span className="font-mono-metric text-xs" style={{ color: "#EF4444" }}>SHAP 0.221</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: "88%", background: "#EF4444" }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Churn spikes to 65% when reliability falls below 80%</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Support Resolution Time</span>
                      <span className="font-mono-metric text-xs" style={{ color: "#F59E0B" }}>SHAP 0.142</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: "57%", background: "#F59E0B" }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Churn risk increases 1.18x for every 24-hour delay</p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-secondary">
                  <p className="text-xs font-medium">"Leaky Bucket" Correlation:</p>
                  <p className="text-xs text-muted-foreground">High-value customers prioritize consistency over speed. A single melted order offsets 10 successful deliveries.</p>
                </div>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4" style={{ color: "#F59E0B" }}>Basket Abandonment: The Halo Effect</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Dairy and Bakery are "Destination Categories" that anchor the household's daily habit loop.
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-secondary">
                    <p className="text-xs font-medium">The Basket Loss</p>
                    <p className="text-xs text-muted-foreground">35% of users place daily orders for staples. A user needing fresh milk at 7 AM typically places a ₹500+ order with high-margin impulse items.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary">
                    <p className="text-xs font-medium">The Kirana Drain</p>
                    <p className="text-xs text-muted-foreground">If a user buys milk from kirana due to trust issues, the entire ₹500 basket is lost. App opening frequency drops 60–70%.</p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          {/* 3 Core Friction Points */}
          <ScrollFadeIn>
            <h3 className="text-xl font-bold mb-8">The Three Core Friction Points</h3>
          </ScrollFadeIn>
          <div className="space-y-6 mb-12">
            {frictionPoints.map((fp, i) => (
              <ScrollFadeIn key={fp.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0">
                      <fp.icon size={32} style={{ color: "#3B82F6" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold">{fp.title}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6" }}>{fp.subtitle}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{fp.desc}</p>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="font-mono-metric text-2xl font-bold" style={{ color: "#EF4444" }}>{fp.stat}</span>
                        <span className="text-xs text-muted-foreground">{fp.statLabel}</span>
                      </div>
                      {fp.quote && (
                        <blockquote className="text-sm italic border-l-2 pl-4 text-muted-foreground" style={{ borderColor: "#F59E0B" }}>
                          {fp.quote}
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Key Insight Callout */}
          <ScrollFadeIn>
            <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)", border: "1px solid rgba(59,130,246,0.3)" }}>
              <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "#3B82F6" }}>Key Insight</p>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "#FFFFFF" }}>
                "Speed is the hook, but Trust is the hook-remover."
              </h3>
              <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
                If Zepto continues to prioritize the stopwatch over the thermometer and the expiry label, it will find its growth hitting a "Trust Ceiling."
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Personas */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#3B82F6" }}>User Personas</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Who's Affected</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((p, i) => (
              <ScrollFadeIn key={p.name} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{p.emoji}</span>
                    <div>
                      <h3 className="font-bold">{p.name}</h3>
                      <p className="text-xs text-muted-foreground">{p.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.about}</p>
                  <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#EF4444" }}>Pain Points</h4>
                  <ul className="space-y-2 mb-4">
                    {p.pains.map(pain => (
                      <li key={pain} className="text-sm flex items-start gap-2"><XCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#EF4444" }} />{pain}</li>
                    ))}
                  </ul>
                  <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#2D6A4F" }}>Needs</h4>
                  <ul className="space-y-2">
                    {p.needs.map(need => (
                      <li key={need} className="text-sm flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#2D6A4F" }} />{need}</li>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#3B82F6" }}>The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Beyond the Stopwatch</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl leading-relaxed">
              Moving Zepto from a "Speed-First" to a "Quality-First" architecture, neutralizing the Kirana store's primary advantage: physical inspection.
            </p>
          </ScrollFadeIn>

          {features.map((f, fi) => (
            <ScrollFadeIn key={f.num} delay={fi * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono-metric text-sm font-bold" style={{ color: "#3B82F6" }}>{f.num}</span>
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6" }}>{f.subtitle}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {f.items.map(item => (
                    <div key={item.label} className="p-4 rounded-lg bg-secondary">
                      <p className="text-sm font-semibold mb-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Before/After Journeys */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#3B82F6" }}>User Journey Overhaul</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The "Halo Effect" Transformation</h2>
          </ScrollFadeIn>
          <div className="space-y-6">
            {journeys.map((j, i) => (
              <ScrollFadeIn key={j.persona} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="p-4 font-bold text-sm" style={{ background: "rgba(59,130,246,0.08)", color: "#3B82F6" }}>
                    Persona: {j.persona}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 border-b md:border-b-0 md:border-r border-border">
                      <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#EF4444" }}>Before</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{j.before}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#2D6A4F" }}>After</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{j.after}</p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Architecture */}
      <section className="px-6 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#3B82F6" }}>Technical Architecture</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The Trust Hub</h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Database, title: "Data Sync Layer", desc: "WMS-to-Storefront API integration. Every inwarding includes Batch ID + Expiry Date scan updating the dark store's digital inventory map.", color: "#3B82F6" },
                { icon: Cpu, title: "IoT-Enabled Last Mile", desc: "Bluetooth temperature sensors in rider bags. If temperature crosses Critical Melt Threshold (-12°C), automated quality-failure refund triggers before user complains.", color: "#F59E0B" },
                { icon: Camera, title: "Visual AI Dispute Resolution", desc: "Computer Vision model trained on viscosity patterns for melted liquids to automate refunds without human support intervention.", color: "#EF4444" },
              ].map((a, i) => (
                <ScrollFadeIn key={a.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl border border-border p-6" style={{ borderTop: `3px solid ${a.color}` }}>
                    <a.icon size={28} className="mb-3" style={{ color: a.color }} />
                    <h3 className="font-bold mb-2">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#3B82F6" }}>Success Metrics</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The Trust Pyramid</h2>
          </ScrollFadeIn>

          {/* North Star */}
          <ScrollFadeIn>
            <div className="rounded-2xl p-8 text-center mb-8" style={{ background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)", border: "1px solid rgba(59,130,246,0.3)" }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#3B82F6" }}>North Star Metric</p>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#FFFFFF" }}>Customer Lifetime Value (LTV)</h3>
              <p className="font-mono-metric text-4xl font-bold mb-4" style={{ color: "#3B82F6" }}>+22%</p>
              <p className="text-xs max-w-lg mx-auto" style={{ color: "#9CA3AF" }}>
                LTV = AOV × Purchase Frequency × Customer Lifespan. By solving for trust, we extend Lifespan and maintain Frequency.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollFadeIn>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4" style={{ color: "#3B82F6" }}>L1 Metrics: Behavioral Shift</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: "#3B82F6" }} />Category-Specific Churn (Dairy/Bakery): Reduce from 12% → 7%</li>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: "#3B82F6" }} />Frozen Dessert Attach Rate: +15–20% via "Verified Frozen" badges</li>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: "#3B82F6" }} />Transparency Conversion Rate: Measure CTR of "Min Shelf Life" badge</li>
                </ul>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4" style={{ color: "#F59E0B" }}>L2/Guardrail Metrics</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />Thermal Wastage: Reduce from 8–12% → under 4%</li>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />Quality Support Tickets: Decrease by 40% via Visual AI</li>
                  <li className="flex items-start gap-2"><ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />Guardrail: ADT increase ≤ 45 seconds despite stricter SOPs</li>
                </ul>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="px-6 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#3B82F6" }}>Key Takeaways</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Beyond the Stopwatch</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {takeaways.map((t, i) => (
              <ScrollFadeIn key={t.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-bold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40 transition-all hover:-translate-y-1"
          style={{ background: "#3B82F6", color: "#FFFFFF" }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
};

export default Zepto;
