import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js"

Chart.register(CategoryScale)

const LineChart = () => {
  const lineChartData = {
    labels: ["October", "November", "December"],
    datasets: [
      {
        data: [120, 115, 300 ,112],
        label: "Infected",
        borderColor: "#E9A0A0",
        lineTension: 0.5
      },
      {
        data: [100, 180, 150 , 121],
        label: "Deaths",
        borderColor: "#9BDD7C",
        lineTension: 0.5
      }
    ]
  };

  return (
    <Line
      // type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 6 Months",
          fontSize: 20
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={lineChartData}
    />
  );
};
export default LineChart;