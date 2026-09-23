import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import DashboardHeader from "../components/common/Header";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <DashboardHeader />
        <Outlet />
      </main>
    </div>
  );
}
