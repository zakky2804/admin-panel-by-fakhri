"use client";

import { Order } from "@/interfaces/interface";
import { useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "../ui/DatePicker";
import { useDatatore } from "@/store/dataStore";

interface OrderFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productEdited: Order | null;
  updateProduct: (data: Order) => void;
  addProduct: (data: Order) => void;
}

const OrderForm = ({
  setIsOpen,
  productEdited,
  updateProduct,
  addProduct,
}: OrderFormProps) => {
  const { clients, products } = useDatatore();
  const [formData, setFormData] = useState(
    productEdited || {
      id: "#D" + Date.now().toString(),
      client: "",
      product: "",
      quantity: 0,
      email: "",
      total: 0,
      status: "",
      date: "",
      country: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("quantity", formData);

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const product = products.find(
      (product) => product.name === formData.product
    );

    if (product) {
      const quantity = Number(e.target.value);
      const total = Math.round(product.price * quantity * 100) / 100;
      setFormData({ ...formData, quantity, total });
    }
  };

  const handleChangeClientInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.value;
    const client = clients.find((client) => client.name === name);

    if (client) {
      setFormData({ ...formData, client: client.name, email: client.email });
    }
  };

  const handleChangeProductInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.value;
    const product = products.find((product) => product.name === name);

    if (product) {
      const quantity = formData.quantity || 1;
      const total = Math.round(product.price * quantity * 100) / 100;
      setFormData({
        ...formData,
        product: product.name,
        total,
        quantity: quantity,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
        <label className="block text-sm font-medium mb-1">Client Name</label>
        <select
          name="client"
          value={formData.client}
          onChange={handleChangeClientInput}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-card"
        >
          <option value="">-- Select client --</option>
          {clients.map(({ id, name }) => (
            <option value={name} key={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Product</label>
        <select
          name="product"
          value={formData.product}
          onChange={handleChangeProductInput}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-card"
        >
          <option value="">-- Select Product --</option>
          {products.map(({ id, name }) => (
            <option value={name} key={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Quantity</label>
        <input
          type="number"
          min={1}
          name="quantity"
          value={formData.quantity || ""}
          onChange={handleQuantity}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="10"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Total</label>
        <input
          type="text"
          name="total"
          value={formData.total || ""}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="10"
          readOnly
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-card"
        >
          <option value="">-- Select Status --</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>

      <DatePicker
        onChange={handleChange}
        name="date"
        value={formData.date ? formData.date : ""}
      />
      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <input
          type="text"
          name="country"
          placeholder="Malaysia"
          value={formData.country || ""}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default OrderForm;
