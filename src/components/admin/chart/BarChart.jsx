import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getTopHotelsCount } from "../../../api/travelplan";

const BarChart = () => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  const topVisitedHotelsHandler = async () => {
    const res = await getTopHotelsCount();
    let labelAry = [];
    let dataAry = [];
    res.data.forEach((data) => {
      labelAry.push(data.name);
      dataAry.push(data.totalVisited);
    });
    setLabels(labelAry);
    setData([{ name: "Total Visited Hotels", data: dataAry }]);
  };

  useEffect(() => {
    topVisitedHotelsHandler();
  }, []);

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: labels,
    },
    title: {
      text: "Top Visited Hotels",
      align: "left",
    },
    subtitle: {
      align: "left",
      style: {
        color: "#FF0000",
        fontSize: "14px",
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={data} type="bar" height={450} />
    </div>
  );
};

export default BarChart;
