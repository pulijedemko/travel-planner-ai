export interface Traveler {
  id: string;
  avatarUrl: string;
}

export interface Trip {
  id: string;
  destination: string;
  country: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  days: number;
  budget: "Low" | "Medium" | "High";
  status: "upcoming" | "past";
}
