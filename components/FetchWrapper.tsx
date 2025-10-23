import { DataAPI } from "@/interfaces/interface";
import ZustandProvider from "./ZustandProvider";

const FetchWrapper = async ({ children }: React.PropsWithChildren) => {
  try {
    const baseUrl = process.env.BASE_URL;
    const res = await fetch(`${baseUrl}/data.json`, {
      cache: "no-store", // atau force-cache, tergantung butuh realtime atau tidak
      // cache: "force-cache",
    });

    const data: DataAPI = await res.json();
    return <ZustandProvider initialdata={data}>{children}</ZustandProvider>;
  } catch (err) {
    console.error("Fetch JSON failed:", err);
  }
};

export default FetchWrapper;
