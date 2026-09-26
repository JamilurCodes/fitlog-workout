import type { Workout } from "@/src/types/workout";

const FITLOG_API = "https://api.abcz.workers.dev/api/fitlog";

export async function getAllWorkouts(): Promise<Workout[]> {
  const response = await fetch(FITLOG_API, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts.");
  }

  const data: Workout[] = await response.json();
  return data;
}

export async function getWorkoutById(id: string | number): Promise<Workout | null> {
  const response = await fetch(`${FITLOG_API}/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch workout details.");
  }

  const data: Workout | Workout[] = await response.json();

  if (Array.isArray(data)) {
    return data[0] ?? null;
  }

  return data;
}
