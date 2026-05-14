import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Feather } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/books", label: "All Books" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500",
          scrolled
            ? "glass-dark mx-4 rounded-full px-5 py-2 md:mx-auto md:max-w-5xl"
            : "",
        )}
      >
        <Link to="/" className="group flex items-center gap-2">
          <Feather className="size-5 text-[var(--gold)] transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-display text-lg tracking-[0.25em] text-gradient-gold">
            MABEL QUILL
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-xs font-medium uppercase tracking-[0.2em] text-[var(--ivory)]/80 transition-colors hover:text-[var(--gold)]"
              activeProps={{ className: "text-[var(--gold)]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-[var(--gold)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 glass-dark rounded-2xl p-6 animate-fade-up">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-[var(--ivory)]/80 hover:text-[var(--gold)]"
                activeProps={{ className: "text-[var(--gold)]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
