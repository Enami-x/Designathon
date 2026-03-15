import clsx from 'clsx';

export default function MetricTile({ label, value, color = '#3B82F6', subtitle, className }) {
  return (
    <div
      className={clsx('relative overflow-hidden rounded-lg bg-[#161922] border border-border-subtle p-4', className)}
    >
      <div className="absolute left-0 top-0 h-full" style={{ width: 4, backgroundColor: color }} />
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-2xl font-bold text-white mt-1">{value}</div>
      {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
    </div>
  );
}
