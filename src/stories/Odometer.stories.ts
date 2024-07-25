import type { Meta, StoryObj } from "@storybook/react";
import { OdometerStorybook } from "./Odometer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Odometer",
  component: OdometerStorybook,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    needleColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    data: [
      { name: "A", value: 80, color: "#ff0000" },
      { name: "B", value: 45, color: "#00ff00" },
      { name: "C", value: 25, color: "#0000ff" },
    ],
    cx: 150,
    cy: 200,
    iR: 50,
    oR: 100,
    value: 50,
    needleColor: "#FFF00E",
  },
} satisfies Meta<typeof OdometerStorybook>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
