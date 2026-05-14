import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Embers } from "@/components/Embers";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-serif text-2xl italic text-[var(--ivory)]">A page lost to the shadows.</h2>
        <p className="mt-2 text-sm text-[var(--ivory)]/60">
          The chapter you seek does not exist in this volume.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--background)] transition-all hover:shadow-glow"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-[var(--ivory)]">A page didn't unfold</h1>
        <p className="mt-2 text-sm text-[var(--ivory)]/60">Something stirred in the dark. Try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--background)]"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-[var(--gold)]/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[var(--ivory)]">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mabel Quill Hub — Romance & Fantasy Author" },
      { name: "description", content: "The official universe of Mabel Quill — bestselling author of dark romance, fantasy romance, and mafia romance novels. Enter the world." },
      { property: "og:title", content: "Mabel Quill Hub — Romance & Fantasy Author" },
      { property: "og:description", content: "Cinematic dark romance and fantasy novels by Mabel Quill." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function CinematicLoader({ done }: { done: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[var(--background)] transition-opacity duration-1000 ${done ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="text-center">
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent animate-pulse" />
        <p className="mt-6 font-display text-sm uppercase tracking-[0.5em] shimmer-text">
          Mabel Quill
        </p>
        <p className="mt-2 font-serif text-xs italic text-[var(--ivory)]/50">entering the universe…</p>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CinematicLoader done={loaded} />
      <div className="relative min-h-screen bg-hero">
        <Embers />
        <Navbar />
        <main className="relative z-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
