import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { LineBarChartStorybook } from "./LineBarChart";

const meta = {
  title: "Example/LineBarChart",
  component: LineBarChartStorybook,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bar: {
      fill: { control: "color" },
    },
    line: {
      stroke: { control: "color" },
    },
  },
  args: {
    composedChart: {
      width: 900,
      height: 400,
      data: [
        {
          name: "Page A",
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: "Page B",
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          name: "Page C",
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          name: "Page D",
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          name: "Page E",
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          name: "Page F",
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
        },
      ],
      margin: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
    },
    cartesianGrid: {
      stroke: "#F5F5F5",
    },
    xAxis: {
      dataKey: "name",
      scale: "band",
    },
    bar: {
      dataKey: "pv",
      fill: "#8884d8",
      barSize: 20,
    },
    line: {
      type: "monotone",
      dataKey: "uv",
      stroke: "#FF7300",
    },
  },
} satisfies Meta<typeof LineBarChartStorybook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
