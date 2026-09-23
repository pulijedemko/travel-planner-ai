interface Props {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = [
  {
    id: "personal",
    label: "Personal Info",
  },
  {
    id: "preferences",
    label: "Preferences",
  },
  {
    id: "security",
    label: "Security",
  },
];

const ProfileSidebar = ({ activeTab, onChange }: Props) => {
  return (
    <aside className="w-72 border-r border-slate-200 p-8">
      <h1 className="mb-8 text-3xl font-bold">Profile</h1>

      <nav className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`w-full rounded-xl px-4 py-3 text-left transition

              ${
                activeTab === tab.id
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "hover:bg-slate-100"
              }

            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
