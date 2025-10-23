import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import FetchWrapper from "@/components/FetchWrapper";

const geistSans = Inter({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Roboto({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Panel | Dashboard Management",
  description:
    "An advanced admin dashboard for managing users, data, and analytics. Built with Next.js, Tailwind CSS, and modern UI components.",
  keywords: [
    "Admin Panel",
    "Dashboard",
    "Next.js 15",
    "Tailwind CSS",
    "React 19",
    "Management System",
    "Analytics",
    "Data Management",
  ],
  authors: [{ name: "Fakhri Muzakki" }],
  creator: "Fakhri Muzakki",
  robots: {
    index: false, // biasanya dashboard tidak diindeks
    follow: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FetchWrapper>
          <div className="flex max-h-screen max-w-[1366px]">
            <Sidebar />

            <main className="overflow-y-auto px-4 xl:px-6 py-3 w-full">
              {children}
            </main>
          </div>
        </FetchWrapper>
      </body>
    </html>
  );
}
