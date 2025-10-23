import { Bell } from "lucide-react";
import Image from "next/image";

export const dynamic = "force-static";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-5 bg-card rounded-md mb-4">
      <h1 className="text-xl font-bold"> Dashboard </h1>
      <div className="flex items-center gap-2">
        <Image
          src={"/images/uk.png"}
          width={28}
          height={28}
          alt=""
          className=""
        />
        <Bell size={20} />
      </div>
    </header>
  );
};

export default Header;
