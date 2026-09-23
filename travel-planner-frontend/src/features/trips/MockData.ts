import type { Trip } from "./type";
import parisImage from "../../assets/images/paris.webp";
import dubaiImage from "../../assets/images/dubai.jpg";
import tokyoImage from "../../assets/images/tokyo.jpg";

export const staticTrips: Trip[] = [
  {
    id: "1",
    destination: "Paris",
    country: "France",
    coverImage: parisImage,
    startDate: "May 20",
    endDate: "May 25, 2025",
    days: 5,
    budget: "Medium",
    status: "upcoming",
  },
  {
    id: "2",
    destination: "Dubai",
    country: "UAE",
    coverImage: dubaiImage,
    startDate: "Jun 10",
    endDate: "Jun 13, 2025",
    days: 3,
    budget: "High",
    status: "upcoming",
  },
  {
    id: "3",
    destination: "Tokyo",
    country: "Japan",
    coverImage: tokyoImage,
    startDate: "Apr 5",
    endDate: "Apr 11, 2025",
    days: 7,
    budget: "Low",
    status: "past",
  },
];
