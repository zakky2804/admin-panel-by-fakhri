"use client";

import { Client } from "@/interfaces/interface";
import { useState } from "react";
import toast from "react-hot-toast";
import ImageUpload from "../ui/ImageUpload";

interface ClientFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productEdited: Client | null;
  updateProduct: (data: Client) => void;
  addProduct: (data: Client) => void;
}

const ClientForm = ({
  setIsOpen,
  productEdited,
  updateProduct,
  addProduct,
}: ClientFormProps) => {
  const [formData, setFormData] = useState(
    productEdited || {
      id: "#D" + Date.now().toString(),
      name: "",
      email: "",
      phoneNumber: "",
      country: "",
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
          placeholder="Jonh"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="jong@gmail.com"
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          placeholder="081234567890"
          value={formData.phoneNumber || ""}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <input
          type="text"
          name="country"
          placeholder="Malaysia"
          value={formData.country || ""}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
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

export default ClientForm;
