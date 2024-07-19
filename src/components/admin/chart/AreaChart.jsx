import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getMemberByMonth, getTravelsByMonth } from "../../../api/travelplan";

const AreaChart = () => {
  const [data, setData] = useState([]);
  const newMemberByMonthHandler = async () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const formData = new FormData();
    formData.append("year", currentYear);
    const memberRes = await getMemberByMonth(formData);
    const travelRes = await getTravelsByMonth(formData);
    setData([
      { name: "New Member By Month", data: memberRes.data },
      { name: "Travels By Month", data: travelRes.data },
    ]);
  };

  useEffect(() => {
    newMemberByMonthHandler();
  }, []);

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100, 243, 32, 234, 342, 23],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Travel and Member Analysis",
      align: "left",
    },
    xaxis: {
      type: "month",
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
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={data}
        type="area"
        height={450}
      />
    </div>
  );
};

export default AreaChart;
