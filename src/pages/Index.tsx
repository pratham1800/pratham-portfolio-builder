import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Download, ArrowUpRight, Briefcase, GraduationCap, Code2 } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GharSeva",
    subtitle: "A managed marketplace for India's domestic help market — building trust infrastructure from scratch.",
    tags: ["Marketplace", "Trust", "B2C"],
    to: "/gharseva",
    num: "01",
  },
  {
    title: "Zepto",
    subtitle: "Improving transparency and trust for perishable goods in quick-commerce.",
    tags: ["UX Research", "Quick-Commerce"],
    to: "/zepto",
    num: "02",
  },
  {
    title: "Livlong",
    subtitle: "Migrating wallet systems to microservices for scale in healthcare fintech.",
    tags: ["FinTech", "System Design"],
    to: null,
    num: "03",
  },
];

const skills = [
  { num: "01", title: "Discovery", desc: "Research, personas, pain-point mapping, and JTBD frameworks to uncover real needs." },
  { num: "02", title: "Execution", desc: "System design, API logic, and cross-functional alignment to ship with precision." },
  { num: "03", title: "Strategy", desc: "Market sizing, unit economics, GTM strategy, and identifying growth levers." },
];

const timeline = [
  { year: "2024", role: "Product Manager", company: "Paragon", desc: "Leading IoT product development for industrial automation.", icon: Briefcase },
  { year: "2023", role: "Software Engineer", company: "LivLong / IIFL", desc: "Built healthcare fintech features, migrated wallet to microservices.", icon: Code2 },
  { year: "2022", role: "B.Tech — CSE", company: "JIIT Noida", desc: "Computer Science Engineering.", icon: GraduationCap },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const Index = () => (
  <main className="pt-16">
    {/* ─── Hero ─── */}
    <section className="min-h-[92vh] flex items-center px-6 relative overflow-hidden bg-noir">
      {/* Subtle warm grain overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
      
      {/* Accent orb */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[120px] animate-subtle-float" />
      <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <ScrollFadeIn>
          <p className="font-body text-cream-muted text-sm tracking-[0.2em] uppercase mb-6">
            <Typewriter />
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-cream leading-[1] mb-8">
            Pratham<br />
            Maheshwari<span className="text-primary">.</span>
          </h1>
          <div className="accent-line mb-8" />
          <p className="font-body text-cream-muted text-base sm:text-lg max-w-xl mb-4 leading-relaxed">
            I build products that bridge the gap between human needs and digital solutions.
          </p>
          <p className="font-body text-[hsl(25_8%_40%)] text-sm max-w-xl mb-12 leading-relaxed">
            Software Engineer turned Product Manager. Currently obsessed with organized
            marketplaces and trust-infrastructure in Tier 2 India.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={16} /> Resume
            </a>
            <div className="flex items-center gap-1 ml-2">
              {[
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "mailto:pratham@example.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-cream-muted hover:text-primary transition-colors p-2.5"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* ─── Work ─── */}
    <section id="work" className="px-6 py-20 sm:py-28 bg-noir">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">Selected Work</p>
          <h2 className="font-display text-4xl md:text-6xl text-cream mb-16">Case Studies</h2>
        </ScrollFadeIn>

        <motion.div
          className="space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((p) => {
            const content = (
              <motion.div
                variants={fadeUp}
                whileHover={p.to ? { x: 8 } : {}}
                className={`group relative border-t editorial-border py-8 sm:py-10 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 transition-all ${
                  p.to ? "cursor-pointer" : "opacity-50"
                }`}
              >
                <span className="font-mono-metric text-primary/40 text-sm shrink-0 mt-1">{p.num}</span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-cream mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-body text-cream-muted text-sm leading-relaxed max-w-lg">{p.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span key={t} className="font-body text-xs px-3 py-1 rounded-full border editorial-border text-cream-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {p.to && (
                  <ArrowUpRight
                    size={20}
                    className="text-cream-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-2"
                  />
                )}
              </motion.div>
            );

            return p.to ? (
              <Link key={p.title} to={p.to}>{content}</Link>
            ) : (
              <div key={p.title}>{content}</div>
            );
          })}
          <div className="border-t editorial-border" />
        </motion.div>
      </div>
    </section>

    {/* ─── About / How I Think ─── */}
    <section id="about" className="px-6 py-20 sm:py-28 bg-cream">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">Approach</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-16">How I Think</h2>
        </ScrollFadeIn>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="relative group"
            >
              <span className="font-display text-[6rem] leading-none text-primary/[0.07] absolute -top-6 -left-2 select-none pointer-events-none">
                {s.num}
              </span>
              <div className="relative pt-8">
                <div className="accent-line mb-6" />
                <h3 className="font-display text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ─── Metrics ─── */}
    <section className="px-6 py-20 sm:py-24 bg-noir relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
      <div className="max-w-5xl mx-auto relative z-10">
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

    {/* ─── Experience ─── */}
    <section id="experience" className="px-6 py-20 sm:py-28 bg-cream">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-16">Experience</h2>
        </ScrollFadeIn>
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <ScrollFadeIn key={t.year} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex items-start gap-6 py-8 border-t border-border"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <t.icon size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                    <h3 className="font-display text-xl text-foreground">{t.role}</h3>
                    <span className="font-body text-sm text-muted-foreground">— {t.company}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
                <span className="font-mono-metric text-xs text-primary/50 shrink-0 mt-1">{t.year}</span>
              </motion.div>
            </ScrollFadeIn>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default Index;
