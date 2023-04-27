import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js"
Chart.register(CategoryScale)

const PieChart = () => {
  const pieChartData = {
    labels: ["October", "November", "December"],
    datasets: [{
        data: [8137119, 9431691, 10266674],
        label: "Infected People",
        backgroundColor: ["#EE8484", "#F7DC7D", "#98D89E"],
        hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
    }]
  };
  const pieChart = (
    <Pie
      type="pie"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};
export default PieChart;