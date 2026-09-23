import { useState } from "react";

const styles = ["Adventure", "Relax", "Food", "Shopping", "Culture", "Nature"];

const TravelStyleSelector = () => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style)
        ? prev.filter((item) => item !== style)
        : [...prev, style],
    );
  };

  return (
    <div>
      <label className="mb-3 block font-medium">Travel Style</label>

      <div className="grid grid-cols-3 gap-3">
        {styles.map((style) => {
          const isSelected = selectedStyles.includes(style);

          return (
            <button
              key={style}
              type="button"
              onClick={() => toggleStyle(style)}
              className={`
                rounded-xl
                border
                py-3
                font-medium
                transition-all
                ${
                  isSelected
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-300 bg-white hover:border-blue-600 hover:bg-blue-50"
                }
              `}
            >
              {style}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TravelStyleSelector;
