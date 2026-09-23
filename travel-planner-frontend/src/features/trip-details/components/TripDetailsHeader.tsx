import { Link } from "react-router-dom";
import { ArrowLeft, Pencil, Share2, MoreHorizontal } from "lucide-react";
import type { Trip } from "../../trips/type";

interface TripDetailsHeaderProps {
  trip: Trip;
}

export function TripDetailsHeader({ trip }: TripDetailsHeaderProps) {
  return (
    <div className="relative h-72 overflow-hidden">
      <img
        src={trip.coverImage}
        alt={`${trip.destination}, ${trip.country}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <Link
        to="/trips"
        className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
      >
        <ArrowLeft size={18} className="text-gray-700" />
      </Link>

      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors">
          <Pencil size={16} className="text-gray-700" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors">
          <Share2 size={16} className="text-gray-700" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors">
          <MoreHorizontal size={16} className="text-gray-700" />
        </button>
      </div>

      <div className="absolute bottom-5 left-6 right-6 text-white">
        <h1 className="text-3xl font-bold tracking-tight">
          {trip.destination}, {trip.country}
        </h1>
        <p className="mt-1 text-sm text-white/85">
          {trip.startDate} – {trip.endDate} · {trip.days} Days · Budget:{" "}
          {trip.budget}
        </p>
      </div>
    </div>
  );
}
