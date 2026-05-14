import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, BookOpen } from "lucide-react";
import authorPortrait from "@/assets/author-portrait.jpg";
import { SectionHeading } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mabel Quill — Bestselling Romance & Fantasy Author" },
      { name: "description", content: "Discover the story behind Mabel Quill — bestselling author of dark romance and fantasy novels." },
      { property: "og:title", content: "About Mabel Quill" },
      { property: "og:description", content: "The cinematic journey of bestselling romance & fantasy author Mabel Quill." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2017", title: "First Quill", text: "Wrote her first short romance under candlelight. Posted anonymously on Wattpad. It went viral overnight." },
  { year: "2019", title: "Inkitt Bestseller", text: "Debut novel ‘Crimson Vows’ became Inkitt’s most-read romance of the year." },
  { year: "2021", title: "Indie Empire", text: "Self-published 'The Velvet Throne' — hit #1 in Fantasy Romance on Amazon for 19 consecutive weeks." },
  { year: "2023", title: "USA Today", text: "Named USA Today bestselling author. Translated into 14 languages worldwide." },
  { year: "2025", title: "The Hub", text: "Launches the Mabel Quill Hub — a cinematic universe of every world she's ever written." },
];

const favorites = ["Dark Romance", "Fantasy Romance", "Mafia Romance", "Paranormal Romance", "Slow-burn Enemies-to-Lovers", "Morally Grey Anti-Heroes"];

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 px-6 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative md:col-span-2"
          >
            <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,oklch(0.50_0.21_25/0.35),transparent_70%)] blur-3xl" />
            <img
              src={authorPortrait}
              alt="Portrait of bestselling author Mabel Quill"
              width={1024}
              height={1024}
              className="relative aspect-square w-full rounded-md object-cover shadow-glow"
            />
            <div className="absolute -bottom-4 -right-4 hidden glass rounded-md px-5 py-3 md:block">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Mabel Quill</p>
              <p className="font-serif italic text-[var(--ivory)]/80">est. 2017 · USA Today Bestseller</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--gold)]">About the Author</p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-shadow-glow md:text-6xl">
              <span className="text-[var(--ivory)]">She writes in </span>
              <span className="text-gradient-gold">candlelight.</span>
            </h1>
            <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-[var(--ivory)]/85">
              <p>
                Mabel Quill is a USA Today bestselling author of dark romance and fantasy
                romance — known for her cinematic prose, morally grey lovers, and
                slow-burning obsessions that linger long after the final page.
              </p>
              <p className="italic text-[var(--ivory)]/70">
                Her stories are not gentle. They are luxurious, ruinous, and unforgettable —
                a velvet glove laid over a blade.
              </p>
              <p>
                When she is not writing, Mabel collects antique quills, drinks too much red
                wine, and wanders cathedrals at dusk in search of her next villain.
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              {[Instagram, Twitter, Facebook, BookOpen].map((Icon, i) => (
                <a key={i} href="#" className="grid size-11 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--ivory)]/80 transition-all hover:border-[var(--gold)] hover:text-[var(--gold)] hover:shadow-glow">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Her Journey" title="A Path Lit by Embers" />
          <div className="relative mt-16">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent md:-translate-x-1/2" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className={`relative mb-12 grid gap-4 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <p className="font-display text-3xl text-gradient-gold">{t.year}</p>
                  <h3 className="mt-1 font-display text-xl text-[var(--ivory)]">{t.title}</h3>
                  <p className="mt-2 font-serif italic text-[var(--ivory)]/70">{t.text}</p>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full bg-gradient-gold shadow-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Her Favorites" title="Genres That Set Her Soul Alight" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {favorites.map((f, i) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-full glass px-5 py-2 font-serif italic text-[var(--ivory)]/85 hover:text-[var(--gold)] hover:shadow-glow transition-all"
              >
                {f}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-3xl leading-tight md:text-5xl">
            <span className="text-gradient-gold">"</span>
            <span className="text-[var(--ivory)]"> Some loves are written in ink. Mine are carved in bone. </span>
            <span className="text-gradient-gold">"</span>
          </p>
        </motion.blockquote>
      </section>
    </>
  );
}
