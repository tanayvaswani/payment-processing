import { CalendarRange, ChevronDown, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between w-full">
        <h1 className="font-semibold text-zinc-900 text-2xl">
          Welcome, Tanay!
        </h1>

        <div className="flex items-center gap-2">
          <Button variant={"outline"} className="rounded-lg">
            <SlidersHorizontal className="h-4 w-4" />
            Customize home view
          </Button>

          <Button variant={"outline"} className="rounded-lg">
            <CalendarRange className="h-4 w-4" />
            This week
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
