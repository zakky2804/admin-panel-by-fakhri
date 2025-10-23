"use client";

import { DataAPI } from "@/interfaces/interface";
import { useDatatore } from "@/store/dataStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

interface ZustandProviderProps {
  children: React.ReactNode;
  initialdata: DataAPI;
}

const ZustandProvider = ({ children, initialdata }: ZustandProviderProps) => {
  const { initial, setData } = useDatatore();

  // Hydrate Zustand hanya sekali saat layout mount
  useEffect(() => {
    if (!initial) {
      setData(initialdata);
    }
  }, [initial, initialdata, setData]);

  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "oklch(52.7% 0.154 150.069)",
              color: "white",
            },
          },
          error: {
            style: {
              background: "oklch(50.5% 0.213 27.518) ",
              color: "white",
            },
          },
        }}
      />
    </>
  );
};

export default ZustandProvider;
