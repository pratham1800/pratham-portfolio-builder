import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative bg-background py-20 px-6 overflow-hidden">
    {/* Top gradient border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

    {/* Background glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />

    <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.p
        className="font-mono-metric text-xs text-primary uppercase tracking-[0.3em] mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.p>
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Let's Build{" "}
        <span className="gradient-text">Something</span>
      </motion.h2>
      <motion.p
        className="text-muted-foreground mb-10 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Got a product problem worth solving? I'd love to hear about it.
      </motion.p>
      <motion.a
        href="mailto:pratham@example.com"
        className="inline-flex items-center gap-2 gradient-btn px-8 py-4 rounded-2xl font-bold text-lg mb-12"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Say Hello <ArrowUpRight size={18} />
      </motion.a>
      <div className="flex items-center justify-center gap-4 mb-10">
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
            className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_-4px_hsl(105_100%_54%/0.3)] transition-all duration-300"
            aria-label={label}
            whileHover={{ y: -4 }}
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
      <p className="text-xs text-muted-foreground/50 font-mono-metric">
        © 2024 · Designed & Built by Pratham
      </p>
    </div>
  </footer>
);

export default Footer;
