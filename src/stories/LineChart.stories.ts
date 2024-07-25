import type { Meta, StoryObj } from "@storybook/react";
import { LineChartStorybook } from "./LineChart";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/LineChart",
  component: LineChartStorybook,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    line: {
      stroke: { control: "color" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    data: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
      },
    ],
    width: 930,
    height: 250,
    strokeDasharray: "3 3",
    margin: { top: 5, right: 30, left: 20, bottom: 5 },
    xAxis: {
      dataKey: "name",
    },
    line: {
      dataKey: "pv",
      stroke: "#3FACD3",
      type: "monotone",
    },
  },
} satisfies Meta<typeof LineChartStorybook>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
