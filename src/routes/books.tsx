import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { books, genres } from "@/lib/books";
import { BookCard } from "@/components/BookCard";
import { SectionHeading } from "./index";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "All Books — Mabel Quill" },
      { name: "description", content: "Browse the complete library of Mabel Quill — every dark romance, fantasy romance, and mafia romance novel in one place." },
      { property: "og:title", content: "All Books by Mabel Quill" },
      { property: "og:description", content: "The complete library of bestselling author Mabel Quill." },
    ],
  }),
  component: BooksPage,
});

type Sort = "title" | "rating" | "genre";

function BooksPage() {
  const [q, setQ] = useState("");
  const [genre, setGenre] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("rating");

  const filtered = useMemo(() => {
    let list = books.slice();
    if (genre !== "All") list = list.filter((b) => b.genre === genre);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter((b) => b.title.toLowerCase().includes(s) || b.blurb.toLowerCase().includes(s));
    }
    list.sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "rating") return b.rating - a.rating;
      return a.genre.localeCompare(b.genre);
    });
    return list;
  }, [q, genre, sort]);

  return (
    <section className="relative pt-40 px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="The Complete Library" title="Every World, Every Vow" />

        <div className="mt-12 grid gap-4 glass rounded-2xl p-5 md:grid-cols-[1fr_auto_auto] md:items-center">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--gold)]/70" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value.slice(0, 100))}
              placeholder="Search by title or whisper…"
              className="w-full rounded-full border border-[var(--gold)]/30 bg-black/40 py-2.5 pl-11 pr-4 text-sm text-[var(--ivory)] placeholder:text-[var(--ivory)]/40 focus:border-[var(--gold)] focus:outline-none"
            />
          </div>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="rounded-full border border-[var(--gold)]/30 bg-black/40 px-5 py-2.5 text-sm text-[var(--ivory)] focus:border-[var(--gold)] focus:outline-none"
          >
            {genres.map((g) => <option key={g} value={g} className="bg-[var(--background)]">{g}</option>)}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-[var(--gold)]/30 bg-black/40 px-5 py-2.5 text-sm text-[var(--ivory)] focus:border-[var(--gold)] focus:outline-none"
          >
            <option value="rating" className="bg-[var(--background)]">Sort: Highest Rated</option>
            <option value="title" className="bg-[var(--background)]">Sort: Title A→Z</option>
            <option value="genre" className="bg-[var(--background)]">Sort: Genre</option>
          </select>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--ivory)]/60">
          Showing <span className="text-[var(--gold)]">{filtered.length}</span> of {books.length} novels
        </p>

        {filtered.length === 0 ? (
          <p className="mt-20 text-center font-serif italic text-xl text-[var(--ivory)]/60">
            No tales match your search… yet.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
          </div>
        )}
      </div>
    </section>
  );
}
