"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-card text-center px-6 rounded-md">
      {/* Icon */}
      <div className="bg-accent p-6 rounded-full mb-6">
        <AlertTriangle className="text-foreground w-12 h-12" />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-title-text mb-2">500</h1>
      <p className="text-base text-gray-400 mb-6 max-w-md">
        Mohon maaf, telah terjadi kesalahan tak terduga. Silakan coba lagi nanti
        atau kembali ke halaman beranda.
      </p>

      {/* Action Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-accent text-white hover:bg-accent/80 transition-colors group"
      >
        <RotateCcw
          size={18}
          className="group-hover:-rotate-[360deg] transition-transform duration-600"
        />
        Coba Lagi
      </Link>
    </div>
  );
}
