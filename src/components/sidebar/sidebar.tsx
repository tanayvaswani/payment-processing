import Image from "next/image";

import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-full bg-[#FFFFFF] flex flex-col overflow-y-auto py-4">
      <div className="px-4 pb-6">
        <Image
          src={"/codeant-logo.png"}
          alt="card"
          width={161}
          height={32}
          className=""
        />
      </div>

      <div className="flex flex-col gap-4 w-full h-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
