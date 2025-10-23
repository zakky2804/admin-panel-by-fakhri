"use client";

import { Product } from "@/interfaces/interface";
import { useState } from "react";
import toast from "react-hot-toast";
import ImageUpload from "../ui/ImageUpload";

interface FormEditProductProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productEdited: Product | null;
  updateProduct: (data: Product) => void;
  addProduct: (data: Product) => void;
}

const FormEditProduct = ({
  setIsOpen,
  productEdited,
  updateProduct,
  addProduct,
}: FormEditProductProps) => {
  const [formData, setFormData] = useState(
    productEdited || {
      id: "#D" + Date.now().toString(),
      name: "",
      category: "",
      price: 0,
      stock: 0,
      sales: 0,
      image: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (imageUrlPreview: string) => {
    // setImagePathPreview(imageUrlPreview);
    console.log(imageUrlPreview);

    setFormData({ ...formData, image: imageUrlPreview });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (productEdited) {
      updateProduct(formData);
      toast.success("Updated.");
    } else {
      addProduct(formData);
      toast.success("Added.");
    }

    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      {productEdited ? (
        <div>
          <label className="block text-sm font-medium mb-1">Product ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            readOnly
            className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : (
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          hidden
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Laptop"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-secondary text-white"
        >
          <option value="">-- Select Category --</option>
          <option value="Home">Home</option>
          <option value="Electronics">Electronics</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Price</label>
        <input
          type="text"
          name="price"
          value={formData.price || ""}
          onChange={handleChange}
          placeholder="2000"
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Stock</label>
        <input
          type="text"
          name="stock"
          placeholder="20"
          value={formData.stock || ""}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Sales</label>
        <input
          type="text"
          name="sales"
          placeholder="0"
          value={formData.sales || ""}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="col-span-2">
        <ImageUpload
          handleChangeImage={handleChangeImage}
          pathImage={productEdited?.image || ""}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 col-span-2">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 border border-border rounded-lg hover:bg-accent"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormEditProduct;
