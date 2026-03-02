import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isCaseStudy = location.pathname !== "/";
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = isCaseStudy
    ? [{ label: "← Back", to: "/" }]
    : [
        { label: "Work", to: "/#work" },
        { label: "About", to: "/#about" },
        { label: "Experience", to: "/#experience" },
      ];

  const atHeroDark = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tight transition-colors">
          <span className={atHeroDark ? "text-cream" : "text-foreground"}>P</span>
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium font-body tracking-wide uppercase transition-colors ${
                atHeroDark
                  ? "text-cream-muted hover:text-cream"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {!isCaseStudy && (
            <a
              href="mailto:pratham@example.com"
              className="text-sm font-semibold font-body px-5 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Contact
            </a>
          )}
        </nav>

        <button
          className={`md:hidden p-2 ${atHeroDark ? "text-cream" : "text-foreground"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm font-medium font-body uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors py-3"
                >
                  {l.label}
                </Link>
              ))}
              {!isCaseStudy && (
                <a
                  href="mailto:pratham@example.com"
                  className="text-sm font-semibold font-body px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-center mt-2"
                >
                  Contact
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
