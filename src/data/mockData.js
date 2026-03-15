export const mockAlerts = [
  { id: 'UPI0041', severity: 'CRITICAL', amount: 48200, riskScore: 97 },
  { id: 'UPI0038', severity: 'CRITICAL', amount: 35800, riskScore: 89 },
  { id: 'UPI0035', severity: 'HIGH',     amount: 12500, riskScore: 74 },
  { id: 'UPI0031', severity: 'HIGH',     amount: 9200,  riskScore: 61 },
  { id: 'UPI0029', severity: 'MEDIUM',   amount: 5400,  riskScore: 43 },
  { id: 'UPI0024', severity: 'LOW',      amount: 2100,  riskScore: 28 },
];

export const mockMetrics = {
  criticalAlerts: 14,
  highRisk: 37,
  transactionsToday: 8412,
  falsePositiveRate: '0.3%',
};

export const mockRiskDistribution = [
  { bucket: '0-25',  count: 6200 },
  { bucket: '25-50', count: 1800 },
  { bucket: '50-75', count: 280  },
  { bucket: '75-100',count: 130  },
];

export const mockShapFeatures = [
  { name: 'Transaction Velocity', value: 0.82, direction: 'fraud'      },
  { name: 'Device Mismatch',      value: 0.61, direction: 'fraud'      },
  { name: 'Amount Deviation',     value: 0.55, direction: 'fraud'      },
  { name: 'Time-of-Day Anomaly',  value: 0.30, direction: 'legitimate' },
  { name: 'Recipient Risk Tier',  value: 0.50, direction: 'fraud'      },
];

export const mockAnchorRule =
  'IF transaction velocity > 8/hr AND device ≠ registered device → FRAUD (Precision: 99.6%)';

export const mockTransactionDetail = {
  id: 'UPI0041',
  senderVPA: 'ram.kumar@upi',
  receiverVPA: 'merchant_447@upi',
  amount: 48200,
  timestamp: '2024-01-15 14:32:07',
  deviceId: 'DEV_447',
  ip: '192.168.4.203',
  location: 'Mumbai, MH',
  riskScore: 97,
  severity: 'CRITICAL',
};

export const mockNetworkNodes = [
  { id: 'UPI0041', type: 'transaction', riskScore: 97,  severity: 'CRITICAL' },
  { id: 'UPI0038', type: 'transaction', riskScore: 89,  severity: 'CRITICAL' },
  { id: 'UPI0035', type: 'transaction', riskScore: 74,  severity: 'HIGH'     },
  { id: 'UPI0031', type: 'transaction', riskScore: 61,  severity: 'HIGH'     },
  { id: 'UPI0029', type: 'transaction', riskScore: 43,  severity: 'MEDIUM'   },
  { id: 'DEV_447', type: 'device',      riskScore: 0,   severity: 'NONE'     },
  { id: 'DEV_112', type: 'device',      riskScore: 0,   severity: 'NONE'     },
  { id: 'IP_203',  type: 'ip',          riskScore: 0,   severity: 'NONE'     },
  { id: 'IP_891',  type: 'ip',          riskScore: 0,   severity: 'NONE'     },
];

export const mockNetworkLinks = [
  { source: 'UPI0041', target: 'DEV_447' },
  { source: 'UPI0038', target: 'DEV_447' },
  { source: 'UPI0035', target: 'DEV_112' },
  { source: 'UPI0031', target: 'DEV_112' },
  { source: 'UPI0041', target: 'IP_203'  },
  { source: 'UPI0038', target: 'IP_203'  },
  { source: 'UPI0035', target: 'IP_891'  },
  { source: 'UPI0029', target: 'IP_891'  },
];

export const mockTrendData = [
  { day: 'Mon', fraudRate: 0.4, volume: 6000  },
  { day: 'Tue', fraudRate: 0.3, volume: 6800  },
  { day: 'Wed', fraudRate: 0.8, volume: 9800  },
  { day: 'Thu', fraudRate: 0.5, volume: 7200  },
  { day: 'Fri', fraudRate: 0.3, volume: 7800  },
  { day: 'Sat', fraudRate: 0.3, volume: 5400  },
  { day: 'Sun', fraudRate: 0.2, volume: 4200  },
];

export const mockBaselineData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  amount: 5000 + Math.random() * 3000,
}));
