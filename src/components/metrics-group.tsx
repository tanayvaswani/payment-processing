import { ArrowRightLeft, CircleCheckBig, CircleX, Users } from "lucide-react";

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
    <div className="w-full p-6 border rounded-xl bg-gradient-to-r from-[#E8FCDD] to-[#CFFED8] grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-6">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between w-full text-zinc-700 pb-3">
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

          <CardContent className="">
            <span className="text-zinc-950 font-medium font-mono text-2xl">
              {metric.number}
            </span>{" "}
            {metric.unit}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetircsGroup;
