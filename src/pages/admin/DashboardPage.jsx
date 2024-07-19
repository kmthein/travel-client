import React, { useEffect, useState } from "react";
import { BsPeople } from "react-icons/bs";
import { FaCity, FaHotel } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";
import CountCard from "../../components/admin/dashboard/CountCard";
import ReactApexChart from "react-apexcharts";
import BarChart from "../../components/admin/chart/BarChart";
import PieChart from "../../components/admin/chart/PieChart";
import LineChart from "../../components/admin/chart/LineChart";
import AreaChart from "../../components/admin/chart/AreaChart";
import { getAllNormalUser } from "../../api/memberapi";
import { getAllTravelPlan } from "../../api/travelplan";
import { getDes } from "../../api/destination";
import { getAllHotels } from "../../api/hotel";

const DashboardPage = () => {
  const [count, setCount] = useState({
    member: 0,
    travel: 0,
    destination: 0,
    hotel: 0,
  });
  const getCountHandler = async () => {
    const memberRes = await getAllNormalUser();
    const travelRes = await getAllTravelPlan();
    const destRes = await getDes();
    const hotelRes = await getAllHotels();
    setCount({
      member: memberRes.data.length,
      travel: travelRes.data.length,
      destination: destRes.data.length,
      hotel: hotelRes.data.length,
    });
  };

  const { member, travel, destination, hotel } = count;

  useEffect(() => {
    getCountHandler();
  }, []);
  return (
    <>
      <div className="flex gap-6 flex-wrap pt-3">
        <CountCard
          title={"Members"}
          content={member}
          icon={<BsPeople className="text-lg text-[#615fa0]" />}
          iconBg={"bg-[#E5E4FF]"}
        />
        <CountCard
          title={"Destination"}
          content={destination}
          icon={<FaCity className="text-lg text-[#a7812a]" />}
          iconBg={"bg-[#FFF3D6]"}
        />
        <CountCard
          title={"Travel Plan"}
          content={travel}
          icon={<MdCardTravel className="text-lg text-[#31a068]" />}
          iconBg={"bg-[#D9F7E8]"}
        />
        <CountCard
          title={"Hotels"}
          content={travel}
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
