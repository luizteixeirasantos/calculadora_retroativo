import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ChartResult({ result }) {
  const data = [
    { name: "Retroativo", value: result.retroValue },
    { name: "13°", value: result.thirteenth },
    { name: "INSS", value: result.inssValue },
  ];

  const colors = ["#3b82f6", "#22c55e", "#ef4444"];

  return (
    <div className="flex justify-center mt-6">
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={120}>
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  );
}
