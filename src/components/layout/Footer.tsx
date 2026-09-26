import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-fit-border bg-[#151515]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-7 text-sm sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-3 text-white">
          <span className="grid size-8 place-items-center rounded-md bg-fit-accent text-black">
            <Dumbbell className="size-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-[0.12em]">FITLOG</span>
        </div>
        <p className="text-center text-fit-muted md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
