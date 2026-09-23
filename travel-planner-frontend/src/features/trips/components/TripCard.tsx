import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import type { Trip } from "../type";

interface TripCardProps {
  trip: Trip;
}

const BUDGET_STYLES: Record<Trip["budget"], string> = {
  Low: "bg-emerald-50 text-emerald-700",
  Medium: "bg-amber-50 text-amber-700",
  High: "bg-rose-50 text-rose-700",
};

export function TripCard({ trip }: TripCardProps) {
  return (
    <Link
      to={`/trips/${trip.id}`}
      className="group block rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={trip.coverImage}
          alt={`${trip.destination}, ${trip.country}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm ${
            trip.status === "upcoming"
              ? "bg-blue-600/90 text-white"
              : "bg-white/90 text-gray-700"
          }`}
        >
          {trip.status === "upcoming" ? "Upcoming" : "Past"}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight">
          {trip.destination}, {trip.country}
        </h3>

        <div className="flex items-center gap-1.5 mt-2 text-gray-500 text-sm">
          <Calendar size={14} className="shrink-0" />
          <span>
            {trip.startDate} – {trip.endDate}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <Clock size={14} className="shrink-0" />
            <span>{trip.days} Days</span>
          </div>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-md ${BUDGET_STYLES[trip.budget]}`}
          >
            {trip.budget} Budget
          </span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-blue-600">View trip →</span>
        </div>
      </div>
    </Link>
  );
}
