import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { categoria: "Cardio", cantidad: 35, disponibles: 32 },
  { categoria: "Pesas", cantidad: 45, disponibles: 40 },
  { categoria: "Máquinas", cantidad: 28, disponibles: 20 },
  { categoria: "Funcional", cantidad: 16, disponibles: 14 },
];

export function EquipmentChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="categoria" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        />
        <Legend />
        <Bar
          dataKey="cantidad"
          fill="#1a5f3f"
          name="Total"
          radius={[8, 8, 0, 0]}
        />
        <Bar
          dataKey="disponibles"
          fill="#ffd700"
          name="Disponibles"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
