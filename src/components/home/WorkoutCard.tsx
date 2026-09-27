import Image from "next/image";
import Link from "next/link";
import { Flame, Star, Timer } from "lucide-react";
import type { Workout } from "@/src/types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="card group overflow-hidden border border-base-300 bg-base-200 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_50px_rgba(204,255,0,0.08)]"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-black">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {workout.muscleGroups.slice(0, 3).map((group) => (
            <span
              key={group}
              className="badge badge-sm border-white/15 bg-black/65 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur"
            >
              {group}
            </span>
          ))}
        </div>
        <span className="badge badge-primary absolute bottom-4 right-4 h-7 rounded-full px-3 text-[10px] font-black uppercase tracking-[0.12em]">
          View
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-2xl font-semibold uppercase leading-none tracking-wide text-white">
          {workout.name}
        </h3>
        <p className="mt-3 line-clamp-1 text-sm text-fit-muted">{workout.equipment}</p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-fit-border pt-4 text-xs font-semibold text-fit-muted">
          <span className="flex items-center gap-1.5">
            <Timer className="size-3.5 text-fit-accent" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="size-3.5 text-fit-accent" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="size-3.5 fill-current text-fit-accent" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
