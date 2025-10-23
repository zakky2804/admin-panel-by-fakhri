import {
  Bell,
  DollarSign,
  House,
  Info,
  LucideProps,
  Mail,
  Settings,
  ShoppingBag,
  ShoppingCart,
  SquareActivity,
  Users,
} from "lucide-react";

export interface ISibarData {
  title: string;
  link: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export const sibarData: ISibarData[] = [
  { title: "Dashboard", link: "/", Icon: House },
  { title: "Products", link: "/products", Icon: ShoppingBag },
  { title: "Clients", link: "/clients", Icon: Users },
  { title: "Sales", link: "/sales", Icon: DollarSign },
  { title: "Orders", link: "/orders", Icon: ShoppingCart },
  { title: "Settings", link: "#", Icon: Settings },
  { title: "Messages", link: "#", Icon: Mail },
  { title: "Notifications", link: "#", Icon: Bell },
  { title: "Help", link: "#", Icon: Info },
];

export const statData = [
  {
    title: "Total Sales",
    Icon: DollarSign,
    value: "$182,450",
  },
  {
    title: "Total Clients",
    Icon: Users,
    value: "1,437",
  },
  {
    title: "Total Products",
    Icon: ShoppingBag,
    value: "674",
  },
  {
    title: "Stocks",
    Icon: SquareActivity,
    value: "12,845",
  },
];
