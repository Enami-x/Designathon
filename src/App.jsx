import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import MetricTile from './components/MetricTile.jsx';
import LiveAlertFeed from './components/LiveAlertFeed.jsx';
import RiskScoreChart from './components/RiskScoreChart.jsx';
import ShapPanel from './components/ShapPanel.jsx';
import FraudNetworkGraph from './components/FraudNetworkGraph.jsx';
import TransactionDrawer from './components/TransactionDrawer.jsx';
import TrendChart from './components/TrendChart.jsx';
import BaselineChart from './components/BaselineChart.jsx';
import { mockAlerts, mockMetrics } from './data/mockData.js';
import { formatCurrency } from './utils/format.js';

export default function App() {
  const [activeView, setActiveView] = useState('analyst');
  const [alertFeed, setAlertFeed] = useState(mockAlerts);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [flaggedIds, setFlaggedIds] = useState(new Set());

  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
    setDrawerOpen(true);
  };

  const handleNodeClick = (alertId) => {
    const target = alertFeed.find((a) => a.id === alertId) || mockAlerts.find((a) => a.id === alertId);
    if (target) {
      handleAlertClick(target);
    }
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedAlert(null);
  };

  const handleFlag = (alert) => {
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(alert.id)) {
        next.delete(alert.id);
      } else {
        next.add(alert.id);
      }
      return next;
    });
  };

  const handleMarkSafe = (alert) => {
    setAlertFeed((prev) => prev.filter((a) => a.id !== alert.id));
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      next.delete(alert.id);
      return next;
    });
    if (selectedAlert?.id === alert.id) {
      handleCloseDrawer();
    }
  };

  const metrics = useMemo(
    () => ([
      { label: 'Critical Alerts', value: mockMetrics.criticalAlerts, color: '#EF4444' },
      { label: 'High-Risk Entities', value: mockMetrics.highRisk, color: '#F59E0B' },
      { label: 'Transactions Today', value: mockMetrics.transactionsToday.toLocaleString(), color: '#3B82F6' },
      { label: 'False Positive Rate', value: mockMetrics.falsePositiveRate, color: '#14B8A6' },
    ]),
    []
  );

  return (
    <div className="min-h-screen bg-fraud-bg text-white">
      <Navbar activeView={activeView} onChangeView={setActiveView} />

      <main className="p-4 md:p-6 space-y-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {metrics.map((m) => (
            <MetricTile key={m.label} label={m.label} value={m.value} color={m.color} />
          ))}
        </div>

        {activeView === 'analyst' ? (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="space-y-4">
              <LiveAlertFeed
                alerts={alertFeed}
                selectedId={selectedAlert?.id}
                onAlertClick={handleAlertClick}
                flaggedIds={flaggedIds}
              />
              <RiskScoreChart />
            </div>

            <div className="space-y-4">
              <ShapPanel transactionId={selectedAlert?.id || '—'} />
              <TrendChart />
            </div>

            <div className="space-y-4">
              <FraudNetworkGraph onNodeClick={handleNodeClick} />
              <BaselineChart />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TrendChart />
            <BaselineChart />
            <RiskScoreChart />
            <FraudNetworkGraph onNodeClick={handleNodeClick} />
          </div>
        )}
      </main>

      <TransactionDrawer
        open={drawerOpen}
        alert={selectedAlert}
        onClose={handleCloseDrawer}
        onFlag={handleFlag}
        onMarkSafe={handleMarkSafe}
        flagged={selectedAlert ? flaggedIds.has(selectedAlert.id) : false}
      />
    </div>
  );
}
