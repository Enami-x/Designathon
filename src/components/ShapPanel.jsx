import { mockShapFeatures, mockAnchorRule } from '../data/mockData.js';

export default function ShapPanel({ transactionId }) {
  return (
    <div className="card p-4 h-full flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-white">Explanation — {transactionId || 'Select an alert'}</div>
        <div className="text-xs text-gray-500">SHAP-style</div>
      </div>
      <div className="space-y-2">
        {mockShapFeatures.map((feat) => {
          const isFraud = feat.direction === 'fraud';
          const barWidth = `${feat.value * 100}%`;
          return (
            <div key={feat.name} className="w-full">
              <div className="text-xs text-gray-400 mb-1">{feat.name}</div>
              <div className="relative h-3 bg-[#0d1019] rounded-full overflow-hidden border border-border-subtle">
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
