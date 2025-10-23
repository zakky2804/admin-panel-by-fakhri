"use client";

import { useDatatore } from "@/store/dataStore";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SalesOverview = () => {
  const { sales } = useDatatore();

  return (
    <section className="bg-card py-4 rounded-md">
      <h2 className="mb-4 pl-4"> Sales Overview </h2>
      <div className="h-64 xl:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={730}
            height={250}
            data={sales}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="name" fontFamily="roboto" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e1e",
                borderColor: "#4b5563",
                fontSize: "12px",
                fontFamily: "outfit",
                borderRadius: "5px",
                border: "1px solid #374151",
              }}
              //   itemStyle={{ color: "#e5e7eb" }} // buat ngatur tulisan di dalam hover
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default SalesOverview;
