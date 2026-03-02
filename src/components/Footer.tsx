import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-primary font-medium text-xs tracking-widest uppercase mb-4">Get In Touch</p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
        Let's Build Something Great
      </h2>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto">
        Got a product problem worth solving? I'd love to hear about it.
      </p>
      <a
        href="mailto:pratham@example.com"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all glow-primary mb-12"
      >
        pratham@example.com <ArrowUpRight size={16} />
      </a>
      <div className="flex items-center justify-center gap-6 mb-10">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/50 hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/50 hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="mailto:pratham@example.com" className="text-muted-foreground/50 hover:text-primary transition-colors" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground/40">© 2024 Pratham Maheshwari · Built with React + Tailwind</p>
    </div>
  </footer>
);

export default Footer;
