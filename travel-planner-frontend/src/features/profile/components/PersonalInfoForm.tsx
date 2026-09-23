import { useState } from "react";

const PersonalInfoForm = () => {
  const [form, setForm] = useState({
    name: "Ahmed Al Mansoori",
    email: "ahmed@example.com",
    location: "Abu Dhabi, UAE",
    bio: "I love exploring new places and cultures.",
  });

  return (
    <form className="max-w-xl space-y-6">
      <h2 className="text-2xl font-semibold">Personal Information</h2>

      <div>
        <label className="mb-2 block">Full Name</label>

        <input
          className="w-full rounded-xl border border-slate-300 p-3"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block">Email</label>

        <input
          className="w-full rounded-xl border border-slate-300 p-3"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block">Location</label>

        <input
          className="w-full rounded-xl border border-slate-300 p-3"
          value={form.location}
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block">Bio</label>

        <textarea
          rows={4}
          className="w-full rounded-xl border border-slate-300 p-3"
          value={form.bio}
          onChange={(e) =>
            setForm({
              ...form,
              bio: e.target.value,
            })
          }
        />
      </div>

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
        Save Changes
      </button>
    </form>
  );
};

export default PersonalInfoForm;
