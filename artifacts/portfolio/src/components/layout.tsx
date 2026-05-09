import { Link, useLocation } from "wouter";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [navVisible, setNavVisible] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/more-work", label: "More Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

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

          <div
            className="flex items-center gap-8 cursor-pointer"
            onMouseEnter={() => setNavVisible(true)}
            onMouseLeave={() => setNavVisible(false)}
            onClick={() => setNavVisible((v) => !v)}
            data-testid="nav-hover-zone"
          >
            <div className="flex items-center gap-8 overflow-hidden">
              <AnimatePresence>
                {navVisible && links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{
                      duration: 0.35,
                      delay: (links.length - 1 - i) * 0.055,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <Link
                      href={link.href}
                      data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => e.stopPropagation()}
                      className={`text-sm tracking-wide relative py-1 group transition-colors block ${
                        location === link.href
                          ? "text-white"
                          : "text-white/50 hover:text-white"
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
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div
              className="flex flex-col gap-[5px] p-2 flex-shrink-0"
              aria-label="Menu"
              data-testid="button-menu"
            >
              <span className="block w-6 h-[2.5px] bg-[#00ff9d]" />
              <span className="block w-6 h-[2.5px] bg-[#00ff9d]" />
              <span className="block w-6 h-[2.5px] bg-[#00ff9d]" />
            </div>
          </div>
        </div>
      </header>

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
