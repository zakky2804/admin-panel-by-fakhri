export const dynamic = "force-static";

const TableSkeleton = () => {
  return (
    <div className="bg-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-medium mb-4">
          <div className="h-8 w-24 bg-accent rounded animate-pulse"></div>
        </h2>

        {/* Header Search + Button */}
        <div className="flex gap-2">
          <div className="h-10 w-40 bg-accent rounded-lg animate-pulse"></div>
          <div className="h-10 w-28 bg-accent rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-white text-sm">
              <th className="pb-2">
                <div className="h-4 w-20 bg-accent rounded animate-pulse"></div>
              </th>
              <th className="pb-2">
                <div className="h-4 w-20 bg-accent rounded animate-pulse"></div>
              </th>
              <th className="pb-2">
                <div className="h-4 w-16 bg-accent rounded animate-pulse"></div>
              </th>
              <th className="pb-2">
                <div className="h-4 w-14 bg-accent rounded animate-pulse"></div>
              </th>
              <th className="pb-2">
                <div className="h-4 w-12 bg-accent rounded animate-pulse"></div>
              </th>
              <th className="pb-2">
                <div className="h-4 w-12 bg-accent rounded animate-pulse"></div>
              </th>
              <th className="pb-2">
                <div className="h-4 w-12 bg-accent rounded animate-pulse"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 3 }).map((_, i) => (
              <tr key={i} className="border-t border-border">
                {/* Image + Name */}
                <td className="py-3 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-accent animate-pulse"></div>
                  <div className="h-4 w-24 bg-accent rounded animate-pulse"></div>
                </td>
                <td>
                  <div className="h-4 w-20 bg-accent rounded animate-pulse"></div>
                </td>
                <td>
                  <div className="h-4 w-16 bg-accent rounded animate-pulse"></div>
                </td>
                <td>
                  <div className="h-4 w-14 bg-accent rounded animate-pulse"></div>
                </td>
                <td>
                  <div className="h-4 w-12 bg-accent rounded animate-pulse"></div>
                </td>
                <td>
                  <div className="h-4 w-12 bg-accent rounded animate-pulse"></div>
                </td>
                <td className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded bg-accent animate-pulse"></div>
                  <div className="h-5 w-5 rounded bg-accent animate-pulse"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
