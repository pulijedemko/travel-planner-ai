// pages/Dashboard/Dashboard.tsx

import StatsGrid from "../components/StatisticGrid";
import { TripsPreview } from "../components/TripsPreview";

const Dashboard = () => {
  return (
    <div className="space-y-16 px-6 py-8">
      <StatsGrid />

      <TripsPreview />
    </div>
  );
};

export default Dashboard;
