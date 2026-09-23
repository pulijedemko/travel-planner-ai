import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { TripFilters, type TripFilter } from "../components/TripFilter";
import { TripGrid } from "../components/TripGrid";
import { staticTrips } from "../MockData";

export function MyTrips() {
  const [activeFilter, setActiveFilter] = useState<TripFilter>("all");

  const filteredTrips =
    activeFilter === "all"
      ? staticTrips
      : staticTrips.filter((trip) => trip.status === activeFilter);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-10">
        <div>
          <TripFilters active={activeFilter} onChange={setActiveFilter} />
        </div>
        <Link
          to="/create-trip"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          Create New Trip
        </Link>
      </div>

      {filteredTrips.length > 0 ? (
        <TripGrid trips={filteredTrips} />
      ) : (
        <div className="text-center py-20 text-gray-400">
          No trips in this category yet.
        </div>
      )}
    </div>
  );
}
