import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const [chart_data, setChartData] = React.useState(data);
  //useEffect
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "150px", height: "150px" }}>
      <Pie data={chart_data} options={options} />
    </div>
  );
};

export default PieChart;
