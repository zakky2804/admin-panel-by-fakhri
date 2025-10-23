"use client";

import dynamic from "next/dynamic";
import TableSkeleton from "../skeletons/TableSkeleton";

const ClientTableLazy = () => {
  const ClientTable = dynamic(() => import("../tables/ClientTable"), {
    ssr: false,
    loading: () => <TableSkeleton />,
  });
  return <ClientTable />;
};

export default ClientTableLazy;
