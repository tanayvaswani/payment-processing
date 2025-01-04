"use client";

import { ArrowUpRight } from "lucide-react";
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
  { day: "Mon", step: 100, current: 1200, previous: 750 },
  { day: "Tue", step: 500, current: 1200, previous: 750 },
  { day: "Wed", step: 1000, current: 300, previous: 550 },
  { day: "Thu", step: 2000, current: 300, previous: 200 },
  { day: "Fri", current: 900, previous: 1000 },
  { day: "Sat", current: 900, previous: 250 },
  { day: "Sun", current: 2000, previous: 750 },
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

const ChargesChart = () => {
  return (
    <Card className="border border-zinc-100">
      <CardHeader className="md:pb-3">
        <CardTitle className="font-normal text-base text-zinc-700">
          Charges
        </CardTitle>
        <CardDescription className="text-base font-normal text-zinc-700">
          <span className="text-2xl font-mono font-semibold text-zinc-900">
            2156{" "}
          </span>
          count
        </CardDescription>
      </CardHeader>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 text-sm px-6 py-2">
        <div className="flex items-center justify-center bg-zinc-300/50 text-zinc-500 rounded-full px-[1.5px] py-[1.5px]">
          <span className="font-mono flex items-center gap-1 bg-white rounded-full px-1.5">
            <ArrowUpRight className="h-4 w-4 text-[#FF520E]" /> 15.56%
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

export default ChargesChart;
