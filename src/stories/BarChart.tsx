import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarProps,
} from "recharts";

interface BarChartStorybookProps {
  data: Array<any>;
  width: number;
  height: number;
  strokeDasharray: string;
  xAxis: {
    dataKey: string;
  };
  bar: BarProps;
}

export const BarChartStorybook = ({
  data,
  width = 930,
  height = 250,
  strokeDasharray = "3 3",
  ...props
}: BarChartStorybookProps) => {
  return (
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray={strokeDasharray} />
      <XAxis {...props.xAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar {...props.bar} />
    </BarChart>
  );
};
