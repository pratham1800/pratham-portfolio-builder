import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Download, ArrowRight, Search, Cpu, TrendingUp, Briefcase, GraduationCap } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
import { motion } from "framer-motion";

const tagColors: Record<string, string> = {
  Marketplace: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  "Trust Infrastructure": "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
  B2C: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
  "UX Research": "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  "Quick-Commerce": "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
  FinTech: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "System Design": "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
};

const projects = [
  {
    title: "GharSeva",
    subtitle: "A managed marketplace for India's domestic help market.",
    tags: ["Marketplace", "Trust Infrastructure", "B2C"],
    to: "/gharseva",
    span: "md:col-span-2",
    accent: "from-indigo-500/20 to-violet-500/20",
  },
  {
    title: "Zepto: Perishable Goods UX",
    subtitle: "Improving transparency and trust for high-churn grocery categories.",
    tags: ["UX Research", "Quick-Commerce"],
    to: "/zepto",
    span: "md:col-span-1",
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Livlong & Healthcare",
    subtitle: "Migrating wallet systems to microservices for scale.",
    tags: ["FinTech", "System Design"],
    to: null,
    span: "md:col-span-1",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
];

const iconGradients = [
  "from-indigo-500 to-violet-500",
  "from-cyan-500 to-blue-500",
  "from-amber-500 to-orange-500",
];

const skills = [
  { num: "01", title: "User-Centric Discovery", desc: "Research, Personas, Pain-point mapping, and Jobs-to-be-Done frameworks.", icon: Search },
  { num: "02", title: "Technical Execution", desc: "System Design, API logic, Backend empathy, and cross-functional alignment.", icon: Cpu },
  { num: "03", title: "Business Strategy", desc: "Market sizing, Unit Economics, GTM strategy, and growth levers.", icon: TrendingUp },
];

const timeline = [
  { year: "2024", title: "Product Manager — Paragon", desc: "Leading IoT product development for industrial automation." },
  { year: "2023", title: "Software Engineer — LivLong / IIFL", desc: "Built healthcare fintech features, migrated wallet to microservices." },
  { year: "2022", title: "B.Tech — JIIT Noida", desc: "Computer Science Engineering." },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Index = () => (
  <main className="pt-16">
    {/* Hero — Dark gradient */}
    <section className="min-h-[85vh] flex items-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid-pattern" />

      {/* Mesh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/15 -top-48 -right-48 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-500/10 bottom-0 -left-40 blur-3xl animate-[pulse_10s_ease-in-out_infinite_1s]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/10 top-1/2 left-1/2 -translate-x-1/2 blur-3xl animate-[pulse_12s_ease-in-out_infinite_2s]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <ScrollFadeIn>
          <p className="text-indigo-300 font-medium mb-4 text-sm tracking-wide uppercase">
            <Typewriter />
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mb-6 text-white">
            Hi, I'm Pratham Maheshwari.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-4 leading-relaxed">
            I build products that bridge the gap between human needs and digital solutions.
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Software Engineer turned Product Manager. Currently obsessed with organized marketplaces 
            and trust-infrastructure in Tier 2 India.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="mailto:pratham@example.com" className="text-slate-400 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg" aria-label="Email">
              <Mail size={22} />
            </a>
            <a
              href="#"
              className="ml-2 sm:ml-4 inline-flex items-center gap-2 gradient-btn text-white px-5 sm:px-6 py-3 rounded-lg font-medium"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Work / Bento Grid */}
    <section id="work" className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="gradient-text font-medium text-sm tracking-wide uppercase mb-2">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        </ScrollFadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((p) => {
            const inner = (
              <motion.div
                variants={staggerItem}
                whileHover={p.to ? { y: -6, scale: 1.01 } : {}}
                className={`group relative rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 ${
                  p.to ? "hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 cursor-pointer" : ""
                } ${p.span}`}
              >
                {/* Gradient left border on hover */}
                {p.to && (
                  <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <div className={`w-full h-32 sm:h-40 bg-gradient-to-br ${p.accent} rounded-lg mb-6 flex items-center justify-center`}>
                  <span className="text-muted-foreground text-sm">Project Preview</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[t] || "bg-secondary text-secondary-foreground"}`}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.to && (
                  <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            );

            return p.to ? (
              <Link key={p.title} to={p.to}>{inner}</Link>
            ) : (
              <div key={p.title}>{inner}</div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* How I Think */}
    <section id="about" className="px-4 sm:px-6 py-16 sm:py-20 section-warm">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="gradient-text font-medium text-sm tracking-wide uppercase mb-2">Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How I Think</h2>
        </ScrollFadeIn>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((s, i) => (
            <motion.div
              key={s.num}
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: "0 8px 30px -12px hsl(239 84% 67% / 0.25)" }}
              className="bg-card rounded-xl border border-border p-6 sm:p-8 transition-colors hover:border-indigo-500/30 relative overflow-hidden"
            >
              {/* Watermark number */}
              <span className="absolute -top-4 -right-2 text-8xl font-bold text-muted/30 select-none pointer-events-none font-mono-metric">
                {s.num}
              </span>
              {/* Icon with gradient bg */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradients[i]} flex items-center justify-center mb-4`}>
                <s.icon className="text-white" size={22} />
              </div>
              <p className="gradient-text font-mono-metric text-sm mb-2 font-semibold">{s.num}</p>
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Metrics — Dark band */}
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid-pattern opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollFadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <CountUpStat end={45} suffix="%" label="Faster Fault Detection" dark />
            <CountUpStat end={60} suffix="%" label="Reduction in Manual Reporting" dark />
            <CountUpStat end={1} suffix="M+" label="Customers Impacted" dark />
            <CountUpStat end={85} suffix="%" label="Task Completion Rate" dark />
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Experience Timeline */}
    <section className="px-4 sm:px-6 py-16 sm:py-20 section-warm">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="gradient-text font-medium text-sm tracking-wide uppercase mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        </ScrollFadeIn>
        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-indigo-300/20" />
          {timeline.map((t, i) => (
            <ScrollFadeIn key={t.year} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-10 pl-10 md:pl-20 relative"
              >
                {/* Pulsing dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 border-2 border-background animate-pulse-glow" />
                {i === 0 ? <Briefcase className="text-indigo-500 mt-0.5 shrink-0" size={20} /> : i === 1 ? <Cpu className="text-violet-500 mt-0.5 shrink-0" size={20} /> : <GraduationCap className="text-amber-500 mt-0.5 shrink-0" size={20} />}
                <div className="border-l-2 border-indigo-500/20 pl-4">
                  <p className="text-xs gradient-text font-mono-metric mb-1 font-semibold">{t.year}</p>
                  <h3 className="font-bold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default Index;
