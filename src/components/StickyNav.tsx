import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isCaseStudy = location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = isCaseStudy
    ? [{ label: "← Back to Portfolio", to: "/" }]
    : [
        { label: "Home", to: "/" },
        { label: "Work", to: "/#work" },
        { label: "About", to: "/#about" },
      ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-border/50 shadow-[0_4px_30px_hsl(var(--background)/0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            PM
          </motion.span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          {!isCaseStudy && (
            <motion.a
              href="mailto:pratham@example.com"
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Talk
            </motion.a>
          )}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center">
                  {l.label}
                </Link>
              ))}
              {!isCaseStudy && (
                <a
                  href="mailto:pratham@example.com"
                  className="text-sm font-medium bg-primary text-primary-foreground px-4 py-3 rounded-full text-center"
                >
                  Let's Talk
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default StickyNav;
