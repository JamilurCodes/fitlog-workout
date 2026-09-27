import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/src/assets/banner.png";

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-fit-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-20">

        {/* LEFT — CONTENT */}
        <div className="relative z-10 max-w-2xl">
          {/* Label */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-fit-accent/40 bg-fit-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-fit-accent">
              Workout Library
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fit-muted">
              12 Lifts
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(3.2rem,7vw,6.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.035em] text-white">
            Train with
            <br />
            <span className="text-fit-accent">intent.</span>
            <br />
            Log every
            <br />
            <span className="text-fit-accent">set.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-fit-muted sm:text-lg">
            FitLog is a dark, no-nonsense gym companion. Pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#library"
              className="btn btn-primary h-auto min-h-12 rounded-full px-6 py-3 text-sm font-black uppercase tracking-widest transition-transform hover:scale-[1.02]"
            >
              Browse workouts
              <ArrowDownRight className="size-4" />
            </Link>

            <Link
              href="/my-plan"
              className="btn btn-outline h-auto min-h-12 rounded-full border-fit-border px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:border-fit-accent hover:bg-fit-accent hover:text-black"
            >
              Open my plan
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* RIGHT — HERO IMAGE */}
        <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
          {/* Glow */}
          <div className="absolute -inset-8 rounded-full bg-fit-accent/10 blur-3xl" />

          {/* Image frame */}
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-fit-surface p-2 shadow-2xl">
            <div className="relative aspect-16/11 overflow-hidden rounded-3xl bg-black sm:aspect-16/10 lg:aspect-4/3">

              <Image
                src={heroImage}
                alt="Athlete training in a gym"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-contain"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-fit-accent">
                      FitLog
                    </p>

                    <p className="mt-1 font-display text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
                      Train hard.
                    </p>

                    <p className="font-display text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
                      Log honest.
                    </p>
                  </div>

                  <div className="hidden size-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm sm:grid">
                    <ArrowUpRight className="size-5 text-fit-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
