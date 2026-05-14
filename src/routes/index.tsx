import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { books } from "@/lib/books";
import { BookCard } from "@/components/BookCard";
import { PlatformButtons } from "@/components/PlatformButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mabel Quill Hub — Bestselling Romance & Fantasy Author" },
      { name: "description", content: "Enter the cinematic universe of Mabel Quill — dark romance, fantasy romance, mafia romance, and paranormal love stories." },
    ],
  }),
  component: HomePage,
});

const genreCategories = [
  { name: "Romance", desc: "Tender. Bruised. Eternal.", glow: "from-[var(--crimson)]/40" },
  { name: "Dark Romance", desc: "Where shadow falls in love with flame.", glow: "from-[var(--burgundy)]/60" },
  { name: "Fantasy Romance", desc: "Crowns. Curses. Kingdoms of want.", glow: "from-[var(--plum)]/50" },
  { name: "Mafia Romance", desc: "Empires built of silk and blood.", glow: "from-[var(--burgundy)]/50" },
  { name: "Paranormal Romance", desc: "Lovers between the living and the lost.", glow: "from-[var(--plum)]/60" },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedShowcase />
      <GenreSection />
      <BooksGrid />
      <Quote />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--background)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center"
      >
        <p className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">
          <Sparkles className="size-3" /> USA Today Bestselling Author
        </p>
        <h1 className="font-display text-5xl leading-[1.05] text-shadow-glow md:text-7xl lg:text-8xl">
          <span className="block text-[var(--ivory)]">A Universe Written</span>
          <span className="mt-2 block shimmer-text">in Crimson & Gold.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-[var(--ivory)]/80 md:text-xl">
          Step into the world of <span className="text-[var(--gold)] not-italic">Mabel Quill</span> —
          where every love story burns slowly, ends violently, and stays forever.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/books"
            className="group relative overflow-hidden rounded-full bg-gradient-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--background)] shadow-glow pulse-glow"
          >
            <span className="relative z-10">Explore the Books</span>
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-[var(--gold)]/50 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ivory)] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)] hover:shadow-glow"
          >
            Meet the Author
          </Link>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[var(--gold)]/60"
      >
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-[var(--gold)]" />
      </motion.div>
    </section>
  );
}

function FeaturedShowcase() {
  const [index, setIndex] = useState(0);
  const featured = books.slice(0, 4);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % featured.length), 6000);
    return () => clearInterval(t);
  }, [featured.length]);

  const book = featured[index];

  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Featured Releases" title="The Cinematic Library" />

        <div className="relative mt-16 overflow-hidden rounded-2xl glass shadow-card-luxe">
          <div className="absolute inset-0 opacity-50"
               style={{ backgroundImage: `url(${book.cover})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(40px) brightness(0.4)" }} />
          <div className="relative grid gap-12 p-8 md:grid-cols-2 md:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={book.id + "-img"}
                initial={{ opacity: 0, scale: 0.92, x: -40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.92, x: 40 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-sm"
              >
                <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,oklch(0.50_0.21_25/0.4),transparent_70%)] blur-2xl" />
                <img
                  src={book.cover}
                  alt={book.title}
                  width={768}
                  height={1152}
                  loading="lazy"
                  className="relative aspect-[2/3] w-full rounded-md object-cover shadow-glow"
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={book.id + "-info"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="flex flex-col justify-center"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">{book.genre}</span>
                <h3 className="mt-3 font-display text-4xl md:text-6xl text-gradient-gold">{book.title}</h3>
                <div className="mt-4 flex items-center gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`size-4 ${i < Math.round(book.rating) ? "fill-[var(--gold)]" : "opacity-30"}`} />
                  ))}
                  <span className="ml-2 text-sm text-[var(--ivory)]/70">{book.rating} / 5.0</span>
                </div>
                <p className="mt-6 font-serif text-xl italic leading-relaxed text-[var(--ivory)]/85">
                  {book.blurb}
                </p>
                <div className="mt-8">
                  <PlatformButtons book={book} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex items-center justify-between border-t border-[var(--gold)]/15 px-6 py-4">
            <button
              onClick={() => setIndex((i) => (i - 1 + featured.length) % featured.length)}
              className="grid size-10 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--ivory)] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]"
              aria-label="Previous"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-2">
              {featured.map((b, i) => (
                <button
                  key={b.id}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-gradient-gold" : "w-1.5 bg-[var(--ivory)]/30"}`}
                  aria-label={`Show ${b.title}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % featured.length)}
              className="grid size-10 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--ivory)] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]"
              aria-label="Next"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GenreSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Worlds Within Worlds" title="Choose Your Obsession" />
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {genreCategories.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-md glass p-6 hover-lift"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.glow} to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-80`} />
              <div className="relative">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-[var(--gold)]">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl text-[var(--ivory)] leading-snug">{g.name}</h3>
                <p className="mt-3 font-serif italic text-[var(--ivory)]/70">{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BooksGrid() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="The Collection" title="Stories That Linger Like Smoke" />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b, i) => (
            <BookCard key={b.id} book={b} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/books"
            className="inline-flex rounded-full border border-[var(--gold)]/50 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ivory)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:shadow-glow transition-all"
          >
            View The Entire Library
          </Link>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative py-32 px-6">
      <motion.blockquote
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="font-display text-3xl leading-tight text-shadow-glow md:text-5xl">
          <span className="text-gradient-gold">"</span>
          <span className="text-[var(--ivory)]"> I do not write love stories. I write the things love survives. </span>
          <span className="text-gradient-gold">"</span>
        </p>
        <footer className="mt-6 text-xs uppercase tracking-[0.4em] text-[var(--gold)]">— Mabel Quill</footer>
      </motion.blockquote>
    </section>
  );
}

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--gold)]">{kicker}</p>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      <h2 className="mt-6 font-display text-4xl text-[var(--ivory)] md:text-5xl lg:text-6xl">{title}</h2>
    </motion.div>
  );
}
