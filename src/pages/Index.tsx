import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Download, ArrowRight, Search, Cpu, TrendingUp, Briefcase, GraduationCap, Zap } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
import { motion } from "framer-motion";

const tagColors: Record<string, string> = {
  Marketplace: "bg-[hsl(168_80%_50%/0.12)] text-[hsl(168_80%_60%)] border border-[hsl(168_80%_50%/0.25)]",
  "Trust Infrastructure": "bg-[hsl(168_80%_50%/0.08)] text-[hsl(168_80%_55%)] border border-[hsl(168_80%_50%/0.2)]",
  B2C: "bg-[hsl(280_85%_65%/0.12)] text-[hsl(280_85%_72%)] border border-[hsl(280_85%_65%/0.25)]",
  "UX Research": "bg-[hsl(200_90%_55%/0.12)] text-[hsl(200_90%_65%)] border border-[hsl(200_90%_55%/0.25)]",
  "Quick-Commerce": "bg-[hsl(45_90%_55%/0.12)] text-[hsl(45_90%_55%)] border border-[hsl(45_90%_55%/0.25)]",
  FinTech: "bg-[hsl(150_70%_50%/0.12)] text-[hsl(150_70%_55%)] border border-[hsl(150_70%_50%/0.25)]",
  "System Design": "bg-[hsl(280_85%_65%/0.1)] text-[hsl(280_85%_70%)] border border-[hsl(280_85%_65%/0.2)]",
};

const projects = [
  {
    title: "GharSeva",
    subtitle: "A managed marketplace for India's domestic help market.",
    tags: ["Marketplace", "Trust Infrastructure", "B2C"],
    to: "/gharseva",
    span: "md:col-span-2",
    gradient: "from-[hsl(168_80%_50%/0.15)] via-[hsl(200_90%_55%/0.1)] to-[hsl(280_85%_65%/0.1)]",
  },
  {
    title: "Zepto: Perishable Goods UX",
    subtitle: "Improving transparency and trust for high-churn grocery categories.",
    tags: ["UX Research", "Quick-Commerce"],
    to: "/zepto",
    span: "md:col-span-1",
    gradient: "from-[hsl(200_90%_55%/0.15)] via-[hsl(220_80%_60%/0.1)] to-[hsl(168_80%_50%/0.08)]",
  },
  {
    title: "Livlong & Healthcare",
    subtitle: "Migrating wallet systems to microservices for scale.",
    tags: ["FinTech", "System Design"],
    to: null,
    span: "md:col-span-1",
    gradient: "from-[hsl(150_70%_50%/0.12)] via-[hsl(168_80%_50%/0.08)] to-[hsl(280_85%_65%/0.08)]",
  },
];

