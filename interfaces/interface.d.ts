export interface DataAPI {
  sales: Sale[];
  categories: Category[];
  orderStatus: Category[];
  productPerformance: ProductPerformance[];
  orders: Order[];
  orderStats: OrderStat[];
  products: Product[];
  salesByCategory: Category[];
  clients: Client[];
}

export interface Category {
  name: string;
  value: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  image: string;
}

export interface OrderStat {
  name: string;
  value: string;
  icon: string;
}

export interface Order {
  id: string;
  client: string;
  product: string;
  quantity: number;
  email: string;
  total: number;
  status: string;
  date: string;
  country: string;
}

export interface ProductPerformance {
  name: string;
  Retention: number;
  Revenue: number;
  Profit: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  image: string;
}

export interface Sale {
  name: string;
  sales: number;
}
