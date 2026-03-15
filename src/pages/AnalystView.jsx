import MetricTile from '../components/MetricTile.jsx';
import LiveAlertFeed from '../components/LiveAlertFeed.jsx';
import RiskScoreChart from '../components/RiskScoreChart.jsx';
import ShapPanel from '../components/ShapPanel.jsx';
import FraudNetworkGraph from '../components/FraudNetworkGraph.jsx';

export default function AnalystView({
  metrics,
  alerts,
  selectedAlert,
  onAlertClick,
  flaggedIds,
  onNodeClick,
}) {
  return (
    <div className="flex flex-col gap-6 p-6 bg-[#0F1117] min-h-screen">
      {/* Row 1 */}
      <div className="flex gap-4">
        {metrics.map((m) => (
          <MetricTile key={m.label} label={m.label} value={m.value} color={m.color} className="flex-1" />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-4" style={{ height: '320px' }}>
        <div className="flex-1" style={{ flex: '0 0 55%' }}>
          <LiveAlertFeed
            alerts={alerts}
            selectedId={selectedAlert?.id}
            onAlertClick={onAlertClick}
            flaggedIds={flaggedIds}
            className="h-full"
          />
        </div>
        <div style={{ flex: '0 0 calc(45% - 16px)', height: '300px' }}>
          <RiskScoreChart />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex gap-4" style={{ height: '280px' }}>
        <div style={{ flex: '0 0 55%' }}>
          <ShapPanel transactionId={selectedAlert?.id || '—'} className="h-full" />
        </div>
        <div style={{ flex: '0 0 calc(45% - 16px)' }}>
          <FraudNetworkGraph onNodeClick={onNodeClick} className="h-full" />
        </div>
      </div>
    </div>
  );
}
