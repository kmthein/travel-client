import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getTravelByPercentage } from "../../../api/travelplan";

const PieChart = () => {
  const [percent, setPercent] = useState([]);
  const [labels, setLabels] = useState([]);

  const keyMapping = {
    busHotelPercent: "Hotel + Bus",
    busOnlyPercent: "Bus Only",
    flightHotelPercent: "Hotel + Flight",
    flightOnlyPercent: "Flight Only",
    hotelOnlyPercent: "Hotel Only",
  };

  const travelPercentHandler = async () => {
    const res = await getTravelByPercentage();
    let labelAry = [];
    let percentAry = [];
    for (let key in res.data) {
      labelAry.push(keyMapping[key]);
      percentAry.push(res.data[key]);
    }
    setLabels(labelAry);
    setPercent(percentAry);
  };

  useEffect(() => {
    travelPercentHandler();
  }, []);

  const series = [44, 55, 13, 43, 22];

  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div id="chart">
      <div className="chart-title mb-[20%]">Top Revenue Percentage</div>
      <div className="flex items-center h-[100%]">
        <ReactApexChart
          options={options}
          series={percent}
          type="pie"
          width={350}
        />
      </div>
    </div>
  );
};

export default PieChart;
