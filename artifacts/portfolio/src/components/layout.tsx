import { Link, useLocation } from "wouter";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/more-work", label: "More Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-foreground selection:text-background">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 flex h-24 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity">
            Niken Amelia
          </Link>
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide relative py-1 overflow-hidden group ${
                  location === link.href ? "opacity-100" : "opacity-60 hover:opacity-100 transition-opacity"
                }`}
              >
                {link.label}
                <span 
                  className={`absolute left-0 bottom-0 w-full h-[1px] bg-foreground transform origin-left transition-transform duration-300 ${
                    location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} 
                />
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 pb-32">
        {children}
      </main>
      <footer className="w-full border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 flex justify-between items-center text-sm opacity-60">
          <span>&copy; {new Date().getFullYear()} Niken Amelia</span>
          <div className="flex gap-6">
            <a href="https://instagram.com/evanwilliamk" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="https://linkedin.com/in/evan-kosowski-20a32026" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
