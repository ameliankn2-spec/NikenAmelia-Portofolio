import { Link, useLocation } from "wouter";
import { ReactNode, useState } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

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

          <nav className="hidden md:flex gap-8" data-testid="nav-desktop">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm tracking-wide relative py-1 overflow-hidden group transition-opacity ${
                  location === link.href
                    ? "text-white opacity-100"
                    : "text-white/60 hover:text-white hover:opacity-100"
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
            className="md:hidden flex flex-col gap-[5px] p-2 group"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[#00ff9d] transition-transform duration-300 origin-center ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#00ff9d] transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#00ff9d] transition-transform duration-300 origin-center ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-6 py-6 flex flex-col gap-5"
            data-testid="nav-mobile"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className={`text-base tracking-wide transition-opacity ${
                  location === link.href
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
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
              data-testid="link-instagram"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/evan-kosowski-20a32026"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
              data-testid="link-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
