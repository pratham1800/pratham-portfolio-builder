import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
        Let's Talk
      </h2>
      <p className="text-muted-foreground mb-8">
        Got a product problem worth solving? I'd love to hear about it.
      </p>
      <a
        href="mailto:pratham@example.com"
        className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-10"
      >
        pratham@example.com
      </a>
      <div className="flex items-center justify-center gap-6 mb-8">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="mailto:pratham@example.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">Built with React + Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;
