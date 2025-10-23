"use client";

import dynamic from "next/dynamic";
import TableSkeleton from "../skeletons/TableSkeleton";

const OrderTableLazy = () => {
  const OrderTable = dynamic(() => import("../tables/OrderTable"), {
    ssr: false,
    loading: () => <TableSkeleton />,
  });
  return <OrderTable />;
};

export default OrderTableLazy;
