import { Link, useLocation } from "wouter";
import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/more-work", label: "More Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-foreground selection:text-background">
      <header className="sticky top-0 z-50 w-full bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-white text-sm font-semibold tracking-wider hover:border-white transition-colors select-none"
            data-testid="link-logo"
          >
            na
          </Link>

          <div className="flex items-center gap-10">
            <nav className="hidden md:flex gap-8" data-testid="nav-desktop">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-sm tracking-wide relative py-1 overflow-hidden group transition-colors ${
                    location === link.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ${
                      location === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <button
              className="flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              data-testid="button-menu"
            >
              <span
                className={`block w-6 h-[2.5px] bg-[#00ff9d] transition-transform duration-300 origin-center ${
                  menuOpen ? "translate-y-[7.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2.5px] bg-[#00ff9d] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2.5px] bg-[#00ff9d] transition-transform duration-300 origin-center ${
                  menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#111111] flex flex-col items-center justify-center"
            data-testid="nav-overlay"
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    data-testid={`link-overlay-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight transition-opacity ${
                      location === link.href
                        ? "text-white"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full overflow-x-hidden">
        {children}
      </main>

      <footer className="w-full border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 flex justify-between items-center text-sm opacity-60">
          <span>&copy; {new Date().getFullYear()} Niken Amelia</span>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/evanwilliamk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
              data-testid="link-footer-instagram"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/evan-kosowski-20a32026"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
              data-testid="link-footer-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
