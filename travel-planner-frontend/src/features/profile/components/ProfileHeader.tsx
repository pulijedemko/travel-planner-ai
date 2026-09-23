const ProfileHeader = () => {
  return (
    <div className="mb-12 flex items-center gap-6">
      <img
        src="https://i.pravatar.cc/200?img=12"
        alt=""
        className="h-28 w-28 rounded-full object-cover"
      />

      <div>
        <h2 className="text-3xl font-bold">Ahmed Al Mansoori</h2>

        <p className="mt-2 text-slate-500">ahmed@example.com</p>

        <button
          className="
            mt-4
            rounded-lg
            bg-blue-600
            px-5
            py-2
            text-white
            hover:bg-blue-700
          "
        >
          Change Photo
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
