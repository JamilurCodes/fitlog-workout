import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}

export default function MetricCard({ label, value, suffix, icon: Icon }: MetricCardProps) {
  return (
    <div className="stat rounded-2xl border border-base-300 bg-base-200 px-5 py-5">
      <div className="flex items-center justify-between gap-3">
        <p className="stat-title text-xs font-bold uppercase tracking-[0.14em] text-fit-muted">{label}</p>
        <Icon className="size-4 text-fit-accent" />
      </div>
      <p className="stat-value mt-3 font-display text-4xl font-semibold uppercase tracking-wide text-white">
        {value}
        {suffix ? <span className="ml-1 text-base font-semibold text-fit-muted">{suffix}</span> : null}
      </p>
    </div>
  );
}
