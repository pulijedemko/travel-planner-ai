import { ShieldCheck, Sparkles } from "lucide-react";

import BudgetSlider from "./BudgetSlider";
import createTripImage from "../../../assets/images/create-trip.jpg";
import DestinationInput from "./DestinationInput";
import TravelStyleSelector from "./TravelStyleSelector";
import DateRangePicker from "./DateRangePicker";

const CreateTripForm = () => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      {/* Header */}

      <img
        src={createTripImage}
        alt="Travel"
        className="h-60 w-full rounded-3xl object-cover"
      />

      {/* Title */}

      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold">Let's plan your perfect trip</h1>

        <p className="mt-3 text-slate-500">
          Tell us your preferences and our AI will generate your itinerary.
        </p>
      </div>

      {/* Form */}

      <div className="mt-10 space-y-8">
        <DestinationInput />

        <DateRangePicker />

        <BudgetSlider />

        <TravelStyleSelector />
      </div>

      {/* Generate */}

      <button
        className="
        mt-10
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-blue-600
        py-4
        text-lg
        font-semibold
        text-white
        hover:bg-blue-700
      "
      >
        Generate Itinerary
        <Sparkles size={18} />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
        <ShieldCheck size={18} />
        Your data is safe and private
      </div>
    </div>
  );
};

export default CreateTripForm;
