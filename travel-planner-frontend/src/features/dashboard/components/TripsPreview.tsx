import { Link } from "react-router-dom";
import { TripCard } from "../../trips/components/TripCard";
import { staticTrips } from "../../trips/MockData";

export function TripsPreview() {
  const recentTrips = staticTrips.slice(0, 3);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Your Trips</h2>
        <Link
          to="/trips"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
