import Navbar from "@/components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="py-16 px-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