const iconGradients = [
  "from-[hsl(168_80%_50%)] to-[hsl(200_90%_55%)]",
  "from-[hsl(200_90%_55%)] to-[hsl(280_85%_65%)]",
  "from-[hsl(45_90%_55%)] to-[hsl(25_90%_55%)]",
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
  show: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Index = () => (
  <main className="pt-16">
    {/* Hero — Dark electric */}
    <section className="min-h-[90vh] flex items-center px-4 sm:px-6 relative overflow-hidden section-dark">
      <div className="absolute inset-0 hero-grid-pattern" />

      {/* Neon mesh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[hsl(168_80%_50%/0.08)] -top-60 -right-60 blur-[100px] animate-float" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[hsl(280_85%_65%/0.06)] bottom-0 -left-40 blur-[80px] animate-float-delayed" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[hsl(200_90%_55%/0.06)] top-1/3 left-1/3 blur-[60px] animate-[pulse_12s_ease-in-out_infinite_2s]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <ScrollFadeIn>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(168_80%_50%/0.3)] bg-[hsl(168_80%_50%/0.08)] mb-6"
          >
            <Zap size={14} className="text-[hsl(168_80%_50%)]" />
            <span className="text-[hsl(168_80%_55%)] font-medium text-sm tracking-wide uppercase">
              <Typewriter />
            </span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl mb-6 text-white">
            Hi, I'm{" "}
            <span className="gradient-text">Pratham</span>{" "}
            Maheshwari.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[hsl(220_15%_70%)] max-w-2xl mb-4 leading-relaxed">
            I build products that bridge the gap between human needs and digital solutions.
          </p>
          <p className="text-sm sm:text-base text-[hsl(220_10%_55%)] max-w-2xl mb-10 leading-relaxed">
            Software Engineer turned Product Manager. Currently obsessed with organized marketplaces 
            and trust-infrastructure in Tier 2 India.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(220_10%_50%)] hover:text-[hsl(168_80%_50%)] hover:bg-[hsl(168_80%_50%/0.1)] transition-all p-2.5 rounded-xl" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(220_10%_50%)] hover:text-[hsl(168_80%_50%)] hover:bg-[hsl(168_80%_50%/0.1)] transition-all p-2.5 rounded-xl" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="mailto:pratham@example.com" className="text-[hsl(220_10%_50%)] hover:text-[hsl(168_80%_50%)] hover:bg-[hsl(168_80%_50%/0.1)] transition-all p-2.5 rounded-xl" aria-label="Email">
              <Mail size={22} />
            </a>
            <a
              href="#"
              className="ml-2 sm:ml-4 inline-flex items-center gap-2 gradient-btn px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Work / Bento Grid */}
    <section id="work" className="px-4 sm:px-6 py-16 sm:py-24 section-dark">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="gradient-text font-semibold text-sm tracking-wide uppercase mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-14 text-white">Projects</h2>
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
                whileHover={p.to ? { y: -8, scale: 1.02 } : {}}
                className={`group relative rounded-2xl border border-[hsl(220_15%_20%)] bg-[hsl(225_20%_10%)] p-6 sm:p-8 transition-all duration-300 ${
                  p.to ? "hover:border-[hsl(168_80%_50%/0.4)] cursor-pointer hover:shadow-[0_0_40px_-10px_hsl(168_80%_50%/0.2)]" : "opacity-70"
                } ${p.span}`}
              >
                {p.to && (
                  <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[hsl(168_80%_50%)] to-[hsl(280_85%_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <div className={`w-full h-32 sm:h-40 bg-gradient-to-br ${p.gradient} rounded-xl mb-6 flex items-center justify-center border border-[hsl(220_15%_18%)]`}>
                  <span className="text-[hsl(220_10%_40%)] text-sm font-medium">Project Preview</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{p.title}</h3>
                <p className="text-[hsl(220_10%_55%)] text-sm mb-4">{p.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[t] || "bg-secondary text-secondary-foreground"}`}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.to && (
                  <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity text-[hsl(168_80%_50%)]">
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
    <section id="about" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="gradient-text font-semibold text-sm tracking-wide uppercase mb-3">Approach</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-14">How I Think</h2>
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
              whileHover={{ y: -6, boxShadow: "0 0 30px -8px hsl(168 80% 50% / 0.2)" }}
              className="bg-card rounded-2xl border border-border p-6 sm:p-8 transition-all hover:border-[hsl(168_80%_50%/0.3)] relative overflow-hidden"
            >
              <span className="absolute -top-6 -right-3 text-[7rem] font-extrabold text-muted/20 select-none pointer-events-none font-mono-metric leading-none">
                {s.num}
              </span>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${iconGradients[i]} flex items-center justify-center mb-5 shadow-lg`}>
                <s.icon className="text-white" size={22} />
              </div>
              <p className="gradient-text font-mono-metric text-sm mb-2 font-bold">{s.num}</p>
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Metrics — Dark electric band */}
    <section className="px-4 sm:px-6 py-16 sm:py-20 section-dark relative overflow-hidden">
      <div className="absolute inset-0 hero-grid-pattern opacity-40" />
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[hsl(168_80%_50%/0.06)] blur-[80px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-[hsl(280_85%_65%/0.05)] blur-[60px] rounded-full" />
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
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <p className="gradient-text font-semibold text-sm tracking-wide uppercase mb-3">Background</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-14">Experience</h2>
        </ScrollFadeIn>
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(168_80%_50%)] via-[hsl(280_85%_65%)] to-[hsl(168_80%_50%/0.1)]" />
          {timeline.map((t, i) => (
            <ScrollFadeIn key={t.year} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-12 pl-10 md:pl-20 relative"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[hsl(168_80%_50%)] to-[hsl(280_85%_65%)] border-2 border-background animate-pulse-glow" />
                {i === 0 ? <Briefcase className="text-[hsl(168_80%_50%)] mt-0.5 shrink-0" size={20} /> : i === 1 ? <Cpu className="text-[hsl(280_85%_65%)] mt-0.5 shrink-0" size={20} /> : <GraduationCap className="text-[hsl(45_90%_55%)] mt-0.5 shrink-0" size={20} />}
                <div className="border-l-2 border-[hsl(168_80%_50%/0.15)] pl-4">
                  <p className="text-xs gradient-text font-mono-metric mb-1 font-bold">{t.year}</p>
                  <h3 className="font-bold mb-1 text-lg">{t.title}</h3>
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
