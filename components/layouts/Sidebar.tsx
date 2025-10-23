import SidebarNav from "./SidebarNav";
import Image from "next/image";

export const dynamic = "force-static";

const Sidebar = () => {
  return (
    <aside className="min-h-screen min-w-64 bg-card px-2 py-6 hidden lg:block">
      <div className="pl-4 flex items-center gap-2 mb-6 border-b border-border pb-4">
        <Image
          src={"/images/admin.jpg"}
          width={32}
          height={32}
          alt=""
          className="rounded-full"
        />
        <div className="">
          <p className="font-Outfit">Jonh Doe</p>
          <p className="text-xs">Admin</p>
        </div>
      </div>

      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
