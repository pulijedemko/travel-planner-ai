import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { staticTrips } from "../../trips/MockData";
import { DetailsTab } from "../components/DetailsTab";
import { ItineraryTab } from "../components/ItineraryTab";
import { MapTab } from "../components/MapTab";
import { NotesTab } from "../components/NotesTab";
import { TripDetailsHeader } from "../components/TripDetailsHeader";
import { type TripDetailsTab, TripTabs } from "../components/TripTabs";
import { mockItineraries } from "../MockData";

export function TripDetails() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TripDetailsTab>("Itinerary");

  const trip = staticTrips.find((t) => t.id === id);

  if (!trip) {
    return (
      <div className="p-10 text-center">
        <p className="text-gray-500">Trip not found.</p>
        <Link
          to="/trips"
          className="text-blue-600 text-sm font-medium mt-2 inline-block"
        >
          ← Back to My Trips
        </Link>
      </div>
    );
  }

  const itinerary = mockItineraries[trip.id] ?? [];

  return (
    <div>
      <TripDetailsHeader trip={trip} />
      <TripTabs active={activeTab} onChange={setActiveTab} />

      <div className="p-6">
        {activeTab === "Itinerary" && <ItineraryTab days={itinerary} />}
        {activeTab === "Map" && <MapTab />}
        {activeTab === "Notes" && <NotesTab />}
        {activeTab === "Details" && <DetailsTab trip={trip} />}
      </div>
    </div>
  );
}
