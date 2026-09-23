import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="relative w-96">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search trips..."
        className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white
            pl-11
            pr-4
            py-3
            outline-none
          "
      />
    </div>
  );
};
