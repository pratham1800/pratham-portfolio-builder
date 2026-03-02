import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Download, ArrowRight, Search, Cpu, TrendingUp, Briefcase, GraduationCap } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import gharsevaPreview from "@/assets/gharseva-preview.png";
import zeptoPreview from "@/assets/zepto-preview.png";
import HeroScene from "@/components/HeroScene";

const projects = [
{
  title: "GharSeva",
  subtitle: "A managed marketplace for India's domestic help market.",
  description: "GharSeva connects urban Indian households with verified domestic workers through a subscription-based model built for long-term reliability. It tackles the trust deficit in India's ₹1.5L Cr unorganised domestic help market with background verification, AI-powered matching, and ongoing platform management.",
  tags: ["Marketplace", "Trust Infrastructure", "B2C"],
  to: "/gharseva",
  imageFirst: true,
  preview: gharsevaPreview
},
{
  title: "Zepto: Perishable Goods UX",
  subtitle: "Building trust infrastructure beyond the 10-minute promise.",
  description: "A deep-dive into how hidden product metadata and last-mile thermal failures drive users back to kirana stores. This case study proposes a 'Quality-First' architecture — freshness visibility, verified cold-chain, and AI-powered refunds — to protect ₹611 Cr in annual revenue at risk.",
  tags: ["UX Research", "Quick-Commerce", "Trust Systems"],
  to: "/zepto",
  imageFirst: false,
  preview: zeptoPreview
}];


const skills = [
{ num: "01", title: "User-Centric Discovery", desc: "Research, Personas, Pain-point mapping, and Jobs-to-be-Done frameworks.", icon: Search },
{ num: "02", title: "Technical Execution", desc: "System Design, API logic, Backend empathy, and cross-functional alignment.", icon: Cpu },
{ num: "03", title: "Business Strategy", desc: "Market sizing, Unit Economics, GTM strategy, and growth levers.", icon: TrendingUp }];


const timeline = [
{ year: "2024", title: "Product Manager — Paragon", desc: "Leading IoT product development for industrial automation." },
{ year: "2023", title: "Software Engineer — LivLong / IIFL", desc: "Built healthcare fintech features, migrated wallet to microservices." },
{ year: "2022", title: "B.Tech — JIIT Noida", desc: "Computer Science Engineering." }];


const Index = () =>
<main className="pt-16">
    {/* Hero */}
    <section className="min-h-[85vh] flex items-center px-6 relative overflow-hidden">
      <HeroScene />
      <div className="w-full relative z-10">
        <ScrollFadeIn>
          <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">Product Manager</p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm Pratham Maheshwari.
          </motion.h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
            I build products that bridge the gap between human needs and digital solutions.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Software Engineer turned Product Manager. Currently obsessed with organized marketplaces 
            and trust-infrastructure in Tier 2 India.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="mailto:pratham@example.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={22} />
            </a>
            <a
            href="#"
            className="ml-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5">
            
              <Download size={16} /> Download Resume
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Work / Bento Grid */}
    <section id="work" className="px-6 py-20">
      <div className="w-full">
        <ScrollFadeIn>
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        </ScrollFadeIn>

        <div className="flex flex-col gap-12">
          {projects.map((p, i) =>
        <ScrollFadeIn key={p.title} delay={i * 0.1}>
              <Link to={p.to}>
                <motion.div
              whileHover={{ y: -4 }}
              className={`group grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl border border-border bg-card p-6 md:p-8 transition-shadow hover:shadow-lg cursor-pointer`}>
              
                  {/* Image */}
                  <div className={`w-full h-56 md:h-72 bg-muted rounded-lg overflow-hidden flex items-center justify-center ${p.imageFirst ? "md:order-1" : "md:order-2"}`}>
                    <img src={p.preview} alt={`${p.title} preview`} className="w-full h-full object-cover" />
                  </div>
                  {/* Content */}
                  <div className={`flex flex-col justify-center ${p.imageFirst ? "md:order-2" : "md:order-1"}`}>
                    <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground font-medium mb-3">{p.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((t) =>
                  <span key={t} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                          {t}
                        </span>
                  )}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollFadeIn>
        )}
        </div>
      </div>
    </section>

    {/* How I Think */}
    <section id="about" className="px-6 py-20 bg-secondary/50">
      <div className="w-full">
        <ScrollFadeIn>
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How I Think</h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((s, i) =>
        <ScrollFadeIn key={s.num} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-8">
                <s.icon className="text-primary mb-4" size={28} />
                <p className="text-primary font-mono-metric text-sm mb-2">{s.num}</p>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollFadeIn>
        )}
        </div>
      </div>
    </section>

    {/* Metrics */}
    <section className="px-6 py-20">
      <div className="w-full">
        <ScrollFadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUpStat end={45} suffix="%" label="Faster Fault Detection" />
            <CountUpStat end={60} suffix="%" label="Reduction in Manual Reporting" />
            <CountUpStat end={1} suffix="M+" label="Customers Impacted" />
            <CountUpStat end={85} suffix="%" label="Task Completion Rate" />
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Experience Timeline */}
    <section className="px-6 py-20 bg-secondary/50">
      <div className="w-full">
        <ScrollFadeIn>
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        </ScrollFadeIn>
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />
          {timeline.map((t, i) =>
        <ScrollFadeIn key={t.year} delay={i * 0.1}>
              <div className="flex items-start gap-6 md:gap-10 mb-10 pl-10 md:pl-20 relative">
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                {i === 0 ? <Briefcase className="text-primary mt-0.5 shrink-0" size={20} /> : i === 1 ? <Cpu className="text-primary mt-0.5 shrink-0" size={20} /> : <GraduationCap className="text-primary mt-0.5 shrink-0" size={20} />}
                <div>
                  <p className="text-xs text-primary font-mono-metric mb-1">{t.year}</p>
                  <h3 className="font-bold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            </ScrollFadeIn>
        )}
        </div>
      </div>
    </section>

    <Footer />
  </main>;


export default Index;