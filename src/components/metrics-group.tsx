import {
  ArrowRightLeft,
  CircleCheckBig,
  CircleX,
  MoveRight,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  {
    title: "New Customers",
    number: 324,
    unit: "count",
    icon: Users,
    textColour: "text-green-800",
    bgColour: "bg-green-800/10",
  },
  {
    title: "Success Rate",
    number: 98.7,
    unit: "%",
    icon: CircleCheckBig,
    textColour: "text-blue-700",
    bgColour: "bg-blue-700/10",
  },
  {
    title: "Failing Rate",
    number: 324,
    unit: "count",
    icon: CircleX,
    textColour: "text-red-600",
    bgColour: "bg-red-600/10",
  },
  {
    title: "Total Transactions",
    number: 192,
    unit: "count",
    icon: ArrowRightLeft,
    textColour: "text-violet-600",
    bgColour: "bg-violet-600/10",
  },
];

const MetircsGroup = () => {
  return (
    <div className="relative w-full p-6 pb-16 border rounded-2xl bg-gradient-to-r from-[#E8FCDD] to-[#CFFED8] grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between w-full text-zinc-700">
            <CardTitle className="font-normal">{metric.title}</CardTitle>

            <div
              className={cn(
                "p-2 rounded-full inline-flex border",
                metric.bgColour
              )}
            >
              <metric.icon className={cn("h-5 w-5", metric.textColour)} />
            </div>
          </CardHeader>

          <CardContent className="text-zinc-700">
            <span className="text-zinc-950 font-semibold font-mono text-2xl">
              {metric.number}
            </span>{" "}
            {metric.unit}
          </CardContent>
        </Card>
      ))}

      <div className="group hover:bg-white text-[#298219] hover:text-[#298219]/90 bg-white border border-b-white rounded-t-2xl absolute bottom-0 left-[50%] -translate-x-20 px-6 pt-2 flex items-center gap-2 translate-y-[1px] cursor-pointer">
        All metrics{" "}
        <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-all duration-200" />
      </div>
    </div>
  );
};

export default MetircsGroup;
