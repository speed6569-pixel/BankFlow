type DashboardCardProps = {
  title: string;
  value: string;
  change: string;
};

export function DashboardCard({ title, value, change }: DashboardCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-cyan-700">{change}</p>
    </div>
  );
}
