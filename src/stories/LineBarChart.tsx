import {
  ComposedChart,
  Line,
  LineProps,
  Bar,
  BarProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
  CartesianGrid,
  CartesianGridProps,
  Tooltip,
  Legend,
} from "recharts";

interface LineBarChartStorybookProps {
  xAxis: XAxisProps;
  yAxis?: YAxisProps;
  line: LineProps;
  bar: BarProps;
  composedChart: {
    width: number;
    height: number;
    data: Array<any>;
    margin: {
      top: number;
      right: number;
      left: number;
      bottom: number;
    };
  };
  cartesianGrid: CartesianGridProps;
}

export const LineBarChartStorybook = ({
  ...props
}: LineBarChartStorybookProps) => {
  return (
    <ComposedChart
      width={props.composedChart.width}
      height={props.composedChart.height}
      data={props.composedChart.data}
      margin={props.composedChart.margin}
    >
      <CartesianGrid {...props.cartesianGrid} />
      <XAxis {...props.xAxis} />
      <YAxis {...props.yAxis} />
      <Tooltip />
      <Legend />
      <Bar {...props.bar} />
      <Line {...props.line} />
    </ComposedChart>
  );
};
