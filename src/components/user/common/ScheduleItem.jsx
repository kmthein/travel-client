import { Button, Card } from "antd";
import React from "react";
import SelectStep from "./SelectStep";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ScheduleItem = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="my-10">
      <div className="flex justify-end mb-8">
        <IoReturnUpBack
          onClick={() => navigate(-1)}
          className="text-3xl cursor-pointer"
        />
      </div>
      {data.map((item) => (
        <div key={item.id}>
          <Card className="shadow-lg rounded-lg mb-6 px-5">
            <div className="flex items-center justify-between p-4">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={item.img}
                  alt="airline logo"
                  className="w-[100px] h-[100px] object-contain rounded-full"
                />
                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Date</p>
                <p className="text-md text-gray-600">{item.date}</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="text-right">
                  <p className="text-lg font-semibold">{item.departureTime}</p>
                  <p className="text-md text-gray-600">{item.departurePlace}</p>
                </div>
                <div className="flex items-center ">
                  <div className="h-0.5 w-16 bg-black"></div>
                  <div className="w-1 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-black"></div>
                </div>
                <div>
                  <p className="text-lg font-semibold">{item.arrivalTime}</p>
                  <p className="text-md text-gray-600">{item.arrivalPlace}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ScheduleItem;
