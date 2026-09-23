export type TripDetailsTab = "Itinerary" | "Map" | "Notes" | "Details";

const TABS: TripDetailsTab[] = ["Itinerary", "Map", "Notes", "Details"];

interface TripTabsProps {
  active: TripDetailsTab;
  onChange: (tab: TripDetailsTab) => void;
}

export function TripTabs({ active, onChange }: TripTabsProps) {
  return (
    <div className="flex gap-6 px-6 border-b border-gray-100">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-3 pt-4 text-sm font-medium transition-colors ${
            active === tab
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
