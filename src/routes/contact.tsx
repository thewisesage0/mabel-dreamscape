import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Instagram, Twitter, Facebook, BookOpen, Send, Check } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "./index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mabel Quill" },
      { name: "description", content: "Send a message to bestselling romance & fantasy author Mabel Quill." },
      { property: "og:title", content: "Contact Mabel Quill" },
      { property: "og:description", content: "Reach out to bestselling author Mabel Quill." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Whisper a little more").max(2000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [news, setNews] = useState("");
  const [newsOk, setNewsOk] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      setError(r.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setError(null);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!news.includes("@")) return;
    setNewsOk(true);
    setNews("");
    setTimeout(() => setNewsOk(false), 5000);
  };

  return (
    <section className="relative pt-40 px-6 pb-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="Letters & Whispers" title="Send Me a Message" />

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={submit}
            className="md:col-span-3 glass rounded-2xl p-8 shadow-card-luxe"
          >
            <div className="space-y-5">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-md border border-[var(--gold)]/30 bg-black/40 px-4 py-3 text-[var(--ivory)] focus:border-[var(--gold)] focus:outline-none focus:shadow-glow"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-md border border-[var(--gold)]/30 bg-black/40 px-4 py-3 text-[var(--ivory)] focus:border-[var(--gold)] focus:outline-none focus:shadow-glow"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  className="mt-2 w-full resize-none rounded-md border border-[var(--gold)]/30 bg-black/40 px-4 py-3 text-[var(--ivory)] focus:border-[var(--gold)] focus:outline-none focus:shadow-glow"
                  maxLength={2000}
                />
              </div>
              {error && <p className="text-sm text-[var(--crimson)]">{error}</p>}
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--background)] shadow-glow transition-all hover:scale-105"
              >
                <Send className="size-3.5 transition-transform group-hover:translate-x-1" />
                Send Message
              </button>
            </div>
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 flex items-center gap-3 rounded-md border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-3"
                >
                  <Check className="size-4 text-[var(--gold)]" />
                  <p className="font-serif italic text-[var(--ivory)]">
                    Your message has slipped into the candlelight. Mabel will reply soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg uppercase tracking-[0.2em] text-[var(--gold)]">Direct</h3>
              <a href="mailto:hello@mabelquill.com" className="mt-3 flex items-center gap-2 text-[var(--ivory)]/85 hover:text-[var(--gold)]">
                <Mail className="size-4" /> hello@mabelquill.com
              </a>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg uppercase tracking-[0.2em] text-[var(--gold)]">Follow</h3>
              <div className="mt-3 flex gap-3">
                {[Instagram, Twitter, Facebook, BookOpen].map((Icon, i) => (
                  <a key={i} href="#" className="grid size-10 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--ivory)]/80 hover:text-[var(--gold)] hover:border-[var(--gold)] hover:shadow-glow transition-all">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={subscribe} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg uppercase tracking-[0.2em] text-[var(--gold)]">Newsletter</h3>
              <p className="mt-2 font-serif italic text-sm text-[var(--ivory)]/70">First chapters. Cover reveals. Secrets only the coven sees.</p>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  value={news}
                  onChange={(e) => setNews(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-full border border-[var(--gold)]/30 bg-black/40 px-4 py-2 text-sm text-[var(--ivory)] focus:border-[var(--gold)] focus:outline-none"
                />
                <button className="rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--background)] hover:shadow-glow">
                  Join
                </button>
              </div>
              {newsOk && <p className="mt-3 text-sm text-[var(--gold)] animate-fade-up">✦ You are now part of the inner circle.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
