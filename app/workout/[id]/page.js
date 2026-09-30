"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CalendarPlus, Bookmark } from "lucide-react";
import { fetchWorkout } from "@/lib/api";
import { usePlan, PLAN_CAP } from "@/context/PlanContext";
import Tags from "@/components/Tags";
import Spinner from "@/components/Spinner";
import NotFound from "../../not-found";

export default function WorkoutDetail() {
  const { id } = useParams();
  const { plan, addToPlan, addToSaved } = usePlan();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMissing(false);

    fetchWorkout(id)
      .then(setWorkout)
      .catch(() => setMissing(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Spinner label="Loading workout…" />;
  }

  if (missing || !workout) {
    return <NotFound />;
  }

  const inPlan = plan.some((item) => item.id === workout.id);
  const full = !inPlan && plan.length >= PLAN_CAP;

  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="h-[280px] overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] sm:h-[420px] lg:h-[735px]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-display text-3xl font-bold uppercase sm:text-4xl">
              {workout.name}
            </h1>

            <p className="mt-3 text-neutral-400">{workout.description}</p>

            <div className="mt-4">
              <Tags tags={workout.muscleGroups} color="bg-cta" />
            </div>
          </div>

          <div className="rounded-xl border border-[#232834] bg-[#151922]">
            {specs.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-[#232834] px-5 py-3 text-sm last:border-0"
              >
                <span className="font-semibold uppercase tracking-wide text-neutral-400">
                  {label}
                </span>

                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-bold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="flex flex-col gap-3">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3 text-neutral-300">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta text-sm font-bold text-black">
                    {index + 1}
                  </span>

                  <span className="pt-0.5">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => addToPlan(workout)}
              disabled={full}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-cta px-6 text-sm font-bold uppercase text-black hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <CalendarPlus size={16} />

              {full
                ? "Plan is full"
                : inPlan
                  ? "Already in today's plan"
                  : "Add to today's plan"}
            </button>

            <button
              onClick={() => addToSaved(workout)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#374151] px-6 text-sm font-bold uppercase hover:border-accent hover:text-accent"
            >
              <Bookmark size={16} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
