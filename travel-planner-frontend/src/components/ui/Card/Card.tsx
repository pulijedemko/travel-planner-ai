interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  title: string;
  iconBg: string;
  iconColor: string;
}

const Card = ({ icon, value, title, iconBg, iconColor }: StatCardProps) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        border
        border-slate-100
      "
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-3xl font-bold">{value}</h3>

          <p className="text-slate-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
