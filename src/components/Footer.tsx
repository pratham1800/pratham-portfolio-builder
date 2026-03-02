import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-6">
    {/* Top gradient border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
        Let's Talk
      </h2>
      <p className="text-slate-400 mb-8">
        Got a product problem worth solving? I'd love to hear about it.
      </p>
      <a
        href="mailto:pratham@example.com"
        className="inline-block w-full sm:w-auto gradient-btn text-white px-8 py-3 rounded-lg font-medium mb-10"
      >
        pratham@example.com
      </a>
      <div className="flex items-center justify-center gap-6 mb-8">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="mailto:pratham@example.com" className="text-slate-500 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-xs text-slate-600">Built with React + Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;
