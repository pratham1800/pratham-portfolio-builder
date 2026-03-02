import { Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ScrollFadeIn from "./ScrollFadeIn";

const Footer = () => (
  <footer className="border-t border-border py-20 px-6 relative overflow-hidden">
    <div className="orb orb-primary w-[300px] h-[300px] bottom-[-100px] right-[-50px] opacity-20" />
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <ScrollFadeIn>
        <p className="text-primary font-mono-metric text-sm tracking-widest uppercase mb-4">Get in Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Talk</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Got a product problem worth solving? I'd love to hear about it.
        </p>
        <motion.a
          href="mailto:pratham@example.com"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 mb-10"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          pratham@example.com
        </motion.a>
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "mailto:pratham@example.com", icon: Mail, label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label={s.label}
              whileHover={{ scale: 1.15 }}
            >
              <s.icon size={18} />
            </motion.a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Built with React + Tailwind CSS</p>
      </ScrollFadeIn>
    </div>
  </footer>
);

export default Footer;
