import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getIncomeByMonth } from "../../../api/travelplan";

const LineChart = () => {
  const [data, setData] = useState([]);
  const incomeByMonthHandler = async () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const formData = new FormData();
    formData.append("year", currentYear);
    const res = await getIncomeByMonth(formData);
    console.log(res.data);
    setData([{ name: "Income By Month", data: res.data }]);
  };

  useEffect(() => {
    incomeByMonthHandler();
  }, []);
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Income by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={data}
        type="line"
        height={450}
      />
    </div>
  );
};

export default LineChart;
