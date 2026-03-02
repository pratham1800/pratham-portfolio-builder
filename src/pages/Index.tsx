import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Download, ArrowRight, Search, Cpu, TrendingUp, Briefcase, GraduationCap, Zap, ArrowUpRight } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
import { motion } from "framer-motion";

const tagColors: Record<string, string> = {
  Marketplace: "bg-primary/10 text-primary border border-primary/20",
  "Trust Infrastructure": "bg-primary/5 text-primary/80 border border-primary/15",
  B2C: "bg-accent/10 text-accent border border-accent/20",
  "UX Research": "bg-[hsl(200_100%_60%/0.1)] text-[hsl(200_100%_60%)] border border-[hsl(200_100%_60%/0.2)]",
  "Quick-Commerce": "bg-[hsl(45_100%_55%/0.1)] text-[hsl(45_100%_55%)] border border-[hsl(45_100%_55%/0.2)]",
  FinTech: "bg-primary/8 text-primary/90 border border-primary/15",
  "System Design": "bg-accent/8 text-accent/80 border border-accent/15",
};

const projects = [
  {
    title: "GharSeva",
    subtitle: "A managed marketplace for India's domestic help market.",
    tags: ["Marketplace", "Trust Infrastructure", "B2C"],
    to: "/gharseva",
    span: "md:col-span-2",
  },
  {
    title: "Zepto: Perishable Goods UX",
    subtitle: "Improving transparency and trust for high-churn grocery categories.",
    tags: ["UX Research", "Quick-Commerce"],
    to: "/zepto",
    span: "md:col-span-1",
  },
  {
    title: "Livlong & Healthcare",
    subtitle: "Migrating wallet systems to microservices for scale.",
    tags: ["FinTech", "System Design"],
    to: null,
    span: "md:col-span-1",
  },
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
  show: { transition: { staggerChildren: 0.15 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" as const } },
};

const Index = () => (
  <main className="pt-16">
    {/* Hero */}
    <section className="min-h-[100vh] flex items-center px-4 sm:px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 hero-grid-pattern" />
      <div className="scan-line" />

      {/* Dramatic orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-primary/8 -top-80 -right-80 blur-[150px] animate-float" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/6 bottom-0 -left-60 blur-[120px] animate-float-delayed" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px] animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <Zap size={14} className="text-primary" />
            <span className="text-primary font-mono-metric text-xs tracking-[0.2em] uppercase">
              <Typewriter />
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] max-w-5xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-foreground">Hi, I'm</span>{" "}
            <span className="gradient-text">Pratham</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            I build products that bridge the gap between{" "}
            <span className="text-foreground font-semibold">human needs</span> and{" "}
            <span className="text-foreground font-semibold">digital solutions</span>.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground/70 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Software Engineer turned Product Manager. Currently obsessed with organized marketplaces
            and trust-infrastructure in Tier 2 India.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Mail, href: "mailto:pratham@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_25px_-5px_hsl(105_100%_54%/0.3)] transition-all duration-300"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <motion.a
              href="#"
              className="ml-3 inline-flex items-center gap-2 gradient-btn px-6 py-3 rounded-xl font-bold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} /> Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Work / Bento Grid */}
    <section id="work" className="px-4 sm:px-6 py-20 sm:py-32 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="font-mono-metric text-xs text-primary uppercase tracking-[0.3em] mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-6xl font-black mb-16 text-foreground">
            Projects<span className="text-primary">.</span>
          </h2>
        </ScrollFadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((p) => {
            const inner = (
              <motion.div
                variants={staggerItem}
                whileHover={p.to ? { y: -10 } : {}}
                className={`group relative rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 ${
                  p.to ? "hover:border-primary/40 cursor-pointer hover:shadow-[0_0_60px_-15px_hsl(105_100%_54%/0.2)]" : "opacity-50"
                } ${p.span}`}
              >
                {/* Left accent bar */}
                {p.to && (
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                )}

                {/* Preview placeholder */}
                <div className="w-full h-36 sm:h-44 rounded-xl mb-6 bg-secondary border border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  <div className="absolute inset-0 hero-grid-pattern opacity-50" />
                  <span className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 font-mono-metric text-xs tracking-widest uppercase">
                    Preview
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{p.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className={`text-[11px] font-mono-metric font-medium px-3 py-1 rounded-full ${tagColors[t] || "bg-secondary text-secondary-foreground"}`}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.to && (
                  <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={20} />
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
    <section id="about" className="px-4 sm:px-6 py-20 sm:py-32 bg-background relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollFadeIn>
          <p className="font-mono-metric text-xs text-primary uppercase tracking-[0.3em] mb-3">Approach</p>
          <h2 className="text-3xl md:text-6xl font-black mb-16 text-foreground">
            How I Think<span className="text-primary">.</span>
          </h2>
        </ScrollFadeIn>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((s, i) => (
            <motion.div
              key={s.num}
              variants={staggerItem}
              whileHover={{ y: -8, borderColor: "hsl(105, 100%, 54%, 0.4)" }}
              className="bg-card rounded-2xl border border-border p-7 sm:p-9 transition-all duration-500 relative overflow-hidden group hover:shadow-[0_0_50px_-15px_hsl(105_100%_54%/0.15)]"
            >
              {/* Watermark number */}
              <span className="absolute -top-4 -right-2 text-[8rem] font-black text-muted/10 select-none pointer-events-none font-mono-metric leading-none group-hover:text-primary/10 transition-colors duration-500">
                {s.num}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                i === 0 ? "bg-primary/10 text-primary" :
                i === 1 ? "bg-accent/10 text-accent" :
                "bg-[hsl(45_100%_55%/0.1)] text-[hsl(45_100%_55%)]"
              }`}>
                <s.icon size={24} />
              </div>

              <p className="font-mono-metric text-[11px] text-primary tracking-[0.2em] uppercase mb-2 font-bold">{s.num}</p>
              <h3 className="text-lg font-bold mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Metrics */}
    <section className="px-4 sm:px-6 py-20 sm:py-28 section-dark relative overflow-hidden">
      <div className="absolute inset-0 hero-grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-accent/4 blur-[80px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollFadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <CountUpStat end={45} suffix="%" label="Faster Fault Detection" />
            <CountUpStat end={60} suffix="%" label="Less Manual Reporting" />
            <CountUpStat end={1} suffix="M+" label="Customers Impacted" />
            <CountUpStat end={85} suffix="%" label="Task Completion Rate" />
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Experience Timeline */}
    <section className="px-4 sm:px-6 py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="font-mono-metric text-xs text-primary uppercase tracking-[0.3em] mb-3">Background</p>
          <h2 className="text-3xl md:text-6xl font-black mb-16 text-foreground">
            Experience<span className="text-primary">.</span>
          </h2>
        </ScrollFadeIn>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/10" />

          {timeline.map((t, i) => (
            <ScrollFadeIn key={t.year} delay={i * 0.12}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-start gap-5 sm:gap-8 md:gap-12 mb-10 sm:mb-14 pl-12 md:pl-24 relative"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3.5 h-3.5 rounded-full bg-primary border-[3px] border-background animate-pulse-glow" />

                {/* Icon */}
                {i === 0 ? <Briefcase className="text-primary mt-0.5 shrink-0" size={20} /> :
                 i === 1 ? <Cpu className="text-accent mt-0.5 shrink-0" size={20} /> :
                 <GraduationCap className="text-[hsl(45_100%_55%)] mt-0.5 shrink-0" size={20} />}

                <div className="border-l-2 border-primary/10 pl-5 hover:border-primary/30 transition-colors duration-300">
                  <p className="font-mono-metric text-xs text-primary mb-1.5 font-bold tracking-wider">{t.year}</p>
                  <h3 className="font-bold mb-1.5 text-lg text-foreground">{t.title}</h3>
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
