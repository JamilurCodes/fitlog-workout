"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bookmark, Check, Flame, Plus, Star, Timer } from "lucide-react";
import toast from "react-hot-toast";
import type { Workout } from "@/src/types/workout";
import { MAX_PLAN_ITEMS, useFitLog } from "@/src/components/providers/FitLogProvider";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({ workout }: WorkoutDetailsProps) {
  const {
    planIds,
    addToPlan,
    saveForLater,
    isPlanned,
    isSaved,
  } = useFitLog();

  const planned = isPlanned(workout.id);
  const saved = isSaved(workout.id);
  const planFull = planIds.length >= MAX_PLAN_ITEMS;

  const handleAddToPlan = () => {
    if (planned) {
      toast("This lift is already in today’s plan.");
      return;
    }

    if (planFull) {
      toast.error("Today’s plan is full — maximum 5 lifts.");
      return;
    }

    const added = addToPlan(workout.id);
    if (added) toast.success("Added to today’s plan");
  };

  const handleSave = () => {
    if (saved) {
      toast("This workout is already saved.");
      return;
    }

    const didSave = saveForLater(workout.id);
    if (didSave) toast.success("Saved for later");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
      <Link
        href="/#library"
        className="mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-fit-muted transition hover:text-fit-accent"
      >
        <ArrowLeft className="size-4" />
        Back to library
      </Link>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-[1.75rem] border border-fit-border bg-fit-surface p-3">
            <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-black">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full border border-fit-accent/35 bg-fit-accent/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-fit-accent"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6rem)] font-semibold uppercase leading-[0.9] tracking-wide text-white">
            {workout.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-fit-muted sm:text-lg">
            {workout.description}
          </p>

          <section className="mt-9 rounded-2xl border border-fit-border bg-fit-surface/60">
            <div className="border-b border-fit-border px-5 py-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white">Key specs</p>
            </div>
            <dl className="grid grid-cols-2 sm:grid-cols-3">
              {[
                ["Equipment", workout.equipment],
                ["Difficulty", workout.difficulty],
                ["Sets", String(workout.sets)],
                ["Reps", workout.reps],
                ["Duration", `${workout.duration} min`],
                ["Calories", `${workout.caloriesBurned} kcal`],
                ["Rating", workout.rating.toFixed(1)],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-r border-fit-border px-4 py-4 last:border-r-0 sm:px-5">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-fit-muted">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-9">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-3xl font-semibold uppercase tracking-wide text-white">Instructions</h2>
              <span className="h-px flex-1 bg-fit-border" />
            </div>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li key={instruction} className="flex gap-4 rounded-2xl border border-fit-border bg-fit-surface/40 p-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-fit-accent font-display text-lg font-semibold text-black">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-fit-muted">{instruction}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleAddToPlan}
              disabled={planned || planFull}
              className="btn btn-primary h-auto min-h-12 rounded-xl px-5 py-4 text-sm font-black uppercase tracking-[0.08em] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {planned ? <Check className="size-4" /> : <Plus className="size-4" />}
              {planned ? "Added to today's plan" : "Add to today's plan"}
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saved}
              className="btn btn-outline h-auto min-h-12 rounded-xl px-5 py-4 text-sm font-black uppercase tracking-[0.08em] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Bookmark className={`size-4 ${saved ? "fill-current text-fit-accent" : ""}`} />
              {saved ? "Saved for later" : "Save for later"}
            </button>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-fit-border pt-5 text-xs font-semibold text-fit-muted">
            <span className="flex items-center gap-1.5">
              <Timer className="size-3.5 text-fit-accent" /> {workout.duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="size-3.5 text-fit-accent" /> {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="size-3.5 fill-current text-fit-accent" /> {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
