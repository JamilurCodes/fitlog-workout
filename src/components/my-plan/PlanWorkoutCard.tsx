"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Flame, Star, Timer, X } from "lucide-react";
import toast from "react-hot-toast";
import type { Workout } from "@/src/types/workout";
import { MAX_PLAN_ITEMS, useFitLog } from "@/src/components/providers/FitLogProvider";

interface PlanWorkoutCardProps {
  workout: Workout;
  mode: "plan" | "saved";
}

export default function PlanWorkoutCard({ workout, mode }: PlanWorkoutCardProps) {
  const {
    planIds,
    addToPlan,
    removeFromPlan,
    removeSaved,
    markAsDone,
    isDone,
  } = useFitLog();

  const done = isDone(workout.id);

  const handleRemove = () => {
    if (mode === "plan") {
      removeFromPlan(workout.id);
      toast.success("Removed from today’s plan");
    } else {
      removeSaved(workout.id);
      toast.success("Removed from saved");
    }
  };

  const handleDone = () => {
    if (done) return;
    markAsDone(workout.id);
    toast.success("Workout marked as done");
  };

  const handleAdd = () => {
    if (planIds.includes(workout.id)) {
      toast("This workout is already in today's plan.");
      return;
    }

    if (planIds.length >= MAX_PLAN_ITEMS) {
      toast.error("Today’s plan is full — maximum 5 lifts.");
      return;
    }

    if (addToPlan(workout.id)) {
      toast.success("Added to today’s plan");
    }
  };

  return (
    <article className={`card rounded-2xl border bg-base-200 p-3 transition ${done ? "border-fit-accent/30" : "border-fit-border"}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link href={`/workout/${workout.id}`} className="relative block aspect-[4/3] shrink-0 overflow-hidden rounded-xl bg-black sm:w-40">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="160px"
            className={`object-cover transition ${done ? "opacity-60" : "hover:scale-105"}`}
          />
        </Link>

        <div className="min-w-0 flex-1 px-1 sm:px-0">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.slice(0, 2).map((group) => (
              <span key={group} className="text-[10px] font-bold uppercase tracking-[0.14em] text-fit-accent">
                {group}
              </span>
            ))}
            {done && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                <Check className="size-3" /> Done
              </span>
            )}
          </div>

          <h3 className="mt-2 font-display text-2xl font-semibold uppercase leading-none tracking-wide text-white">
            {workout.name}
          </h3>
          <p className="mt-2 line-clamp-1 text-sm text-fit-muted">{workout.equipment}</p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-fit-muted">
            <span className="flex items-center gap-1.5"><Timer className="size-3.5 text-fit-accent" />{workout.duration} min</span>
            <span className="flex items-center gap-1.5"><Flame className="size-3.5 text-fit-accent" />{workout.caloriesBurned} kcal</span>
            <span className="flex items-center gap-1.5"><Star className="size-3.5 fill-current text-fit-accent" />{workout.rating}</span>
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-2 sm:w-44 sm:grid-cols-1">
          <Link
            href={`/workout/${workout.id}`}
            className="inline-flex items-center justify-center rounded-lg border border-fit-border px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-white/40"
          >
            View Details
          </Link>

          {mode === "plan" ? (
            <button
              type="button"
              onClick={handleDone}
              disabled={done}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-fit-accent px-3 py-2.5 text-[11px] font-black uppercase tracking-[0.08em] text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Check className="size-3.5" />
              {done ? "Done" : "Mark as Done"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAdd}
              disabled={planIds.length >= MAX_PLAN_ITEMS && !planIds.includes(workout.id)}
              className="inline-flex items-center justify-center rounded-lg bg-fit-accent px-3 py-2.5 text-[11px] font-black uppercase tracking-[0.08em] text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-45"
            >
              Add to Plan
            </button>
          )}

          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Remove ${workout.name}`}
            className="col-span-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-fit-border px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-fit-muted transition hover:border-red-400/40 hover:text-red-300 sm:col-span-1"
          >
            <X className="size-3.5" />
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
