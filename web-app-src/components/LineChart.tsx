import React from "react";
import { Line } from "@antv/g2plot";

interface ChartData {
  date: string;

  value: number;
}

interface LineChartProps {
  data: ChartData[];

  title: string;
}

const LineChart: React.FC<LineChartProps> = ({ data, title }) => {
  React.useEffect(() => {
    const line = new Line("line-chart-container", {
      data,

      xField: "date",

      yField: "value",
    });

    line.render();

    return () => {
      line.destroy();
    };
  }, [data]);

  return <div id="line-chart-container" />;
};

export default LineChart;
