import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { mockTrendData } from '../data/mockData.js';

export default function TrendChart() {
  return (
    <div className="card p-4 h-full">
      <div className="font-semibold text-white mb-3">Weekly Trend</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockTrendData} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E2235" />
            <XAxis dataKey="day" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="right" orientation="right" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#11131b', border: '1px solid #2D3148', borderRadius: 8 }} />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="volume"
              name="Volume"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.25}
              strokeWidth={2}
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="fraudRate"
              name="Fraud Rate"
              stroke="#EF4444"
              fill="#EF4444"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
