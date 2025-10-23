"use client";

import { useDatatore } from "@/store/dataStore";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface Product {
  name: string;
  Retention: number;
  Revenue: number;
  Profit: number;
}

const ProductPerformance = () => {
  const { productPerformance } = useDatatore();

  return (
    <section className="bg-card py-4 rounded-md px-2">
      <h2 className="mb-4 pl-4">Product Performance </h2>

      <div className="h-64 xl:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={productPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="name" fontFamily="roboto" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e1e",
                borderColor: "#4b5563",
                fontSize: "12px",
                fontFamily: "roboto",
                borderRadius: "5px",
                border: "1px solid #374151",
              }}
              //   itemStyle={{ color: "#e5e7eb" }} // buat ngatur tulisan di dalam hover
            />
            <Legend wrapperStyle={{ fontSize: "0.75rem" }} />
            <Bar dataKey="Retention" radius={[4, 4, 0, 0]} fill="#ff7043" />
            <Bar dataKey="Revenue" radius={[4, 4, 0, 0]} fill="#29b6f6" />
            <Bar dataKey="Profit" radius={[4, 4, 0, 0]} fill="#66bb6a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ProductPerformance;
