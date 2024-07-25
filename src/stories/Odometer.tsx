import { PieChart, Pie, Cell } from "recharts";

interface OdometerStorybookProps {
  value: number;
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  needleColor: string;
}

export const OdometerStorybook = ({
  data = [
    { name: "A", value: 80, color: "#ff0000" },
    { name: "B", value: 45, color: "#00ff00" },
    { name: "C", value: 25, color: "#0000ff" },
  ],
  cx = 150,
  cy = 200,
  iR = 50,
  oR = 100,
  value = 50,
  needleColor = "#FFF00E",
}: OdometerStorybookProps) => {
  const needle = (
    value: number,
    data: Array<any>,
    cx: number,
    cy: number,
    iR: number,
    oR: number,
    color: string
  ) => {
    const RADIAN = Math.PI / 180;

    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
      />,
    ];
  };

  return (
    <PieChart width={400} height={500}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle(value, data, cx, cy, iR, oR, needleColor)}
    </PieChart>
  );
};