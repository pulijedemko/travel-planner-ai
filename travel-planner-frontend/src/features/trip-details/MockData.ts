import type { ItineraryDay } from "./types";

export const mockItineraries: Record<string, ItineraryDay[]> = {
  "1": [
    {
      day: 1,
      date: "Tuesday, May 20",
      activities: [
        {
          id: "d1-morning",
          timeOfDay: "Morning",
          title: "Eiffel Tower",
          description: "Start your day with a stunning view of Paris.",
          image: "/assets/images/eiffel-tower.jpg",
        },
        {
          id: "d1-afternoon",
          timeOfDay: "Afternoon",
          title: "Louvre Museum",
          description: "Explore the world's largest art museum.",
          image: "/assets/images/louvre.jpg",
        },
        {
          id: "d1-evening",
          timeOfDay: "Evening",
          title: "Seine River Cruise",
          description: "Enjoy a relaxing cruise with beautiful lights.",
          image: "/assets/images/seine-cruise.jpg",
        },
      ],
    },
    {
      day: 2,
      date: "Wednesday, May 21",
      activities: [],
    },
    {
      day: 3,
      date: "Thursday, May 22",
      activities: [],
    },
  ],
};
