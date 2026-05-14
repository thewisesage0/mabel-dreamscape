import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Book } from "@/lib/books";
import { PlatformButtons } from "./PlatformButtons";

export function BookCard({ book, index = 0 }: { book: Book; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-md glass shadow-card-luxe hover-lift"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={book.cover}
          alt={`${book.title} by Mabel Quill — ${book.genre}`}
          loading="lazy"
          width={768}
          height={1152}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
             style={{ background: "radial-gradient(circle at 50% 80%, oklch(0.50 0.21 25 / 0.35), transparent 60%)" }} />
        <span className="absolute left-3 top-3 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
          {book.genre}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-2xl text-[var(--ivory)]">{book.title}</h3>
        <div className="flex items-center gap-1 text-[var(--gold)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-3.5 ${i < Math.round(book.rating) ? "fill-[var(--gold)]" : "opacity-30"}`}
            />
          ))}
          <span className="ml-1 text-xs text-[var(--ivory)]/70">{book.rating}</span>
        </div>
        <p className="font-serif text-base italic leading-relaxed text-[var(--ivory)]/75">
          {book.blurb}
        </p>
        <div className="mt-auto pt-2">
          <PlatformButtons book={book} compact />
        </div>
      </div>
    </motion.article>
  );
}
