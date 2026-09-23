import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  PlaneIcon,
  TicketsPlaneIcon,
  PlusIcon,
  UserIcon,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    {
      label: "Dashboard",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      label: "Create Trip",
      path: "/create-trip",
      icon: <PlusIcon />,
    },
    {
      label: "My Trips",
      path: "/trips",
      icon: <TicketsPlaneIcon />,
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <UserIcon />,
    },
  ];

  return (
    <aside
      className="
        w-72
        min-h-screen
        flex
        flex-col
        p-6
        text-white
        bg-gradient-to-b
        from-slate-950
        via-blue-950
        to-slate-950
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-blue-600
            flex
            items-center
            justify-center
            text-xl
          "
        >
          <PlaneIcon />
        </div>

        <div>
          <h1 className="font-bold text-lg">Travel Planner</h1>

          <p className="text-sm text-blue-400">AI Assistant</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-10 flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              transition-all
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }
            `
            }
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* AI Card */}
      <div
        className="
          mt-auto
          rounded-2xl
          p-5
          bg-blue-900/40
          border
          border-blue-800
        "
      >
        <h3 className="font-semibold">Plan smarter with AI</h3>

        <p className="text-sm text-slate-300 mt-2">
          Generate personalized travel itineraries in seconds.
        </p>

        <button
          className="
            mt-4
            w-full
            bg-blue-600
            hover:bg-blue-700
            rounded-xl
            py-2
            font-medium
            transition
          "
        >
          Try AI Planner
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
