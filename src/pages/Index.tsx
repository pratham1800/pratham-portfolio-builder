import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Download, ArrowRight, Search, Cpu, TrendingUp, Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GharSeva",
    subtitle: "A managed marketplace for India's domestic help market.",
    tags: ["Marketplace", "Trust Infrastructure", "B2C"],
    to: "/gharseva",
    span: "md:col-span-2",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "Zepto: Perishable Goods UX",
    subtitle: "Improving transparency and trust for high-churn grocery categories.",
    tags: ["UX Research", "Quick-Commerce"],
    to: "/zepto",
    span: "md:col-span-1",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "Livlong & Healthcare",
    subtitle: "Migrating wallet systems to microservices for scale.",
    tags: ["FinTech", "System Design"],
    to: null,
    span: "md:col-span-1",
    gradient: "from-secondary to-muted",
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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const Index = () => (
  <main className="pt-16 relative overflow-hidden">
    {/* Ambient Orbs */}
    <div className="orb orb-primary w-[500px] h-[500px] top-[-100px] left-[-150px] opacity-40" />
    <div className="orb orb-accent w-[400px] h-[400px] top-[200px] right-[-100px] opacity-30" style={{ animationDelay: "5s" }} />
    <div className="orb orb-primary w-[300px] h-[300px] bottom-[20%] left-[30%] opacity-20" style={{ animationDelay: "10s" }} />

    {/* Hero */}
    <section className="min-h-[90vh] flex items-center px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary font-mono-metric mb-6 text-sm tracking-widest uppercase"
          >
            Product Manager · Builder · Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-5xl mb-4"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pratham Maheshwari
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-3 leading-relaxed"
          >
            I'm a{" "}
            <Typewriter
              words={["Product Manager", "Problem Solver", "UX Thinker", "Builder"]}
              className="text-foreground font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-base text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Software Engineer turned Product Manager. Currently obsessed with organized marketplaces
            and trust-infrastructure in Tier 2 India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4"
          >
            {[
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com", icon: Github, label: "GitHub" },
              { href: "mailto:pratham@example.com", icon: Mail, label: "Email" },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
                aria-label={s.label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
            <motion.a
              href="#"
              className="ml-2 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} /> Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Work / Bento Grid */}
    <section id="work" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="text-primary font-mono-metric text-sm tracking-widest uppercase mb-2">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Projects I've{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">shaped</span>
          </h2>
        </ScrollFadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((p) => {
            const inner = (
              <motion.div
                variants={fadeUp}
                whileHover={p.to ? { y: -8, scale: 1.02 } : {}}
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 ${
                  p.to ? "hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)] cursor-pointer" : "opacity-70"
                } ${p.span}`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-8">
                  <div className="w-full h-40 bg-secondary/50 rounded-xl mb-6 flex items-center justify-center border border-border/50">
                    <span className="text-muted-foreground text-sm font-mono-metric">Preview</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs font-mono-metric bg-secondary text-secondary-foreground px-3 py-1 rounded-full border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.to && (
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-border bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                      <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                  )}
                </div>
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
    <section id="about" className="px-6 py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollFadeIn>
          <p className="text-primary font-mono-metric text-sm tracking-widest uppercase mb-2">Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            How I{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Think</span>
          </h2>
        </ScrollFadeIn>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon className="text-primary" size={22} />
              </div>
              <p className="text-primary font-mono-metric text-xs mb-2 tracking-wider">{s.num}</p>
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Metrics */}
    <section className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="bg-card border border-border rounded-2xl p-10 md:p-14">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp}><CountUpStat end={45} suffix="%" label="Faster Fault Detection" /></motion.div>
              <motion.div variants={fadeUp}><CountUpStat end={60} suffix="%" label="Reduction in Manual Reporting" /></motion.div>
              <motion.div variants={fadeUp}><CountUpStat end={1} suffix="M+" label="Customers Impacted" /></motion.div>
              <motion.div variants={fadeUp}><CountUpStat end={85} suffix="%" label="Task Completion Rate" /></motion.div>
            </motion.div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Experience Timeline */}
    <section className="px-6 py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollFadeIn>
          <p className="text-primary font-mono-metric text-sm tracking-widest uppercase mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
          </h2>
        </ScrollFadeIn>
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {timeline.map((t, i) => (
            <ScrollFadeIn key={t.year} delay={i * 0.15}>
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-6 md:gap-10 mb-10 pl-12 md:pl-20 relative group cursor-default"
              >
                <motion.div
                  className="absolute left-2.5 md:left-6.5 top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-[3px] border-background shadow-[0_0_12px_hsl(var(--primary)/0.5)]"
                  whileHover={{ scale: 1.5 }}
                />
                {i === 0 ? (
                  <Briefcase className="text-primary mt-0.5 shrink-0" size={20} />
                ) : i === 1 ? (
                  <Cpu className="text-primary mt-0.5 shrink-0" size={20} />
                ) : (
                  <GraduationCap className="text-primary mt-0.5 shrink-0" size={20} />
                )}
                <div>
                  <p className="text-xs text-primary font-mono-metric mb-1 tracking-wider">{t.year}</p>
                  <h3 className="font-bold mb-1 group-hover:text-primary transition-colors duration-300">{t.title}</h3>
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
