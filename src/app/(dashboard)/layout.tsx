import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center h-full w-full">
      <div className="">
        <Navbar />
      </div>

      <div className="hidden lg:flex h-full w-[242px] flex-col fixed inset-y-0 z-49">
        <Sidebar />
      </div>

      <div className="py-16 lg:py-14 lg:pl-[242px] h-full w-full">
        <div className="p-4 lg:p-6 lg:max-w-screen-2xl min-h-full lg:mx-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
