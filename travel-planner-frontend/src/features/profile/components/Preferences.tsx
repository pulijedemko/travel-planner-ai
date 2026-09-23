import { useState } from "react";

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    darkMode: false,
    aiSuggestions: true,
    publicProfile: false,
  });

  return (
    <div className="max-w-xl space-y-8">
      <h2 className="text-2xl font-semibold">Preferences</h2>

      <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
        <span>Dark Mode</span>

        <input
          type="checkbox"
          checked={preferences.darkMode}
          onChange={() =>
            setPreferences({
              ...preferences,
              darkMode: !preferences.darkMode,
            })
          }
        />
      </label>

      <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
        <span>AI Suggestions</span>

        <input
          type="checkbox"
          checked={preferences.aiSuggestions}
          onChange={() =>
            setPreferences({
              ...preferences,
              aiSuggestions: !preferences.aiSuggestions,
            })
          }
        />
      </label>

      <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
        <span>Public Profile</span>

        <input
          type="checkbox"
          checked={preferences.publicProfile}
          onChange={() =>
            setPreferences({
              ...preferences,
              publicProfile: !preferences.publicProfile,
            })
          }
        />
      </label>

      <button
        className="
          rounded-xl
          bg-blue-600
          px-8
          py-3
          font-semibold
          text-white
          hover:bg-blue-700
        "
      >
        Save Preferences
      </button>
    </div>
  );
};
export default Preferences;
