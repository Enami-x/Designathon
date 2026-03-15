import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { formatCurrency, severityColors, severityBg } from '../utils/format.js';

export default function LiveAlertFeed({ alerts, selectedId, onAlertClick, flaggedIds, className }) {
  return (
    <div
      className={clsx(
        'h-full flex flex-col rounded-lg border border-border-subtle bg-[#161922] p-4 overflow-hidden',
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-white">Live Alerts</div>
        <div className="text-xs text-gray-500">Click to inspect</div>
      </div>
      <div className="overflow-auto space-y-2 pr-1 scrollbar-thin">
        <AnimatePresence>
          {alerts.map((alert) => {
            const isSelected = alert.id === selectedId;
            const color = severityColors[alert.severity] || '#6B7280';
            const badgeBg = severityBg[alert.severity] || 'bg-[#6B728015]';
            return (
              <motion.button
                key={alert.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                onClick={() => onAlertClick(alert)}
                className={clsx(
                  'w-full text-left rounded-md px-3 py-3 border flex items-center gap-3 transition-colors',
                  badgeBg,
                  isSelected ? 'border-[1.5px]' : 'border border-transparent'
                )}
                style={{ borderColor: isSelected ? color : 'transparent', boxShadow: isSelected ? `inset 4px 0 0 0 ${color}` : 'none' }}
              >
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  {alert.severity}
                  {flaggedIds.has(alert.id) && ' 🚩'}
                </span>
                <div className="flex-1">
                  <div className="text-sm text-white font-medium">{alert.id}</div>
                  <div className="text-xs text-gray-400">{formatCurrency(alert.amount)} · Risk {alert.riskScore}</div>
                </div>
                <div className="text-sm font-semibold" style={{ color }}>
                  {alert.riskScore}
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
