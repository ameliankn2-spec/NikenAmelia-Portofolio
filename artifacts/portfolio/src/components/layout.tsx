import { Link, useLocation } from "wouter";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [hovered, setHovered] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Proyek" },
    { href: "/more-work", label: "Karya Lain" },
    { href: "/about", label: "Tentang" },
    { href: "/contact", label: "Kontak" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-foreground selection:text-background">
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-end pr-6 sm:pr-10 pointer-events-none">
        <div
          className="pointer-events-auto flex items-center gap-3 px-3 py-2 rounded-full border border-white/10 shadow-2xl"
          style={{ background: "rgba(20,20,20,0.92)", backdropFilter: "blur(16px)" }}
          data-testid="nav-container"
        >
          <div
            className="flex items-center overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-testid="nav-hover-zone"
          >
            <AnimatePresence mode="popLayout">
              {hovered && (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, x: 30, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: 20, width: 0 }}
                  transition={{ duration: 0.32, delay: links.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 pr-2"
                >
                  <Link
                    href="/"
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-white text-xs font-semibold tracking-wider hover:border-white transition-colors select-none"
                    data-testid="link-logo"
                  >
                    na
                  </Link>
                </motion.div>
              )}

              {hovered && links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: 20, width: 0 }}
                  transition={{
                    duration: 0.32,
                    delay: (links.length - 1 - i) * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex-shrink-0"
                >
                  <Link
                    href={link.href}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`text-sm tracking-wide relative py-1 px-3 group transition-colors whitespace-nowrap block ${
                      location === link.href
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-3 right-3 bottom-0 h-[1px] bg-white transform origin-left transition-transform duration-300 ${
                        location === link.href
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>

            <div
              className="flex flex-col gap-[5px] p-2 flex-shrink-0 cursor-pointer"
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
              href="mailto:ameliankn2@gmail.com"
              className="hover:opacity-100 transition-opacity"
              data-testid="link-footer-email"
            >
              Email
            </a>
            <a
              href="tel:+6208783597232"
              className="hover:opacity-100 transition-opacity"
              data-testid="link-footer-phone"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
