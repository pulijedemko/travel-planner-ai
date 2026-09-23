// src/routes/AppRoutes.tsx

import MainLayout from "../../src/layouts/MainLayout";

import { Route, Routes } from "react-router-dom";
import CreateTrip from "../features/create-trip/pages/CreateTrip";
import Dashboard from "../features/dashboard/pages/Dashboard";
import ProfilePage from "../features/profile/pages/ProfilePage";
import { MyTrips } from "../features/trips/pages/MyTrips";
import { TripDetails } from "../features/trip-details/pages/TripDetails";
import { Login } from "../features/auth/pages/Login";
import { SignUp } from "../features/auth/pages/Signup";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Route pa MainLayout - pa sidebar/header */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Route brenda MainLayout - me sidebar/header */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/trips" element={<MyTrips />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/trips/:id" element={<TripDetails />} />
      </Route>
    </Routes>
  );
}
