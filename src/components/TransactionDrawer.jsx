import { motion, AnimatePresence } from 'framer-motion';
import { mockTransactionDetail } from '../data/mockData.js';
import { formatCurrency, severityColors } from '../utils/format.js';

const drawerVariants = {
  hidden: { x: 420, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 420, opacity: 0 }
};

const metaFields = [
  ['Sender VPA', 'senderVPA'],
  ['Receiver VPA', 'receiverVPA'],
  ['Device', 'deviceId'],
  ['IP', 'ip'],
  ['Location', 'location'],
  ['Timestamp', 'timestamp'],
];

function RiskGauge({ score }) {
  const clamped = Math.min(Math.max(score || 0, 0), 100);
  const percent = clamped / 100;
  const angle = Math.PI * percent;
  const radius = 70;
  const cx = 100;
  const cy = 100;
  const x = cx - radius * Math.cos(angle);
  const y = cy - radius * Math.sin(angle);
  const largeArc = percent > 0.5 ? 1 : 0;
  const arcPath = `M ${cx - radius} ${cy} A ${radius} ${radius} 0 ${largeArc} 1 ${x} ${y}`;
  const needleLength = radius - 10;
  const nx = cx - needleLength * Math.cos(angle);
  const ny = cy - needleLength * Math.sin(angle);

  const stroke = clamped >= 75 ? '#EF4444' : clamped >= 50 ? '#F59E0B' : '#14B8A6';

  return (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`} stroke="#1E2235" strokeWidth="10" fill="none" />
      <path d={arcPath} stroke={stroke} strokeWidth="10" fill="none" />
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="6" fill={stroke} />
      <text x={cx} y={cy + 30} textAnchor="middle" fill="#e5e7eb" fontSize="20" fontWeight="700">
        {clamped}
      </text>
      <text x={cx} y={cy + 48} textAnchor="middle" fill="#9ca3af" fontSize="12">
        Risk Score
      </text>
    </svg>
  );
}

export default function TransactionDrawer({ open, alert, onClose, onFlag, onMarkSafe, flagged }) {
  const detail = alert ? { ...mockTransactionDetail, ...alert } : null;
  const color = detail ? severityColors[detail.severity] || '#6B7280' : '#6B7280';

  return (
    <AnimatePresence>
      {open && detail && (
        <motion.aside
          className="fixed top-0 right-0 h-full w-[420px] bg-[#161922] border-l border-border-subtle shadow-xl z-30 flex flex-col"
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
            <div className="text-sm uppercase tracking-wide text-gray-400">Transaction Detail</div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close drawer"
            >
              ✕
            </button>
          </div>

          <div className="p-4 flex flex-col gap-4 overflow-auto scrollbar-thin">
            <div className="flex items-center gap-3">
              <div className="text-lg font-semibold text-white">{detail.id}</div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: `${color}20`, color }}>
                {detail.severity}
                {flagged && ' 🚩'}
              </span>
            </div>
            <div className="text-sm text-gray-300">Amount {formatCurrency(detail.amount)} · Risk {detail.riskScore}</div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {metaFields.map(([label, key]) => (
                <div key={key} className="card p-3">
                  <div className="text-xs text-gray-500">{label}</div>
                  <div className="text-white font-medium mt-1">{detail[key]}</div>
                </div>
              ))}
            </div>

            <div className="card p-3 flex items-center justify-center">
              <RiskGauge score={detail.riskScore} />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onFlag(detail)}
                className="flex-1 px-3 py-2 rounded-md bg-[#1E2235] border border-border-subtle text-sm font-semibold text-white hover:border-purple"
              >
                Flag for Review {flagged ? '✅' : ''}
              </button>
              <button
                onClick={() => onMarkSafe(detail)}
                className="flex-1 px-3 py-2 rounded-md bg-[#0f172a] border border-[#1f2937] text-sm font-semibold text-white hover:border-[#374151]"
              >
                Mark as Safe
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
