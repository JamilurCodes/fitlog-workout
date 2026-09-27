"use client";

import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import type { Workout } from "@/src/types/workout";

type SortKey = "duration" | "calories" | "rating";

export default function WorkoutLibrary({ workouts }: { workouts: Workout[] }) {
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
      if (sortBy === "rating") return a.rating - b.rating;
      return a.duration - b.duration;
    });
  }, [sortBy, workouts]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-fit-accent">12 exercises</span>
          <h2 className="mt-2 font-display text-5xl font-semibold uppercase leading-none tracking-wide text-white sm:text-6xl">
            The Library
          </h2>
          <p className="mt-3 text-fit-muted">Twelve lifts covering every major muscle group.</p>
        </div>

        <label className="block w-full sm:w-44">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-fit-muted">Sort By</span>
          <span className="relative block">
            <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortKey)}
            className="select select-bordered w-full bg-base-200 text-sm font-semibold text-white focus:border-primary"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-fit-muted" />
          </span>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
