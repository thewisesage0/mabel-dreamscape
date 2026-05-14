import { Link } from "@tanstack/react-router";
import { Feather, Instagram, Twitter, Facebook, BookOpen } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-[var(--gold)]/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.32_0.14_18/0.4),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Feather className="size-5 text-[var(--gold)]" />
              <span className="font-display text-xl tracking-[0.25em] text-gradient-gold">
                MABEL QUILL
              </span>
            </div>
            <p className="mt-4 max-w-md font-serif text-lg italic text-[var(--ivory)]/70">
              "Where every page burns, and every love story leaves a scar."
            </p>
            <form onSubmit={subscribe} className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Join the inner circle..."
                className="w-full rounded-full border border-[var(--gold)]/30 bg-black/40 px-4 py-2 text-sm text-[var(--ivory)] placeholder:text-[var(--ivory)]/40 focus:border-[var(--gold)] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--background)] transition-all hover:shadow-glow"
              >
                Join
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-sm text-[var(--gold)] animate-fade-up">
                ✦ Welcome to the coven. Check your inbox.
              </p>
            )}
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.25em] text-[var(--gold)]">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--ivory)]/70">
              <li><Link to="/" className="hover:text-[var(--gold)]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[var(--gold)]">About</Link></li>
              <li><Link to="/books" className="hover:text-[var(--gold)]">All Books</Link></li>
              <li><Link to="/reviews" className="hover:text-[var(--gold)]">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.25em] text-[var(--gold)]">
              Follow
            </h4>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: BookOpen, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="grid size-10 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--ivory)]/80 transition-all hover:border-[var(--gold)] hover:text-[var(--gold)] hover:shadow-glow"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mt-16" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-[var(--ivory)]/50 md:flex-row">
          <p>© {new Date().getFullYear()} Mabel Quill Hub. All rights reserved.</p>
          <p className="font-serif italic tracking-wider">
            Designed by{" "}
            <span className="text-gradient-gold font-semibold not-italic">
              Zenthros Cover and Design / Ascendify
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
