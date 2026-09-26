export default function Loading() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-4">
      <div className="text-center">
        <span className="mx-auto block size-10 animate-spin rounded-full border-2 border-fit-border border-t-fit-accent" />
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-fit-muted">Loading workouts…</p>
      </div>
    </main>
  );
}
