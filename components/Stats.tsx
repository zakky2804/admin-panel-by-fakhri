import { statData } from "@/assets/data";
import StatCard from "./StatCard";

export const dynamic = "force-static";

const Stats = () => {
  return (
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 w-full gap-x-4 gap-y-2 sm:gap-y-4">
      {statData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          Icon={stat.Icon}
          value={stat.value}
        ></StatCard>
      ))}
    </div>
  );
};

export default Stats;
