import { Link, useLocation } from "wouter";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [hovered, setHovered] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/more-work", label: "More Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-foreground selection:text-background">
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div
          className="pointer-events-auto flex items-center gap-6 px-4 py-2 rounded-full border border-white/10 shadow-2xl"
          style={{ background: "rgba(20,20,20,0.92)", backdropFilter: "blur(16px)" }}
          data-testid="nav-container"
        >
          <Link
            href="/"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-white text-xs font-semibold tracking-wider hover:border-white transition-colors select-none flex-shrink-0"
            data-testid="link-logo"
          >
            na
          </Link>

          <nav className="flex items-center gap-6" data-testid="nav-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm tracking-wide relative py-1 group transition-colors whitespace-nowrap ${
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
            ))}
          </nav>

          <div
            className="flex items-center gap-4 flex-shrink-0"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-testid="nav-hover-zone"
          >
            <AnimatePresence>
              {hovered && links.map((link, i) => (
                <motion.div
                  key={`hover-${link.href}`}
                  initial={{ opacity: 0, x: 32, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: 32, width: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (links.length - 1 - i) * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                >
                  <Link
                    href={link.href}
                    data-testid={`link-hover-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`text-sm tracking-wide relative py-1 group block px-1 transition-colors ${
                      location === link.href
                        ? "text-[#00ff9d]"
                        : "text-[#00ff9d]/50 hover:text-[#00ff9d]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-1 right-1 bottom-0 h-[1px] bg-[#00ff9d] transform origin-left transition-transform duration-300 ${
                        location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>

            <div
              className="flex flex-col gap-[5px] p-1 flex-shrink-0 cursor-pointer"
              aria-label="Menu"
              data-testid="button-menu"
            >
              <span className="block w-5 h-[2px] bg-[#00ff9d]" />
              <span className="block w-5 h-[2px] bg-[#00ff9d]" />
              <span className="block w-5 h-[2px] bg-[#00ff9d]" />
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
