"use client";

import { sibarData } from "@/assets/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-1">
      {sibarData.map(({ title, link, Icon }, i) => (
        <Link
          href={link}
          prefetch={i >= 5 && true}
          className={`px-4 py-3 hover:bg-accent rounded-md ${
            i >= 5 && "cursor-auto"
          } ${pathname === link && "bg-accent"} `}
          key={title}
        >
          <Icon size={20} className="inline-block mr-1" /> {title}
        </Link>
      ))}
    </div>
  );
};

export default SidebarNav;
