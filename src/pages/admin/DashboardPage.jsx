import React from "react";
import { BsPeople } from "react-icons/bs";
import { FaCity, FaHotel } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";
import CountCard from "../../components/admin/dashboard/CountCard";
import ReactApexChart from "react-apexcharts";
import BarChart from "../../components/admin/chart/BarChart";
import PieChart from "../../components/admin/chart/PieChart";
import LineChart from "../../components/admin/chart/LineChart";
import AreaChart from "../../components/admin/chart/AreaChart";

const DashboardPage = () => {
  return (
    <>
      <div className="flex gap-6 flex-wrap pt-3">
        <CountCard
          title={"Members"}
          content={"45"}
          icon={<BsPeople className="text-lg text-[#615fa0]" />}
          iconBg={"bg-[#E5E4FF]"}
        />
        <CountCard
          title={"Destination"}
          content={"56"}
          icon={<FaCity className="text-lg text-[#a7812a]" />}
          iconBg={"bg-[#FFF3D6]"}
        />
        <CountCard
          title={"Travel Plan"}
          content={"76"}
          icon={<MdCardTravel className="text-lg text-[#31a068]" />}
          iconBg={"bg-[#D9F7E8]"}
        />
        <CountCard
          title={"Hotels"}
          content={"89"}
          icon={<FaHotel className="text-lg text-[#b16546]" />}
          iconBg={"bg-[#FFDED1]"}
        />
      </div>
      <div className="flex mt-6 gap-5">
        <div className=" w-[70%] bg-white rounded-lg pt-6 px-4">
          <BarChart />
        </div>
        <div className=" w-[30%] bg-white rounded-lg">
          <PieChart />
        </div>
      </div>
      <div className="flex my-6 gap-5">
        <div className=" w-[50%] bg-white rounded-lg pt-6 px-4">
          <LineChart />
        </div>
        <div className=" w-[50%] bg-white pt-6 px-4 rounded-lg">
          <AreaChart />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
