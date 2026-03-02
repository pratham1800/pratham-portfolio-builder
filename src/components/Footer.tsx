import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-noir py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <p className="text-cream-muted text-sm font-body uppercase tracking-widest mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-cream leading-tight">
            Let's build<br />
            something <span className="text-primary italic">great.</span>
          </h2>
        </div>
        <div className="md:text-right">
          <a
            href="mailto:pratham@example.com"
            className="inline-flex items-center gap-2 text-cream hover:text-primary transition-colors font-body text-lg group"
          >
            pratham@example.com
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[hsl(20_8%_25%)] to-transparent mb-8" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cream-muted hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cream-muted hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="mailto:pratham@example.com" className="text-cream-muted hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-cream-muted font-body">© 2024 Pratham Maheshwari</p>
      </div>
    </div>
  </footer>
);

export default Footer;
