"use client";

import React, { useEffect, useRef } from "react";

interface ChartData {
  theme: string;
  sub_theme: string;
  month: number;
  epiweek: number;
  date: string;
  metric_value: number;
}

interface LineChartProps {
  data: ChartData[];
  id: string;
}

declare const google: any;

const LineChart: React.FC<LineChartProps> = ({ data, id }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    google.charts.load("current", { packages: ["corechart", "line"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      const chartData = new google.visualization.DataTable();
      chartData.addColumn("date", "Date");
      chartData.addColumn("number", "Theme");
      chartData.addColumn("number", "Sub Theme");
      chartData.addColumn("number", "Month");
      chartData.addColumn("number", "Epiweek");

      data.forEach((item) => {
        const dateParts = item.date.split("-");
        const date = new Date(
          parseInt(dateParts[0]),
          parseInt(dateParts[1]) - 1,
          parseInt(dateParts[2])
        );
        chartData.addRow([
          date,
          item.theme === "infectious_disease" ? item.metric_value : 0,
          item.sub_theme === "respiratory" ? item.metric_value : 0,
          item.month,
          item.epiweek,
        ]);
      });

      const options = {
        title: id.replace("-", " "),
        width: "100%",
        height: 400,
        hAxis: {
          title: "Date",
        },
        vAxis: {
          title: "Value",
        },
        series: {
          0: { color: "#1890ff" },
          1: { color: "#f5222d" },
          2: { color: "#faad14" },
          3: { color: "#52c41a" },
        },
      };

      const chart = new google.visualization.LineChart(chartRef.current);
      chart.draw(chartData, options);
    }
  }, [data, id]);

  return (
    <div ref={chartRef} className="w-full" style={{ height: "400px" }}></div>
  );
};

export default LineChart;
