import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { bucket: '0-25',   count: 6200 },
  { bucket: '25-50',  count: 1800 },
  { bucket: '50-75',  count: 280  },
  { bucket: '75-100', count: 130  },
];

const getColor = (bucket) => {
  if (bucket === '0-25' || bucket === '25-50') return '#14B8A6';
  if (bucket === '50-75') return '#F59E0B';
  return '#EF4444';
};

export default function RiskScoreChart() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#161922', borderRadius: 8, padding: 16 }}>
      <p style={{ color: '#6B7280', fontSize: 11, textTransform: 'uppercase', marginBottom: 12 }}>
        Risk Score Distribution
      </p>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E2235" vertical={false} />
            <XAxis
              dataKey="bucket"
              tick={{ fill: '#6B7280', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#6B7280', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={60}>
              {data.map((entry) => (
                <Cell key={entry.bucket} fill={getColor(entry.bucket)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
