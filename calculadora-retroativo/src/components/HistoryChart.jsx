import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function HistoryChart({ history }) {
  if (!history.length) return null;

  const data = history.map((h, i) => ({
    name: `Calc ${i + 1}`,
    total: h.netTotal,
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="font-bold mb-4">Evolução dos cálculos</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
