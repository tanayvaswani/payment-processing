import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-full bg-[#FFFFFF] flex flex-col overflow-y-auto py-4">
      <div className="flex flex-col pt-12 gap-4 w-full h-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
