import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-card text-center px-6 rounded-md">
      {/* Icon */}
      <div className="bg-accent p-6 rounded-full mb-6">
        <AlertTriangle className="text-foreground w-12 h-12" />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-title-text mb-2">404</h1>
      <p className="text-base text-gray-400 mb-6">
        Halaman yang kamu cari tidak ditemukan.
      </p>

      {/* Action Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-accent text-white hover:bg-accent/80 transition-colors"
      >
        <ArrowLeft size={18} />
        Kembali ke Dashboard
      </Link>
    </div>
  );
}
