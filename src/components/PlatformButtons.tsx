import type { Book } from "@/lib/books";

const platforms = [
  { key: "amazon" as const, label: "Amazon" },
  { key: "wattpad" as const, label: "Wattpad" },
  { key: "inkitt" as const, label: "Inkitt" },
  { key: "goodreads" as const, label: "Goodreads" },
  { key: "apple" as const, label: "Apple Books" },
];

export function PlatformButtons({ book, compact = false }: { book: Book; compact?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {platforms.map((p) => (
        <a
          key={p.key}
          href={book.links[p.key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative overflow-hidden rounded-full border border-[var(--gold)]/40 bg-black/40 ${compact ? "px-3 py-1 text-[10px]" : "px-4 py-1.5 text-xs"} font-medium uppercase tracking-[0.18em] text-[var(--ivory)]/90 transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)] hover:shadow-glow`}
        >
          <span className="relative z-10">{p.label}</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      ))}
    </div>
  );
}
