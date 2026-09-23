import type { ItineraryDay } from "../types";

interface ItineraryTabProps {
  days: ItineraryDay[];
}

export function ItineraryTab({ days }: ItineraryTabProps) {
  if (days.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        No itinerary yet for this trip.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {days.map((day) => (
        <div
          key={day.day}
          className="rounded-2xl border border-gray-100 bg-white p-5"
        >
          <h3 className="font-semibold text-gray-900">
            Day {day.day} · {day.date}
          </h3>

          {day.activities.length === 0 ? (
            <p className="mt-3 text-sm text-gray-400">
              No activities planned yet.
            </p>
          ) : (
            <div className="mt-4 space-y-5">
              {day.activities.map((activity, index) => (
                <div key={activity.id} className="relative flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1.5" />
                    {index < day.activities.length - 1 && (
                      <span className="flex-1 w-px bg-gray-200 mt-1" />
                    )}
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4 pb-1">
                    <div>
                      <p className="text-xs font-medium text-gray-400">
                        {activity.timeOfDay}
                      </p>
                      <p className="font-medium text-gray-900 mt-0.5">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {activity.description}
                      </p>
                    </div>

                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
