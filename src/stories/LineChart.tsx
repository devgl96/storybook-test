import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineProps,
} from "recharts";

interface LineChartStorybookProps {
  data: Array<any>;
  width: number;
  height: number;
  strokeDasharray: string;
  margin: {
    top: number;
    right: number;
    left: number;
    bottom: number;
  };
  xAxis: {
    dataKey: string;
  };
  line: LineProps;
}

export const LineChartStorybook = ({
  data,
  width = 930,
  height = 250,
  strokeDasharray = "3 3",
  ...props
}: LineChartStorybookProps) => {
  return (
    <LineChart width={width} height={height} data={data} margin={props.margin}>
      <CartesianGrid strokeDasharray={strokeDasharray} />
      <XAxis {...props.xAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line {...props.line} />
    </LineChart>
  );
};
