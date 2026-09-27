import MyPlanClient from "@/src/components/my-plan/MyPlanClient";
import { getAllWorkouts } from "@/src/lib/api";

export default async function MyPlanPage() {
  const workouts = await getAllWorkouts();
  return <MyPlanClient workouts={workouts} />;
}
