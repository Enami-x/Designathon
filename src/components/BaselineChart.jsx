import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { mockBaselineData } from '../data/mockData.js';

export default function BaselineChart() {
  return (
    <div className="card p-4 h-full">
      <div className="font-semibold text-white mb-3">Baseline Drift</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockBaselineData} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E2235" />
            <XAxis dataKey="day" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#11131b', border: '1px solid #2D3148', borderRadius: 8 }} />
            <Line type="monotone" dataKey="amount" stroke="#A855F7" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
