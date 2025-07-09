"use client";

import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type ChartData = {
  name: string;
  score: number;
};

interface BarChartProps {
  data: ChartData[];
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div className="w-[400px] text-[#e6edf3] h-[240px] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart data={data} barSize={28}>
          <CartesianGrid strokeDasharray="2 2" strokeOpacity={0.1} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#888" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 10]}
            tick={{ fontSize: 12, fill: "#888" }}
          />
          <Tooltip
            contentStyle={{ borderRadius: 8, fontSize: 12 }}
            cursor={{ fill: "transparent" }}
          />
          <Bar dataKey="score" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.name === "Behaviour" && entry.score < 4
                    ? "#DA0B0BFF"
                    : "#1f6feb"
                }
              />
            ))}
          </Bar>
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
};
