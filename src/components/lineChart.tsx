import { Line } from "react-chartjs-2";

export default function LineChart({ chartData }: any) {
  return <Line data={chartData} />;
}
