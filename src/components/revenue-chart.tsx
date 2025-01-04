"use client";

import { ArrowDownRight } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Mon", step: 0, current: 5000, previous: 8500 },
  { day: "Tue", step: 5000, current: 6200, previous: 10300 },
  { day: "Wed", step: 10000, current: 12500, previous: 3500 },
  { day: "Thu", step: 15000, current: 3900, previous: 6200 },
  { day: "Fri", current: 7800, previous: 11000 },
  { day: "Sat", current: 3800, previous: 4900 },
  { day: "Sun", current: 10000, previous: 11000 },
];

const chartConfig = {
  current: {
    label: "Current",
    color: "#5178C3",
  },
  previous: {
    label: "Previous",
    color: "#BED2F9",
  },
} satisfies ChartConfig;

const RevenueChart = () => {
  return (
    <Card className="border border-zinc-100">
      <CardHeader className="md:pb-3">
        <CardTitle className="font-normal text-base text-zinc-700">
          Revenue
        </CardTitle>
        <CardDescription className="text-base font-normal text-zinc-700">
          ${" "}
          <span className="text-2xl font-mono font-semibold text-zinc-900">
            15,568
          </span>
        </CardDescription>
      </CardHeader>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 text-sm px-6 py-2">
        <div className="flex items-center justify-center bg-zinc-300/50 text-zinc-500 rounded-full px-[1.5px] py-[1.5px]">
          <span className="font-mono flex items-center gap-1 bg-white rounded-full px-1.5">
            <ArrowDownRight className="h-4 w-4 text-[#FF520E]" /> 2.34%
          </span>
          <span className="px-1.5"> vs. last week</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border border-zinc-300/60 rounded-md py-0.5 px-1.5">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#5178C3]" />
            This week
          </div>

          <div className="flex items-center gap-1 border border-zinc-300/60 rounded-md py-0.5 px-1.5">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#BED2F9]" />
            Last week
          </div>
        </div>
      </div>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="step"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="previous"
              type="linear"
              stroke="var(--color-previous)"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              dataKey="current"
              type="linear"
              stroke="var(--color-current)"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
