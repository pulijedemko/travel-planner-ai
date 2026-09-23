import { Briefcase, MapPin, Calendar, Star } from "lucide-react";
import Card from "../../../components/ui/Card/Card";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Card
        title="Total Trips"
        value="8"
        icon={<Briefcase />}
        iconBg="bg-blue-100"
        iconColor="text-blue-500"
      />

      <Card
        title="Countries"
        value="5"
        icon={<MapPin />}
        iconBg="bg-green-100"
        iconColor="text-green-500"
      />

      <Card
        title="Days Traveled"
        value="32"
        icon={<Calendar />}
        iconBg="bg-yellow-100"
        iconColor="text-yellow-500"
      />

      <Card
        title="Avg. Rating"
        value="4.8"
        icon={<Star />}
        iconBg="bg-purple-100"
        iconColor="text-purple-500"
      />
    </div>
  );
};

export default StatsGrid;
