import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-card">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <Loader2 className="w-10 h-10 animate-spin text-accent" />

        {/* Text */}
        <p className="text-sm text-gray-400 font-Outfit">
          Loading dashboard...
        </p>

        {/* Skeleton bar */}
        <div className="flex gap-2 mt-2">
          <div className="h-2 w-10 bg-border rounded animate-pulse" />
          <div className="h-2 w-16 bg-border rounded animate-pulse delay-100" />
          <div className="h-2 w-8 bg-border rounded animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
