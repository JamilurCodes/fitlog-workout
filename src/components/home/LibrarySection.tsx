import { getAllWorkouts } from "@/src/lib/api";
import WorkoutLibrary from "./WorkoutLibrary";

export default async function LibrarySection() {
  const workouts = await getAllWorkouts();

  return (
    <section id="library" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <WorkoutLibrary workouts={workouts} />
    </section>
  );
}
