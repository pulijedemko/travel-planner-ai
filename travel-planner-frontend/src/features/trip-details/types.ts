export interface ItineraryActivity {
  id: string;
  timeOfDay: "Morning" | "Afternoon" | "Evening";
  title: string;
  description: string;
  image: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  activities: ItineraryActivity[];
}
