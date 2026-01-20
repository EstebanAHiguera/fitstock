import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { mes: 'Jun', preventivo: 12, correctivo: 5 },
  { mes: 'Jul', preventivo: 15, correctivo: 3 },
  { mes: 'Ago', preventivo: 10, correctivo: 7 },
  { mes: 'Sep', preventivo: 18, correctivo: 4 },
  { mes: 'Oct', preventivo: 14, correctivo: 6 },
  { mes: 'Nov', preventivo: 16, correctivo: 2 },
];

export function MaintenanceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="mes" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
          }}
        />
        <Legend />

        <Line
          type="monotone"
          dataKey="preventivo"
          stroke="#1a5f3f"
          strokeWidth={3}
          name="Preventivo"
          dot={{ fill: '#1a5f3f', r: 5 }}
        />

        <Line
          type="monotone"
          dataKey="correctivo"
          stroke="#ffd700"
          strokeWidth={3}
          name="Correctivo"
          dot={{ fill: '#ffd700', r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
