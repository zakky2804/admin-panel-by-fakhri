import { LucideProps } from "lucide-react";

interface StatCardProps {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  value: string;
}

const StatCard = ({ title, value, Icon }: StatCardProps) => {
  return (
    <section className="py-2 sm:py-4 px-5 bg-card rounded-md hover:bg-accent duration-200">
      <div className="flex items-center">
        <Icon size={16} className="mr-1" />
        <span className="font-medium font-Outfit "> {title} </span>
      </div>
      <p className="text-xl font-semibold font-Outfit"> {value} </p>
    </section>
  );
};

export default StatCard;
