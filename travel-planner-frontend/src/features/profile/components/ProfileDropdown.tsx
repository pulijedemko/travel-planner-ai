import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void;
}

const ProfileDropdown = ({ onClose }: Props) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
    onClose();
  };

  const handleLogout = () => {
    console.log("Logout");

    // later:
    // localStorage.removeItem("token");
    // navigate("/login");

    onClose();
  };

  return (
    <div
      className="
        absolute
        right-0
        top-14
        z-50
        w-56
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-xl
      "
    >
      <button
        onClick={handleProfile}
        className="
          flex
          w-full
          items-center
          gap-3
          px-4
          py-3
          transition
          hover:bg-slate-100
        "
      >
        <User size={18} />
        Go to Profile
      </button>

      <div className="border-t border-slate-200" />

      <button
        onClick={handleLogout}
        className="
          flex
          w-full
          items-center
          gap-3
          px-4
          py-3
          text-red-600
          transition
          hover:bg-red-50
        "
      >
        <LogOut size={18} />
        Log Out
      </button>
    </div>
  );
};

export default ProfileDropdown;
