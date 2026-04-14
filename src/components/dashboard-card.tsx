type DashboardCardProps = {
  title: string;
  value: string;
  change: string;
};

export function DashboardCard({ title, value, change }: DashboardCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">{title}</p>
      <p className="mt-4 text-3xl font-semibold text-slate-950">{value}</p>
      <div className="mt-4 border-t border-slate-200 pt-4">
        <p className="text-sm text-primary">{change}</p>
      </div>
    </div>
  );
}
