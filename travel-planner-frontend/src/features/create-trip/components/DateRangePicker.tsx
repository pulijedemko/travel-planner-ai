import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type RangeState = {
  startDate?: Date;
  endDate?: Date;
  key: string;
};

export default function MyDateRangePicker() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [state, setState] = useState<RangeState[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleChange = (item: any) => {
    setState([item.selection]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date?: Date) =>
    date?.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>
      <label className="mb-2 block font-medium">Destination</label>

      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          overflow: "hidden",
          cursor: "pointer",
          background: "#fff",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, padding: "10px 12px" }}>
          <div style={{ fontSize: 11, color: "#6b7280" }}>Check-in</div>
          <div style={{ fontSize: 13 }}>{formatDate(state[0].startDate)}</div>
        </div>

        <div
          style={{
            width: 1,
            background: "#e5e7eb",
          }}
        />

        <div style={{ flex: 1, padding: "10px 12px" }}>
          <div style={{ fontSize: 11, color: "#6b7280" }}>Check-out</div>
          <div style={{ fontSize: 13 }}>{formatDate(state[0].endDate)}</div>
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            zIndex: 1000,
            background: "white",
            borderRadius: 16,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            overflow: "hidden",
            marginTop: 10,
          }}
        >
          <DateRange
            ranges={state}
            onChange={handleChange}
            months={1}
            direction="horizontal"
            moveRangeOnFirstSelection={false}
          />
        </div>
      )}
    </div>
  );
}
