"use client";

import { useDatatore } from "@/store/dataStore";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

// Warna custom untuk pie chart
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82ca9d",
];

const CategoryDistributions = () => {
  const { categories } = useDatatore();
  return (
    <section className="bg-card px-4 py-4 rounded-md">
      <h2 className="mb-4 text-lg font-semibold">Category Distribution</h2>

      <div className="h-64 xl:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categories}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fontFamily="roboto"
              fontSize="0.875rem"
              outerRadius={80}
              labelLine={false}
              //   fill="#8884d8"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categories.map((_, index) => (
                <Cell
                  key={`cell-outer-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                borderColor: "#4b5563",
                fontSize: "12px",
                fontFamily: "roboto",
                borderRadius: "5px",
                border: "1px solid #374151",
              }}
              itemStyle={{ color: "#e5e7eb" }} // buat ngatur tulisan di dalam hover
            />
            <Legend wrapperStyle={{ fontSize: "0.75rem" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default CategoryDistributions;
