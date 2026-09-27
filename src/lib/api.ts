import type { Workout } from "@/src/types/workout";

const FITLOG_API =
  "https://api.api-store.workers.dev/api/fitlog";

export async function getAllWorkouts(): Promise<Workout[]> {
  const response = await fetch(FITLOG_API, {
    cache: "no-store",
  });

  console.log("FitLog API status:", response.status);
  console.log("FitLog API URL:", response.url);

  if (!response.ok) {
    const errorText = await response.text();

    console.log("FitLog API response:", errorText);

    throw new Error(
      `Failed to fetch workouts. Status: ${response.status}`,
    );
  }

  const data: Workout[] =
    await response.json();

  return data;
}

export async function getWorkoutById(
  id: string | number,
): Promise<Workout | null> {
  const response = await fetch(
    `${FITLOG_API}/${id}`,
    {
      cache: "no-store",
    },
  );

  console.log(
    "FitLog detail status:",
    response.status,
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const errorText = await response.text();

    console.log(
      "FitLog detail response:",
      errorText,
    );

    throw new Error(
      `Failed to fetch workout details. Status: ${response.status}`,
    );
  }

  const data: Workout | Workout[] =
    await response.json();

  if (Array.isArray(data)) {
    return data[0] ?? null;
  }

  return data;
}