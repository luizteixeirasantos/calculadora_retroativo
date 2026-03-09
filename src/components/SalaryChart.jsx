import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#16a34a", "#dc2626"];

export default function SalaryChart({ history }) {
  if (!history.length) return null;

  const last = history[0];

  const data = [
    { name: "Total", value: last.total },
    { name: "Desconto", value: last.discountValue },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Distribuição do pagamento</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
