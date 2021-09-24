import React, { useEffect } from "react";

import { Bar } from "react-chartjs-2";

const BarChart = ({ usersData }) => {
  const data = {
    labels: usersData.chartLabels,
    datasets: [
      {
        data: usersData.chartData,
        label: "تعداد هر رده سنی",
        borderColor: "#3333ff",
        fill: true,
        backgroundColor: "#b009b0",
      },
    ],
  };

  return (
    <Bar data={data} height={200} options={{ maintainAspectRatio: false }} />
  );
};

export default BarChart;
