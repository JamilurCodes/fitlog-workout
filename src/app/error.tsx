"use client";

import { RefreshCw } from "lucide-react";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 py-20">
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-fit-accent">Something went wrong</p>
        <h1 className="mt-3 font-display text-5xl font-semibold uppercase tracking-wide text-white">Try again</h1>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-fit-accent px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-black"
        >
          <RefreshCw className="size-4" />
          Retry
        </button>
      </div>
    </main>
  );
}
