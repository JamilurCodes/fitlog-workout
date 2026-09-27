import { notFound } from "next/navigation";
import WorkoutDetails from "@/src/components/workout/WorkoutDetails";
import { getWorkoutById } from "@/src/lib/api";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function WorkoutDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}
