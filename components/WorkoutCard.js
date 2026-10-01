import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link href={`/workout/${workout.id}`} className="block">
      <article className="overflow-hidden rounded-xl border border-line bg-card transition hover:border-accent">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-accent px-2 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="font-display text-xl font-bold uppercase text-white">
            {workout.name}
          </h3>

          <p className="mt-1 text-xs text-neutral-500">
            {workout.equipment}
          </p>

          <div className="mt-4 flex items-center gap-x-5 border-t border-line pt-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-accent" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <Flame size={14} className="text-accent" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <Star size={14} className="text-accent" />
              {workout.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}