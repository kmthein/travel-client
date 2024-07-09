import React from "react";

const CountCard = ({ title, content, icon, iconBg }) => {
  return (
    <div className=" bg-white px-4 py-10 rounded-lg flex-1">
      <div className=" flex justify-between items-center">
        <div>
          <h5 className=" text-sm text-[#939393] mb-3">{title}</h5>
          <h3 className=" text-2xl font-medium">{content || 0}</h3>
        </div>
        <div className={`${iconBg} p-3 rounded-xl`}>{icon}</div>
      </div>
    </div>
  );
};

export default CountCard;
