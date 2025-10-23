"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { useDatatore } from "@/store/dataStore";
import { Product } from "@/interfaces/interface";
import toast from "react-hot-toast";

import dynamic from "next/dynamic";

const ModalForm = dynamic(() => import("../ui/ModalForm"), { ssr: false });
const ProductFrom = dynamic(() => import("../forms/ProductFrom"), {
  ssr: false,
});

const ProductTable = () => {
  const { products, deleteProduct, getProductById, updateProduct, addProduct } =
    useDatatore();

  const [globalFilter, setGlobalFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [productEdited, setProductEdited] = useState<Product | null>(null);

  const handleDelete = useCallback(
    (id: string) => {
      deleteProduct(id);
      toast.success("Deleted");
    },
    [deleteProduct]
  );

  const handleUpdate = useCallback(
    (id: string) => {
      const dataEdit = getProductById(id);
      setProductEdited(dataEdit);
      setIsOpen(true);
    },
    [getProductById]
  );

  const handleAddProduct = () => {
    setProductEdited(null);
    setIsOpen(true);
  };

  const columns = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        cell: ({ row }) => {
          const product = row.original;
          return (
            <div className="flex items-center gap-3 ">
              <Image
                width={50}
                height={50}
                src={product.image || "/dummy.png"}
                alt={product.name}
                className="rounded-full w-10 h-10 object-cover"
              />
              <span>{product.name}</span>
            </div>
          );
        },
      },
      { header: "Product ID", accessorKey: "id" },
      { header: "Category", accessorKey: "category" },
      { header: "Price", accessorKey: "price" },
      { header: "Stock", accessorKey: "stock" },
      { header: "Sales", accessorKey: "sales" },
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
    data: products,
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
        <h2 className="text-xl font-semibold mb-4 ">Product List</h2>

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
            className="px-4 py-2 flex items-center rounded-md bg-secondary text-white gap-1"
            onClick={() => handleAddProduct()}
          >
            <span className="">Add Product</span>
            <Plus size={16} />
          </button>
        </div>
        <ModalForm isOpen={isOpen} setIsOpen={setIsOpen}>
          <ProductFrom
            setIsOpen={setIsOpen}
            productEdited={productEdited}
            updateProduct={updateProduct}
            addProduct={addProduct}
          />
        </ModalForm>
      </div>

      <table className="w-full ">
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

export default ProductTable;
