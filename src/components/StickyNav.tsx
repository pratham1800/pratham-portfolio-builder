import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCaseStudy = location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const scrollToHash = useCallback((hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleNavClick = useCallback(
    (to: string) => (e: React.MouseEvent) => {
      if (to === "/") {
        if (location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else if (to.startsWith("/#")) {
        e.preventDefault();
        const hash = to.replace("/", "");
        if (location.pathname === "/") {
          scrollToHash(hash);
        } else {
          navigate("/");
          setTimeout(() => scrollToHash(hash), 100);
        }
      }
    },
    [location.pathname, navigate, scrollToHash]
  );

  const navLinks = isCaseStudy
    ? [{ label: "← Back to Portfolio", to: "/" }]
    : [
        { label: "Home", to: "/" },
        { label: "Work", to: "/#work" },
        { label: "About", to: "/#about" },
      ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl tracking-tight font-display">
          PM
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={handleNavClick(l.to)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          {!isCaseStudy && (
            <span
              className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-lg cursor-default"
            >
              prathammaheshwari018@gmail.com
            </span>
          )}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
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
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={handleNavClick(l.to)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              {!isCaseStudy && (
                <span
                  className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-lg text-center cursor-default"
                >
                  prathammaheshwari018@gmail.com
                </span>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default StickyNav;
