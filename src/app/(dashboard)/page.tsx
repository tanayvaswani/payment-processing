import { CalendarRange, ChevronDown, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ChargesChart from "@/components/charges-chart";
import MetircsGroup from "@/components/metrics-group";
import RevenueChart from "@/components/revenue-chart";
import UserTable from "@/components/user-table";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      {/* Dashboard Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3">
        <h1 className="font-semibold text-zinc-900 text-2xl">
          Welcome, Tanay!
        </h1>

        <div className="flex items-center gap-2">
          <Button variant={"outline"} className="rounded-lg">
            <SlidersHorizontal className="h-4 w-4" />
            Customize home view
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="rounded-lg">
                <CalendarRange className="h-4 w-4" />
                This week
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-[--radix-dropdown-menu-trigger-width]">
              <DropdownMenuItem>
                <CalendarRange className="h-4 w-4" /> This Hour
              </DropdownMenuItem>

              <DropdownMenuItem>
                <CalendarRange className="h-4 w-4" /> This Day
              </DropdownMenuItem>

              <DropdownMenuItem>
                <CalendarRange className="h-4 w-4" /> This Month
              </DropdownMenuItem>

              <DropdownMenuItem>
                <CalendarRange className="h-4 w-4" /> This Year
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Metrics Card Group */}
      <MetircsGroup />

      {/* Charts Group */}
      <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RevenueChart />
        <ChargesChart />
      </div>

      <UserTable />
    </div>
  );
};

export default HomePage;
