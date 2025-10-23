import Header from "@/components/layouts/Header";
import Stats from "@/components/Stats";
import DashboardChartsLazy from "@/components/wrapper/DashboardChartsLazy";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Header />
      <Stats />

      <DashboardChartsLazy />
    </>
  );
}
