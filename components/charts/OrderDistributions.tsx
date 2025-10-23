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

const OrderDistributions = () => {
  const { orderStatus } = useDatatore();

  return (
    <section className="bg-card px-4 py-4 rounded-md">
      <h2 className="mb-4 text-lg">Order Status Disributions</h2>

      <div className="h-64 xl:h-80 w-full ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={orderStatus}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fontFamily="roboto"
              fontSize="0.875rem"
              //   fill="#8884d8"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {orderStatus.map((_, index) => (
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
                borderRadius: "5px",
                fontFamily: "roboto",
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

export default OrderDistributions;
