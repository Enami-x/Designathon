export const severityColors = {
  CRITICAL: '#EF4444',
  HIGH: '#F59E0B',
  MEDIUM: '#EAB308',
  LOW: '#6B7280',
  NONE: '#6B7280'
};

export const severityBg = {
  CRITICAL: 'bg-[#EF444415]',
  HIGH: 'bg-[#F59E0B10]',
  MEDIUM: 'bg-[#EAB30812]',
  LOW: 'bg-[#6B728015]',
  NONE: 'bg-[#6B728010]'
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);

export const formatPercent = (value, digits = 1) => `${(value * 100).toFixed(digits)}%`;
