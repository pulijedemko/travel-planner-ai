export type TripFilter = "all" | "upcoming" | "past";

interface TripFiltersProps {
  active: TripFilter;
  onChange: (filter: TripFilter) => void;
}

const FILTERS: { key: TripFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

export function TripFilters({ active, onChange }: TripFiltersProps) {
  return (
    <div className="flex gap-2">
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onChange(filter.key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === filter.key
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
