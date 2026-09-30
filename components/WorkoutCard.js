import Link from "next/link";

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

          <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-xs text-neutral-400">
            <span>◷ {workout.duration} min</span>
            <span>♨ {workout.caloriesBurned} kcal</span>
            <span>★ {workout.rating}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}