"use client";

import dynamic from "next/dynamic";
import TableSkeleton from "../skeletons/TableSkeleton";

const ProductTableLazy = () => {
  const ProductList = dynamic(() => import("../tables/ProductTable"), {
    ssr: false,
    loading: () => <TableSkeleton />,
  });
  return <ProductList />;
};

export default ProductTableLazy;
