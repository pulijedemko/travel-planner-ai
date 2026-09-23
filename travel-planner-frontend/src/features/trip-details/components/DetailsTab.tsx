import type { Trip } from "../../trips/type";

interface DetailsTabProps {
  trip: Trip;
}

const ROWS: { label: string; value: (trip: Trip) => string }[] = [
  { label: "Destination", value: (t) => `${t.destination}, ${t.country}` },
  { label: "Dates", value: (t) => `${t.startDate} – ${t.endDate}` },
  { label: "Duration", value: (t) => `${t.days} Days` },
  { label: "Budget", value: (t) => t.budget },
  {
    label: "Status",
    value: (t) => (t.status === "upcoming" ? "Upcoming" : "Past"),
  },
];

export function DetailsTab({ trip }: DetailsTabProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white divide-y divide-gray-100">
      {ROWS.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between px-5 py-3.5"
        >
          <span className="text-sm text-gray-500">{row.label}</span>
          <span className="text-sm font-medium text-gray-900">
            {row.value(trip)}
          </span>
        </div>
      ))}
    </div>
  );
}
