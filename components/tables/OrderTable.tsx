"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { useDatatore } from "@/store/dataStore";
import ModalForm from "../ui/ModalForm";
import toast from "react-hot-toast";

import { Order } from "@/interfaces/interface";
import OrderForm from "../forms/OrderForm";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  image: string;
}

const OrderTable = () => {
  const { orders, deleteOrder, getOrderById, updateOrder, addOrder } =
    useDatatore();

  const [globalFilter, setGlobalFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [productEdited, setProductEdited] = useState<Order | null>(null);

  const handleDelete = useCallback(
    (id: string) => {
      deleteOrder(id);
      toast.success("Deleted");
    },
    [deleteOrder]
  );

  const handleUpdate = useCallback(
    (id: string) => {
      const dataEdit = getOrderById(id);
      setProductEdited(dataEdit);
      setIsOpen(true);
    },
    [getOrderById]
  );

  const handleAddProduct = () => {
    setProductEdited(null);
    setIsOpen(true);
  };

  const columns = useMemo<ColumnDef<Order>[]>(
    () => [
      {
        header: "Order ID",
        accessorKey: "id",
      },
      {
        header: "Client",
        accessorKey: "client",
        cell: ({ row }) => {
          const product = row.original;
          return (
            <div className="">
              <p className="mb-1 font-semibold"> {product.client} </p>
              <p className="text-xs text-foreground/90"> {product.email} </p>
            </div>
          );
        },
      },
      { header: "Product", accessorKey: "product" },
      { header: "Total", accessorKey: "total" },
      { header: "Status", accessorKey: "status" },
      { header: "Date", accessorKey: "date" },
      {
        header: "Actions",
        cell: ({ row }) => {
          const product = row.original;
          return (
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate(product.id)}
                className="p-1 text-blue-500 hover:text-blue-700"
                title="Edit"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="p-1 text-red-500 hover:text-red-700"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          );
        },
      },
    ],
    [handleDelete, handleUpdate]
  );

  const table = useReactTable({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="bg-card rounded-md p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold mb-4 ">Orders</h2>

        <div className="flex items-center gap-2">
          <div className="relative h-fit">
            <input
              type="text"
              placeholder="Search..."
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-8 py-2 rounded-md text-white bg-accent w-60 active:outline-none font-Outfit"
            />
            <Search size={20} className="absolute top-2 left-2" />
          </div>
          <button
            className="px-4 py-2 flex items-center rounded-lg bg-secondary gap-1"
            onClick={() => handleAddProduct()}
          >
            <span className="">Add Product</span>
            <Plus size={16} />
          </button>
        </div>
        <ModalForm isOpen={isOpen} setIsOpen={setIsOpen}>
          <OrderForm
            setIsOpen={setIsOpen}
            productEdited={productEdited}
            updateProduct={updateOrder}
            addProduct={addOrder}
          />
        </ModalForm>
      </div>

      <table className="w-full">
        <thead className="border-b border-border">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-3 py-2 text-left uppercase">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-accent rounded-md">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
