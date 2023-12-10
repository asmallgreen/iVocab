import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const HorizontalBarChart = ({ data }) => {
  const options = {
    indexAxis: "y", // This will make the chart horizontal
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 10, // 圓角設置
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Quiz Scores",
        data: data.values,
        backgroundColor: "rgba(127, 108, 95, 1)", // Coffee color with opacity
        // borderColor: "rgba(127, 108, 95, 1.5)", // Coffee color without opacity
        borderWidth: 0.5,
      },
    ],
  };

  return <Bar data={chartData} options={options} />;
};

export default HorizontalBarChart;
