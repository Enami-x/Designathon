import { mockShapFeatures, mockAnchorRule } from '../data/mockData.js';

export default function ShapPanel({ transactionId, className }) {
  return (
    <div
      className={`h-full rounded-lg border border-border-subtle bg-[#161922] p-4 overflow-hidden flex flex-col gap-3 ${className || ''}`}
    >
      <div className="flex items-center justify-between">
        <div className="font-semibold text-white">Explanation — {transactionId || 'Select an alert'}</div>
        <div className="text-xs text-gray-500">SHAP-style</div>
      </div>
      <div className="space-y-2 flex-1">
        {mockShapFeatures.map((feat) => {
          const isFraud = feat.direction === 'fraud';
          const barWidth = `${feat.value * 100}%`;
          return (
            <div key={feat.name} className="flex items-center gap-3">
              <div className="w-[120px] text-xs text-gray-300">{feat.name}</div>
              <div className="relative flex-1 h-3 bg-[#0d1019] rounded-full overflow-hidden border border-border-subtle">
                <div
                  className="absolute top-0 h-full"
                  style={{
                    width: barWidth,
                    background: isFraud ? '#EF4444' : '#3B82F6',
                    left: isFraud ? 0 : 'auto',
                    right: isFraud ? 'auto' : 0
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-2 border border-border-subtle rounded-md bg-[#1E2235] p-3 text-xs font-mono text-gray-200" style={{ borderLeft: '3px solid #A855F7' }}>
        {mockAnchorRule}
      </div>
    </div>
  );
}
