import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Abr", value: 20 },
  { name: "Mai", value: 28 },
  { name: "Jun", value: 25 },
  { name: "Jul", value: 32 },
  { name: "Ago", value: 41 },
];

export default function SalesChart() {
  return (
    <div className="w-full h-64 bg-black rounded-2xl p-4">
      <h2 className="text-gray-200 text-lg mb-4">Vendas realizadas</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1c1c1c",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Bar dataKey="value" fill="url(#colorGradient)" radius={[10, 10, 0, 0]} />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5555ff" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
