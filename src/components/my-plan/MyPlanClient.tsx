"use client";

import { Activity, Flame, ListChecks, Timer } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { Workout } from "@/src/types/workout";
import { useFitLog } from "@/src/components/providers/FitLogProvider";
import MetricCard from "./MetricCard";
import PlanWorkoutCard from "./PlanWorkoutCard";

export default function MyPlanClient({ workouts }: { workouts: Workout[] }) {
  const { planIds, savedIds, hydrated } = useFitLog();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const workoutMap = useMemo(
    () => new Map(workouts.map((workout) => [workout.id, workout])),
    [workouts],
  );

  const plannedWorkouts = useMemo(
    () => planIds.map((id) => workoutMap.get(id)).filter(Boolean) as Workout[],
    [planIds, workoutMap],
  );

  const savedWorkouts = useMemo(
    () => savedIds.map((id) => workoutMap.get(id)).filter(Boolean) as Workout[],
    [savedIds, workoutMap],
  );

  const minutes = plannedWorkouts.reduce((sum, workout) => sum + workout.duration, 0);
  const calories = plannedWorkouts.reduce((sum, workout) => sum + workout.caloriesBurned, 0);
  const visibleWorkouts = activeTab === "plan" ? plannedWorkouts : savedWorkouts;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-fit-accent">Your log</span>
        <h1 className="mt-2 font-display text-6xl font-semibold uppercase leading-none tracking-wide text-white sm:text-7xl">
          My Plan
        </h1>
        <p className="mt-4 text-base leading-7 text-fit-muted sm:text-lg">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-3">
        <MetricCard label="Exercises" value={hydrated ? plannedWorkouts.length : 0} icon={ListChecks} />
        <MetricCard label="Minutes" value={hydrated ? minutes : 0} suffix="min" icon={Timer} />
        <MetricCard label="Calories" value={hydrated ? calories : 0} suffix="kcal" icon={Flame} />
      </div>

      <div role="tablist" className="tabs tabs-boxed mt-10 w-fit gap-1 border border-base-300 bg-base-200 p-1">
        <button
          type="button"
          onClick={() => setActiveTab("plan")}
          className={`tab h-11 px-5 text-sm font-bold uppercase tracking-widest transition ${
            activeTab === "plan" ? "bg-fit-accent text-black" : "text-fit-muted hover:text-white"
          }`}
        >
          Today&apos;s Plan ({plannedWorkouts.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={`tab h-11 px-5 text-sm font-bold uppercase tracking-widest transition ${
            activeTab === "saved" ? "bg-fit-accent text-black" : "text-fit-muted hover:text-white"
          }`}
        >
          Saved ({savedWorkouts.length})
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {visibleWorkouts.length > 0 ? (
          visibleWorkouts.map((workout) => (
            <PlanWorkoutCard key={workout.id} workout={workout} mode={activeTab} />
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-fit-border bg-fit-surface/40 px-5 py-16 text-center">
            <div className="mx-auto grid size-14 place-items-center rounded-full bg-fit-accent/10 text-fit-accent">
              <Activity className="size-6" />
            </div>
            <p className="mt-6 font-display text-4xl font-semibold uppercase tracking-wide text-white">
              {activeTab === "plan" ? "Nothing here yet" : "Nothing saved yet"}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-fit-muted">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "Save a workout from its details page and come back here when you are ready."}
            </p>
            <Link
              href="/#library"
              className="mt-6 inline-flex items-center rounded-xl bg-fit-accent px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:brightness-95"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
