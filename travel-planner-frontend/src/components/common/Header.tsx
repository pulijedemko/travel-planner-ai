import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react";
import ProfileDropdown from "../../features/profile/components/ProfileDropdown";
import { getPageMeta } from "../../utils/PageMeta";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { title, subtitle } = getPageMeta(location.pathname);

  return (
    <header className="flex items-start justify-between px-8 py-6 border-b border-slate-200 bg-white">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-slate-500">{subtitle}</p>}
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="rounded-xl p-2 hover:bg-slate-100">
          <Bell size={22} />
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 rounded-xl p-2 hover:bg-slate-100"
          >
            <img
              src="https://i.pravatar.cc/100"
              className="h-10 w-10 rounded-full"
            />
            <span className="font-medium">Ahmed</span>
            <ChevronDown
              size={18}
              className={`transition ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && <ProfileDropdown onClose={() => setOpen(false)} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
