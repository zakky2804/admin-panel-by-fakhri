"use client";

const ChartSkeleton = ({ title }: { title: string }) => {
  return (
    <div className="bg-secondary rounded-xl p-4">
      <h2 className=" font-medium mb-4">{title}</h2>
      <div className="h-64 xl:h-80 w-full bg-accent animate-pulse"></div>
    </div>
  );
};

export default ChartSkeleton;
