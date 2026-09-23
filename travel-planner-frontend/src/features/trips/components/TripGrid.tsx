import type { Trip } from "../type";
import { TripCard } from "./TripCard";

interface TripGridProps {
  trips: Trip[];
}

export function TripGrid({ trips }: TripGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
