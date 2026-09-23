import { MapPin } from "lucide-react";

const DestinationInput = () => {
  return (
    <div>
      <label className="mb-2 block font-medium">Destination</label>

      <div className="relative">
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="
          w-full
          rounded-xl
          border
          border-slate-300
          p-4
          pr-12
          outline-none
          focus:border-blue-500
        "
        />

        <MapPin className="absolute right-4 top-4 text-slate-400" size={20} />
      </div>
    </div>
  );
};

export default DestinationInput;
