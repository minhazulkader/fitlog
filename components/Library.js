"use client";

import { useEffect, useState } from "react";
import { fetchWorkouts } from "@/lib/api";
import WorkoutCard from "@/components/WorkoutCard";

export default function Library() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await fetchWorkouts();
        setWorkouts(data);
      } catch (err) {
        setError("Failed to load workouts");
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return (
    <section
      id="library"
      className="mx-auto mt-16 max-w-[1280px] px-4 sm:px-6"
    >
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold uppercase">
          The Library
        </h2>

        <p className="mt-2 text-sm text-neutral-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {loading && (
        <p className="text-sm text-neutral-500">
          Loading workouts...
        </p>
      )}

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      )}
    </section>
  );
}