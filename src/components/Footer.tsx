import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative section-dark py-16 px-6">
    {/* Top gradient border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(168_80%_50%)] to-transparent" />
    
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold mb-4 text-white">
        Let's Talk
      </h2>
      <p className="text-[hsl(220_10%_55%)] mb-8">
        Got a product problem worth solving? I'd love to hear about it.
      </p>
      <a
        href="mailto:pratham@example.com"
        className="inline-block w-full sm:w-auto gradient-btn px-8 py-3 rounded-xl font-semibold mb-10"
      >
        pratham@example.com
      </a>
      <div className="flex items-center justify-center gap-6 mb-8">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(220_10%_40%)] hover:text-[hsl(168_80%_50%)] hover:bg-[hsl(168_80%_50%/0.1)] transition-all p-2.5 rounded-xl" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(220_10%_40%)] hover:text-[hsl(168_80%_50%)] hover:bg-[hsl(168_80%_50%/0.1)] transition-all p-2.5 rounded-xl" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="mailto:pratham@example.com" className="text-[hsl(220_10%_40%)] hover:text-[hsl(168_80%_50%)] hover:bg-[hsl(168_80%_50%/0.1)] transition-all p-2.5 rounded-xl" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-xs text-[hsl(220_10%_30%)]">Built with React + Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;
