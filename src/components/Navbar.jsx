import { motion } from 'framer-motion';
import clsx from 'clsx';

const tabs = [
  { key: 'analyst', label: 'Analyst' },
  { key: 'executive', label: 'Executive' }
];

export default function Navbar({ activeView, onChangeView }) {
  return (
    <header className="w-full h-12 flex items-center justify-between px-4 md:px-6 bg-card-dark border-b border-border-subtle">
      <div className="text-white font-semibold tracking-tight">UPI FraudShield</div>
      <div className="flex gap-2 bg-[#11131b] p-1 rounded-lg border border-border-subtle">
        {tabs.map((tab) => {
          const isActive = activeView === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onChangeView(tab.key)}
              className={clsx(
                'relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                isActive ? 'text-white' : 'text-gray-300'
              )}
            >
              <motion.span
                className="absolute inset-0 rounded-md"
                layoutId="activeTab"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{
                  backgroundColor: isActive ? '#3B82F6' : 'transparent',
                  opacity: isActive ? 1 : 0
                }}
              />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
