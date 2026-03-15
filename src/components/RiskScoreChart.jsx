import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts';
import { mockRiskDistribution } from '../data/mockData.js';

const barColors = {
  '0-25': '#14B8A6',
  '25-50': '#14B8A6',
  '50-75': '#F59E0B',
  '75-100': '#EF4444'
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="card p-2 text-xs">
        <div className="font-semibold text-white">{label}</div>
        <div className="text-gray-300">Count: {payload[0].value}</div>
      </div>
    );
  }
  return null;
};

export default function RiskScoreChart() {
  return (
    <div className="card p-4 h-full">
      <div className="font-semibold mb-3 text-white">Risk Distribution</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockRiskDistribution} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
            <CartesianGrid stroke="#1E2235" strokeDasharray="3 3" />
            <XAxis dataKey="bucket" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1E2235' }} />
            <Bar dataKey="count" radius={[6, 6, 0, 0]}>
              {mockRiskDistribution.map((entry) => (
                <Cell key={entry.bucket} fill={barColors[entry.bucket]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
