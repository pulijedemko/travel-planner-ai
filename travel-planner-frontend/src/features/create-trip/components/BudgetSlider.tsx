const BudgetSlider = () => {
  return (
    <div>
      <label className="mb-2 block font-medium">Budget</label>

      <input type="range" min="1" max="3" defaultValue="2" className="w-full" />

      <div className="mt-2 flex justify-between text-sm text-slate-500">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
      </div>
    </div>
  );
};

export default BudgetSlider;
