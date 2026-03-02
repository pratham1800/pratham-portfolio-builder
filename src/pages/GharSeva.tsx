import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import PhoneMockup from "@/components/PhoneMockup";
import Footer from "@/components/Footer";
import { ArrowUp, CheckCircle, XCircle, Shield, Users, Handshake, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const researchTable = [
  { finding: "Families fear losing workers more than finding them", decision: "Replacement guarantee + substitute during leaves" },
  { finding: "Workers leave due to financial emergencies", decision: "Salary advances + emergency funds" },
  { finding: "Trust deficit on both sides", decision: "Verification + 3-day trial period" },
  { finding: "Tier 1 platforms ignore Tier 2 cities", decision: "Initial focus on Tier 2 as primary market" },
  { finding: "High upfront fees create friction", decision: "Low monthly subscription model" },
];

const journeySteps = [
  { employer: "Browse Categories", system: "Landing Page", worker: "KYC Onboarding", screen: "Landing" },
  { employer: "Fill Requirements", system: "Requirement Matching", worker: "Set Availability", screen: "Filter Form" },
  { employer: "View Verified Profiles", system: "AI Match & Notify", worker: "Receive Trial Request", screen: "Worker Profile" },
  { employer: "Select & Pay Booking", system: "Payment Processing", worker: "Accept/Reject", screen: "Checkout" },
  { employer: "Trial Period (1-2 Days)", system: "Trial Management", worker: "Trial Execution", screen: "Dashboard" },
  { employer: "Subscription Activation", system: "Contract & Payroll", worker: "Regular Employment", screen: "Attendance Log" },
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
    <main className="pt-16" style={{ ["--gs-navy" as string]: "#1B263B", ["--gs-teal" as string]: "#2D6A4F", ["--gs-amber" as string]: "#FFB703" }}>
      {/* Hero */}
      <section className="px-6 py-20 md:py-28" style={{ background: "linear-gradient(135deg, #1B263B 0%, #0D1B2A 100%)" }}>
        <div className="max-w-6xl mx-auto text-center">
          <ScrollFadeIn>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#FFB703" }}>Case Study</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: "#FFFFFF" }}>GharSeva</h1>
            <p className="text-xl md:text-2xl mb-2" style={{ color: "#E0E0E0" }}>
              Connecting India's Households with the Help they Need
            </p>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
              A Trust + Support Platform for India's Domestic Help Market.
            </p>
          </ScrollFadeIn>

          {/* Mission & Vision */}
          <ScrollFadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="rounded-xl p-6 text-left" style={{ background: "rgba(255,183,3,0.1)", border: "1px solid rgba(255,183,3,0.25)" }}>
                <p className="text-2xl mb-2">🎯</p>
                <h3 className="font-bold mb-2" style={{ color: "#FFB703" }}>Mission</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#D1D5DB" }}>
                  Eliminate the chaos of finding and retaining domestic help by building a managed platform — where families get verified, reliable workers and workers get fair pay, financial security, and dignity.
                </p>
              </div>
              <div className="rounded-xl p-6 text-left" style={{ background: "rgba(45,106,79,0.15)", border: "1px solid rgba(45,106,79,0.3)" }}>
                <p className="text-2xl mb-2">🌍</p>
                <h3 className="font-bold mb-2" style={{ color: "#2D6A4F" }}>Vision</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#D1D5DB" }}>
                  Become India's trust infrastructure for domestic help — a world where no family spends weeks searching, and no worker is exploited because there was no system to protect them.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#2D6A4F" }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Broken System</h2>
            <p className="text-muted-foreground text-sm mb-2">A 21st-century problem stuck in a 19th-century solution</p>
            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-12">
              Every day in India, millions of families and domestic workers desperately search for each other — often in the same locality — yet never connect. The system runs on informal trust, word-of-mouth, and hope.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "For Families", color: "#FFB703", items: ["No verification means constant safety anxiety", "No replacement guarantee disrupts weeks of life", "No substitute during leaves — household bears all burden"] },
              { title: "For Workers", color: "#2D6A4F", items: ["No job security — income always at risk", "No financial safety nets during emergencies", "Undignified job search, dependent on who you know"] },
              { title: "For the Market", color: "#EF4444", items: ["Trust deficit on both sides", "No platform owns the trust layer", "Neither side has reason to change"] },
            ].map((c, i) => (
              <ScrollFadeIn key={c.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-6" style={{ borderTop: `3px solid ${c.color}` }}>
                  <h3 className="font-bold mb-4">{c.title}</h3>
                  <ul className="space-y-3">
                    {c.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Stats Band */}
          <ScrollFadeIn>
            <div className="rounded-2xl p-8 md:p-12" style={{ background: "#1B263B" }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { end: 35, suffix: "M+", label: "Urban households stuck in chaos" },
                  { end: 10, suffix: "M+", label: "Workers trapped in the same cycle" },
                  { end: 90, suffix: "%", label: "Market still completely unorganised" },
                  { end: 1.5, suffix: "L Cr", label: "Market size with zero infrastructure", prefix: "₹" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-mono-metric text-3xl md:text-4xl font-bold" style={{ color: "#2D6A4F" }}>
                      {s.prefix}{s.end}{s.suffix}
                    </div>
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
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#2D6A4F" }}>Research & Discovery</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">I Didn't Assume. I Went and Found Out.</h2>
            <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              The domestic help market operates through informal networks, cash transactions, and unspoken social dynamics. Understanding it required getting off the desk.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollFadeIn>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4" style={{ color: "#FFB703" }}>Phase 1 — Market Research</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• ILO & NITI Aayog: ₹1.5L Cr market, 90% unorganised</li>
                  <li>• 14M+ households willing to pay for verified platforms</li>
                  <li>• Competitors optimize for speed of first transaction — nobody builds for long-term relationships</li>
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-secondary">
                  <p className="text-xs font-medium">Key Finding:</p>
                  <p className="text-xs text-muted-foreground">No reliable long-term relationship model exists despite the industry depending on trust.</p>
                </div>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4" style={{ color: "#2D6A4F" }}>Phase 2 — User Research</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Spoke with households about hiring anxiety</li>
                  <li>• Spoke with domestic workers about job search experience</li>
                  <li>• Registered on competing platforms as a worker</li>
                  <li>• Walked door-to-door in residential societies</li>
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-secondary">
                  <p className="text-xs font-medium">Key Finding:</p>
                  <p className="text-xs text-muted-foreground">Demand is huge, but fragmented supply fails to meet it. Trust deficit is the core blocker.</p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Insight to Decision Table */}
          <ScrollFadeIn>
            <h3 className="text-xl font-bold mb-6">From Insights to Decisions</h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary">
                    <TableHead className="font-bold">Research Finding</TableHead>
                    <TableHead className="font-bold">Product Decision</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {researchTable.map((r, i) => (
                    <TableRow key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                      <TableCell className="text-sm text-muted-foreground">{r.finding}</TableCell>
                      <TableCell className="text-sm font-semibold">{r.decision}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Personas */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#2D6A4F" }}>User Personas</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Who We're Building For</h2>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Priya */}
            <ScrollFadeIn>
              <div className="rounded-xl border-2 p-6" style={{ borderColor: "#FFB703" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg" style={{ background: "rgba(255,183,3,0.15)" }}>👩‍💼</div>
                  <div>
                    <h3 className="font-bold">Priya Sharma</h3>
                    <p className="text-xs text-muted-foreground">34 | Working Professional | Tier 2 City</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Manages a full-time job while running a household. Relies on neighbours and WhatsApp groups to find help.</p>
                <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#EF4444" }}>Pain Points</h4>
                <ul className="space-y-2 mb-4">
                  {["Spends 1–3 weeks finding a replacement", "No way to verify background", "No substitute during unannounced leave", "High upfront agency fees"].map(p => (
                    <li key={p} className="text-sm flex items-start gap-2"><XCircle size={14} className="mt-0.5 shrink-0 text-destructive" />{p}</li>
                  ))}
                </ul>
                <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#2D6A4F" }}>Needs</h4>
                <ul className="space-y-2">
                  {["Quick access to verified workers", "Guaranteed replacement & substitute", "Affordable, low-risk pricing"].map(n => (
                    <li key={n} className="text-sm flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#2D6A4F" }} />{n}</li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>

            {/* Rekha */}
            <ScrollFadeIn delay={0.1}>
              <div className="rounded-xl border-2 p-6" style={{ borderColor: "#2D6A4F" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg" style={{ background: "rgba(45,106,79,0.15)" }}>👩‍🍳</div>
                  <div>
                    <h3 className="font-bold">Rekha Devi</h3>
                    <p className="text-xs text-muted-foreground">32 | Domestic Worker | Tier 2 City</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Worked across multiple households for 8 years. Primary earner with no formal protections.</p>
                <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#EF4444" }}>Pain Points</h4>
                <ul className="space-y-2 mb-4">
                  {["Loses weeks searching door-to-door", "No financial help during emergencies", "Frequently exploited — delayed payments", "Existing platforms offer no support"].map(p => (
                    <li key={p} className="text-sm flex items-start gap-2"><XCircle size={14} className="mt-0.5 shrink-0 text-destructive" />{p}</li>
                  ))}
                </ul>
                <h4 className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#2D6A4F" }}>Needs</h4>
                <ul className="space-y-2">
                  {["Fast, dignified access to jobs", "Financial safety nets — advances, insurance", "Stable long-term employment"].map(n => (
                    <li key={n} className="text-sm flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#2D6A4F" }} />{n}</li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#2D6A4F" }}>The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Not Just Matching. A Complete Ecosystem.</h2>
            <p className="text-muted-foreground mb-12">The 3-Pillar Approach</p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { num: "01", title: "Verify", icon: Shield, desc: "Multi-level background checks covering ID, police verification, and references. Peace of mind for families, credibility for workers.", color: "#FFB703" },
              { num: "02", title: "Match & Trial", icon: Users, desc: "AI-powered matching + 3-day trial period. Both sides evaluate fit before committing — removing risk from both ends.", color: "#2D6A4F" },
              { num: "03", title: "Manage", icon: Settings, desc: "Salary handling, replacements, substitutes, attendance tracking. The platform stays involved after the match.", color: "#1B263B" },
            ].map((p, i) => (
              <ScrollFadeIn key={p.num} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6">
                  <p className="font-mono-metric text-xs mb-3" style={{ color: p.color }}>{p.num}</p>
                  <p.icon size={28} className="mb-3" style={{ color: p.color }} />
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollFadeIn>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4" style={{ color: "#FFB703" }}>For Families</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Verified workers matched within 48 hours", "Replacement within 2 days", "Instant substitute during unplanned leaves", "Low monthly subscription — no heavy upfront fees"].map(b => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#2D6A4F" }} />{b}</li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold mb-4" style={{ color: "#2D6A4F" }}>For Workers</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Fast job matching without door-to-door searching", "Salary advances and emergency funds", "Government scheme facilitation", "Performance bonuses tied to retention"].map(b => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#2D6A4F" }} />{b}</li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Virtuous Cycle */}
          <ScrollFadeIn>
            <div className="rounded-xl p-8 text-center" style={{ background: "rgba(45,106,79,0.08)", border: "1px solid rgba(45,106,79,0.2)" }}>
              <h3 className="font-bold mb-4" style={{ color: "#2D6A4F" }}>The Virtuous Cycle</h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                More workers in a cluster → more families served → higher worker bonuses → stronger worker loyalty → better service → more referrals → lower acquisition cost → higher margins
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Product Walkthrough */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide uppercase mb-2" style={{ color: "#2D6A4F" }}>Product Walkthrough</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The Dual-Sided User Journey</h2>
          </ScrollFadeIn>

          {/* Vertical Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {journeySteps.map((step, i) => (
              <ScrollFadeIn key={i} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-12 items-center">
                  {/* Employer side */}
                  <div className={`text-right ${i % 2 === 0 ? "" : "md:order-3 md:text-left"}`}>
                    <div className="inline-block bg-card rounded-xl border border-border p-4 text-left md:text-inherit">
                      <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: "#FFB703" }}>Employer</p>
                      <p className="text-sm font-medium">{step.employer}</p>
                    </div>
                  </div>

                  {/* Center system node */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10" style={{ background: "#1B263B", color: "#FFFFFF" }}>
                      {i + 1}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-center max-w-[100px]">{step.system}</p>
                  </div>

                  {/* Worker side */}
                  <div className={i % 2 === 0 ? "" : "md:order-1 md:text-right"}>
                    <div className="inline-block bg-card rounded-xl border border-border p-4">
                      <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: "#2D6A4F" }}>Worker</p>
                      <p className="text-sm font-medium">{step.worker}</p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Phone Mockups */}
          <ScrollFadeIn>
            <h3 className="text-xl font-bold mb-8 text-center">Key Screens</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
              {["Landing Page", "Requirement Form", "Worker Profile", "Checkout", "Dashboard", "Attendance Log"].map(label => (
                <PhoneMockup key={label} label={label} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40 transition-all hover:-translate-y-1"
          style={{ background: "#2D6A4F", color: "#FFFFFF" }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
};

export default GharSeva;
