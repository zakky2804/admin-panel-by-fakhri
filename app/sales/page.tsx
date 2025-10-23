import Header from "@/components/layouts/Header";
import Stats from "@/components/Stats";
import DashboardChartsLazy from "@/components/wrapper/DashboardChartsLazy";

export default function Sales() {
  return (
    <>
      <Header />
      <Stats />

      <DashboardChartsLazy />
    </>
  );
}
