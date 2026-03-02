import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Download, ArrowRight, Search, Cpu, TrendingUp, Briefcase, GraduationCap, Layers, Target, BarChart3 } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import { motion } from "framer-motion";
import gharsevaPreview from "@/assets/gharseva-preview.png";
import zeptoPreview from "@/assets/zepto-preview.png";
import HeroScene from "@/components/HeroScene";

const projects = [
  {
    title: "GharSeva",
    subtitle: "A managed marketplace for India's domestic help market.",
    description: "GharSeva connects urban Indian households with verified domestic workers through a subscription-based model built for long-term reliability.",
    tags: ["Marketplace", "Trust Infrastructure", "B2C"],
    to: "/gharseva",
    imageFirst: true,
    preview: gharsevaPreview,
  },
  {
    title: "Zepto: Perishable Goods UX",
    subtitle: "Building trust infrastructure beyond the 10-minute promise.",
    description: "A deep-dive into how hidden product metadata and last-mile thermal failures drive users back to kirana stores.",
    tags: ["UX Research", "Quick-Commerce", "Trust Systems"],
    to: "/zepto",
    imageFirst: false,
    preview: zeptoPreview,
  },
];

const services = [
  { icon: Search, title: "User-Centric Discovery", desc: "Deep user research, persona mapping, JTBD frameworks, and pain-point analysis to uncover real needs." },
  { icon: Layers, title: "Product Strategy", desc: "Roadmap definition, feature prioritization, and cross-functional alignment to ship what matters." },
  { icon: Cpu, title: "Technical Execution", desc: "System design, API architecture, backend empathy, and hands-on engineering collaboration." },
  { icon: Target, title: "Growth & GTM", desc: "Market sizing, unit economics, go-to-market strategy, and data-driven growth experiments." },
  { icon: BarChart3, title: "Analytics & Metrics", desc: "KPI frameworks, funnel analysis, A/B testing, and product analytics instrumentation." },
  { icon: TrendingUp, title: "Business Impact", desc: "Revenue modeling, competitive analysis, and translating user value into business outcomes." },
];

const timeline = [
  { year: "2024", title: "Product Manager — Paragon", desc: "Leading IoT product development for industrial automation.", icon: Briefcase },
  { year: "2023", title: "Software Engineer — LivLong / IIFL", desc: "Built healthcare fintech features, migrated wallet to microservices.", icon: Cpu },
  { year: "2022", title: "B.Tech — JIIT Noida", desc: "Computer Science Engineering.", icon: GraduationCap },
];

const Index = () => (
  <main className="pt-16">
    {/* Hero */}
    <section className="min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden">
      <HeroScene />
      <div className="w-full relative z-10 text-center flex flex-col items-center max-w-5xl mx-auto">
        <ScrollFadeIn>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Product Manager
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">Hi, I'm</p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6 font-display tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Pratham Maheshwari.
            </motion.span>
            <br />
            <span className="text-primary">I build products that drive growth.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Software Engineer turned Product Manager. Bridging human needs with digital solutions — obsessed with marketplaces and trust-infrastructure.
          </p>
          <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10">
            Currently building at Paragon · Previously at IIFL / LivLong
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5 glow-primary"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-secondary transition-all hover:-translate-y-0.5"
            >
              <Download size={16} /> Resume
            </a>
          </div>
          <div className="flex items-center justify-center gap-5 mt-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/50 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/50 hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="mailto:pratham@example.com" className="text-muted-foreground/50 hover:text-primary transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Tech Marquee */}
    <TechMarquee />

    {/* Impact Metrics */}
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-primary font-medium text-xs tracking-widest uppercase mb-3 text-center">Proven Results</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center font-display">Impact That Speaks</h2>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <CountUpStat end={45} suffix="%" label="Faster Fault Detection" />
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <CountUpStat end={60} suffix="%" label="Less Manual Reporting" />
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <CountUpStat end={1} suffix="M+" label="Customers Impacted" />
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <CountUpStat end={85} suffix="%" label="Task Completion Rate" />
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Selected Work */}
    <section id="work" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-primary font-medium text-xs tracking-widest uppercase mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 font-display">Case Studies</h2>
        </ScrollFadeIn>

        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <ScrollFadeIn key={p.title} delay={i * 0.1}>
              <Link to={p.to}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-primary/5 cursor-pointer"
                >
                  <div className={`w-full h-64 md:h-80 bg-secondary overflow-hidden ${p.imageFirst ? "md:order-1" : "md:order-2"}`}>
                    <img src={p.preview} alt={`${p.title} preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className={`flex flex-col justify-center p-8 md:p-12 ${p.imageFirst ? "md:order-2" : "md:order-1"}`}>
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2 font-display">{p.title}</h3>
                    <p className="text-muted-foreground font-medium mb-3 text-sm">{p.subtitle}</p>
                    <p className="text-muted-foreground/70 text-sm leading-relaxed mb-6">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Services Bento Grid */}
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-primary font-medium text-xs tracking-widest uppercase mb-3 text-center">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center font-display">Core Capabilities</h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ScrollFadeIn key={s.title} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2 font-display">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Experience Timeline */}
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <p className="text-primary font-medium text-xs tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 font-display">Experience</h2>
        </ScrollFadeIn>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          {timeline.map((t, i) => (
            <ScrollFadeIn key={t.year} delay={i * 0.1}>
              <div className="flex items-start gap-8 mb-12 pl-12 relative">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <t.icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-primary font-mono-metric mb-1 tracking-wider">{t.year}</p>
                  <h3 className="font-bold mb-1 font-display">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default Index;
