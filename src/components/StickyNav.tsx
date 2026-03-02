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
    ? [{ label: "← Back to Portfolio", to: "/" }]
    : [
        { label: "Home", to: "/" },
        { label: "Work", to: "/#work" },
        { label: "About", to: "/#about" },
      ];

  // On home page at top: transparent with light text over dark hero
  // Scrolled or case study: glass background
  const atHeroDark = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-sm"
          : atHeroDark
            ? "bg-transparent"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className={`font-bold text-xl tracking-tight transition-colors ${atHeroDark ? "text-white" : ""}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
          PM
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={`text-sm font-medium transition-colors ${atHeroDark ? "text-slate-300 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}>
              {l.label}
            </Link>
          ))}
          {!isCaseStudy && (
            <a
              href="mailto:pratham@example.com"
              className="text-sm font-medium gradient-btn text-white px-4 py-2 rounded-lg"
            >
              Let's Talk
            </a>
          )}
        </nav>

        {/* Mobile toggle */}
        <button className={`md:hidden p-2 ${atHeroDark ? "text-white" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
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
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 min-h-[44px] flex items-center">
                  {l.label}
                </Link>
              ))}
              {!isCaseStudy && (
                <a
                  href="mailto:pratham@example.com"
                  className="text-sm font-medium gradient-btn text-white px-4 py-2 rounded-lg text-center"
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
