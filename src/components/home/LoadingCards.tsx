export default function LoadingCards() {
  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="skeleton h-10 w-56" />
          <div className="skeleton mt-3 h-5 w-80 max-w-full" />
        </div>
        <div className="skeleton h-11 w-40 rounded-xl" />
      </div>

      <p className="mt-10 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-fit-muted">
        <span className="size-4 animate-spin rounded-full border-2 border-fit-border border-t-fit-accent" />
        Loading workouts…
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-2xl border border-fit-border bg-fit-surface">
            <div className="skeleton aspect-4/3 rounded-none" />
            <div className="space-y-3 p-5">
              <div className="skeleton h-5 w-24" />
              <div className="skeleton h-7 w-3/4" />
              <div className="skeleton h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
