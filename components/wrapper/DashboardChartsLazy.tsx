"use client";

import dynamic from "next/dynamic";
import ChartSkeleton from "../skeletons/ChartSkeleton ";

const SalesOverview = dynamic(() => import("../charts/SalesOverview"), {
  ssr: false, // chart biasanya butuh window
  loading: () => <ChartSkeleton title="Sales Overview" />,
});

const PieChartExample = dynamic(
  () => import("../charts/CategoryDistributions"),
  {
    ssr: false,
    loading: () => (
      <ChartSkeleton
        title="Category Distribution
"
      />
    ),
  }
);

const OrderDistributions = dynamic(
  () => import("../charts/OrderDistributions"),
  {
    ssr: false,
    loading: () => <ChartSkeleton title="Order Status Disributions" />,
  }
);

const ProductPerformance = dynamic(
  () => import("../charts/ProductPerformance"),
  {
    ssr: false,
    loading: () => <ChartSkeleton title="Product Performance" />,
  }
);

const DashboardChartsLazy = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <SalesOverview />
      <PieChartExample />
      <OrderDistributions />
      <ProductPerformance />
    </div>
  );
};

export default DashboardChartsLazy;
