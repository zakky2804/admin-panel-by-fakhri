import {
  Category,
  Client,
  DataAPI,
  Order,
  OrderStat,
  Product,
  ProductPerformance,
  Sale,
} from "@/interfaces/interface";
import { create } from "zustand";

interface ProductState {
  initial: boolean;
  sales: Sale[];
  categories: Category[];
  orderStatus: Category[];
  productPerformance: ProductPerformance[];
  orderStats: OrderStat[];

  products: Product[];
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | null;
  updateProduct: (data: Product) => void;
  addProduct: (data: Product) => void;

  orders: Order[];
  deleteOrder: (id: string) => void;
  getOrderById: (id: string) => Order | null;
  updateOrder: (data: Order) => void;
  addOrder: (data: Order) => void;

  clients: Client[];
  deleteClient: (id: string) => void;
  getClientById: (id: string) => Client | null;
  updateClient: (data: Client) => void;
  addClient: (data: Client) => void;

  salesByCategory: Category[];
  setData: (p: DataAPI) => void;
}

export const useDatatore = create<ProductState>((set, get) => ({
  initial: false,
  sales: [],
  categories: [],
  orderStatus: [],
  productPerformance: [],
  orderStats: [],
  orders: [],
  deleteOrder: (id) => {
    set((state) => ({
      orders: state.orders.filter((item) => item.id !== id),
    }));
  },
  getOrderById: (id) => {
    return get().orders.find((item) => item.id === id) || null;
  }, // ← tambahkan ini
  updateOrder: (data) =>
    set({
      orders: get().orders.map((item) => (item.id === data.id ? data : item)),
    }),
  addOrder: (data) => {
    const prevData = get().orders;
    set({
      orders: [...prevData, data],
    });
  },
  products: [],
  deleteProduct: (id) => {
    set((state) => ({
      products: state.products.filter((item) => item.id !== id),
    }));
  },
  getProductById: (id) => {
    return get().products.find((item) => item.id === id) || null;
  }, // ← tambahkan ini
  updateProduct: (data) =>
    set({
      products: get().products.map((item) =>
        item.id === data.id ? data : item
      ),
    }),
  addProduct: (data) => {
    const prevData = get().products;
    set({
      products: [...prevData, data],
    });
  },

  clients: [],
  deleteClient: (id) => {
    set((state) => ({
      clients: state.clients.filter((item) => item.id !== id),
    }));
  },
  getClientById: (id) => {
    return get().clients.find((item) => item.id.toString() === id) || null;
  }, // ← tambahkan ini
  updateClient: (data) =>
    set({
      clients: get().clients.map((item) => (item.id === data.id ? data : item)),
    }),
  addClient: (data) => {
    const prevData = get().clients;
    set({
      clients: [...prevData, data],
    });
  },

  salesByCategory: [],
  setData: (p) => {
    set({ initial: true });
    set({ sales: p["sales"] });
    set({ categories: p["categories"] });
    set({ orderStatus: p["orderStatus"] });
    set({ productPerformance: p["productPerformance"] });
    set({ orders: p["orders"] });
    set({ orderStats: p["orderStats"] });
    set({ products: p["products"] });
    set({ salesByCategory: p["salesByCategory"] });
    set({ clients: p["clients"] });
  },
}));
