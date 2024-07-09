import React from "react";
import { BsPeople } from "react-icons/bs";
import { FaCity, FaHotel } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";
import CountCard from "../../components/admin/dashboard/CountCard";

const DashboardPage = () => {
  return (
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
  );
};

export default DashboardPage;
