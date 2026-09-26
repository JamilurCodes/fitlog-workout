import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 py-20">
      <div className="max-w-xl text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-fit-accent text-black">
          <Dumbbell className="size-8" />
        </div>
        <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-fit-accent">Error 404</p>
        <h1 className="mt-2 font-display text-6xl font-semibold uppercase tracking-wide text-white sm:text-8xl">
          Page not found
        </h1>
        <p className="mt-5 text-fit-muted">
          The route you requested does not exist in FitLog.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-fit-accent px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-black"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>
      </div>
    </main>
  );
}
