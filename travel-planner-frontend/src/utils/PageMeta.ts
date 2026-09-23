import { matchPath } from "react-router-dom";

interface PageMeta {
  title: string;
  subtitle?: string;
}

const PAGE_META: { path: string; meta: PageMeta }[] = [
  {
    path: "/",
    meta: { title: "Dashboard", subtitle: "Welcome back, Ahmed 👋" },
  },
  {
    path: "/trips",
    meta: { title: "My Trips", subtitle: "All the adventures you've planned" },
  },
  {
    path: "/create-trip",
    meta: { title: "Create Trip", subtitle: "Let's plan your perfect trip" },
  },
  {
    path: "/profile",
    meta: { title: "Profile", subtitle: "Manage your account settings" },
  },
  {
    path: "/trips/:tripId",
    meta: { title: "Trip Details", subtitle: "View and manage your trip" },
  },
];

export function getPageMeta(pathname: string): PageMeta {
  const match = PAGE_META.find((entry) =>
    matchPath({ path: entry.path, end: true }, pathname),
  );

  return match?.meta ?? { title: "" };
}
