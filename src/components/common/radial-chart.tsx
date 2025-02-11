"use client";

import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  ChartContainer,
  ChartConfig,
} from "@/components/ui/chart";

const chartConfig: ChartConfig = {
  daysLeft: {
    label: "Days Left",
    color: "hsl(var(--black))",
  },
};

export function FreeTrialRadialChart() {
  const totalDays = 45;
  const daysLeft = 3;
  const percentageLeft = (daysLeft / totalDays) * 100;

  const chartData = [
    {
      name: "Days Left",
      value: daysLeft,
      fill: "red",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <ChartContainer
        config={chartConfig}
        className="h-[120px] w-[100px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={180}
          endAngle={0}
          innerRadius="65%"
          outerRadius="85%"
          barSize={20}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, totalDays]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={30}
            fill="var(--color-daysLeft)"
          />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-primary text-xl font-bold"
          >
            {daysLeft}
          </text>
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-black text-sm"
          >
            days left
          </text>
          <text
            x="50%"
            y="10%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-black text-sm font-bold"
          >
            Free Trial
          </text>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
