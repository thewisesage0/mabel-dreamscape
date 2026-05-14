import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./index";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reader Reviews — Mabel Quill" },
      { name: "description", content: "What readers are saying about Mabel Quill's bestselling romance & fantasy novels." },
      { property: "og:title", content: "Reviews of Mabel Quill's Novels" },
      { property: "og:description", content: "Cinematic reader testimonials and reviews." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Aurelia V.", book: "Crimson Vows", rating: 5, text: "I read it in one night. Then sat in silence. Then read it again. Mabel doesn't write romance — she casts spells." },
  { name: "Marisol K.", book: "The Velvet Throne", rating: 5, text: "Every page felt like silk soaked in blood. The slow burn ruined me for other authors." },
  { name: "Dahlia R.", book: "Gilded Sins", rating: 5, text: "He should not be this attractive. I should not love him this much. 10/10 emotionally devastating." },
  { name: "Selene P.", book: "Moonlit Heir", rating: 5, text: "The atmosphere — gothic, glittering, dangerous. I've never felt a book this much." },
  { name: "Iris M.", book: "Ashes of Eden", rating: 5, text: "An angel and his ruin. I cried. I screamed. I underlined every other sentence." },
  { name: "Calliope T.", book: "Empire of Thorns", rating: 5, text: "Mabel Quill writes love like a war you choose to lose. Magnificent." },
  { name: "Ophelia D.", book: "Crimson Vows", rating: 5, text: "Cinematic, brutal, luxurious. This is the genre's gold standard." },
  { name: "Vivienne L.", book: "The Velvet Throne", rating: 5, text: "Couldn't put it down. Couldn't move on. Already pre-ordering everything she writes." },
];

function ReviewsPage() {
  return (
    <section className="relative pt-40 px-6 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[var(--burgundy)]/30 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[var(--plum)]/30 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading kicker="Reader Voices" title="Whispers From the Coven" />

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="group relative glass rounded-md p-7 hover-lift"
            >
              <Quote className="absolute right-4 top-4 size-8 text-[var(--gold)]/20" />
              <div className="flex gap-1 text-[var(--gold)]">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-[var(--gold)]" />
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-[var(--ivory)]/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 border-t border-[var(--gold)]/15 pt-4">
                <p className="font-display text-sm uppercase tracking-[0.2em] text-[var(--gold)]">{r.name}</p>
                <p className="mt-1 text-xs italic text-[var(--ivory)]/60">on {r.book}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-20 overflow-hidden">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-[var(--gold)] mb-6">
            ★ ★ ★ ★ ★ &nbsp; Loved by 2.4M readers worldwide &nbsp; ★ ★ ★ ★ ★
          </p>
          <div className="relative">
            <div className="flex animate-[shimmer_30s_linear_infinite] gap-8 [animation-name:marquee]" style={{
              animation: "marquee 40s linear infinite",
            }}>
              {[...reviews, ...reviews].map((r, i) => (
                <div key={i} className="flex shrink-0 items-center gap-3 glass rounded-full px-5 py-2 text-sm">
                  <Star className="size-3 fill-[var(--gold)] text-[var(--gold)]" />
                  <span className="font-serif italic text-[var(--ivory)]/80">"{r.text.slice(0, 60)}…"</span>
                  <span className="text-xs uppercase tracking-widest text-[var(--gold)]">— {r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
