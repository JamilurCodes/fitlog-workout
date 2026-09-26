export default function Loading() {
  return (
    <main className="mx-auto grid min-h-[70vh] max-w-7xl place-items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="mx-auto block size-10 animate-spin rounded-full border-2 border-fit-border border-t-fit-accent" />
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-fit-muted">Loading workouts…</p>
      </div>
    </main>
  );
}
