export function NotesTab() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5">
      <textarea
        placeholder="Add a note about this trip..."
        rows={6}
        className="w-full resize-none border-0 focus:ring-0 text-sm text-gray-700 placeholder:text-gray-400"
        disabled
      />
      <p className="text-xs text-gray-400 mt-2">
        Notes s'janë ende funksionale — do lidhen me backend më vonë.
      </p>
    </div>
  );
}
