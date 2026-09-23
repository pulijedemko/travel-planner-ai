# Travel Planner AI ✈️

A full-stack travel planning app where users can create trips, generate AI-powered itineraries, and manage their travel plans in one place. Built from scratch as a portfolio project — frontend and backend both self-built.

> 🚧 **Status:** Actively in development. Frontend UI is being built out (static layouts first, then wired to live data). Backend is being scaffolded with Prisma.

---

## ✨ Features

- **Dashboard** — trip stats at a glance (total trips, countries visited, days traveled) + a preview of recent trips
- **My Trips** — browse all trips, filter by Upcoming / Past
- **Create Trip** — form-based flow to plan a new trip (destination, dates, budget, travel style)
- **Trip Details** — day-by-day itinerary timeline, map view, notes, and trip details tabs
- **Profile** — manage personal info and preferences
- **Auth** — login / signup

## 🛠️ Tech Stack

**Frontend**

- React + TypeScript
- Vite
- Tailwind CSS
- React Router

**Backend**

- Node.js + TypeScript
- Prisma ORM

## 📁 Project Structure

```
travel-planner-ai/
├── travel-planner-frontend/
│   └── src/
│       ├── features/          # feature-based modules (trips, dashboard, trip-details, auth, profile, create-trip)
│       ├── components/        # shared UI components (ui/, common/)
│       ├── design-system/     # themes (light/dark) and design tokens
│       ├── layouts/           # app layout (sidebar + header)
│       ├── routes/            # route definitions
│       └── utils/             # shared helpers
│
└── travel-planner-backend/
    └── prisma/                # database schema
```

The frontend follows a **feature-based architecture** — each feature (trips, dashboard, auth, etc.) owns its own pages, components, and logic, rather than splitting code by file type.

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/pulijedemko/travel-planner-ai.git
cd travel-planner-ai
```

**Frontend**

```bash
cd travel-planner-frontend
npm install
npm run dev
```

**Backend**

```bash
cd travel-planner-backend
npm install
npx prisma generate
npm run dev
```

## 🗺️ Roadmap

- [x] Project structure (frontend + backend, feature-based)
- [x] Static UI for all core pages
- [ ] Backend API (auth, trips, itinerary)
- [ ] Connect frontend to live data
- [ ] AI-generated itineraries
- [ ] Map integration
- [ ] Deployment

## 👤 Author

**Pulije Demko**
[GitHub](https://github.com/pulijedemko)
