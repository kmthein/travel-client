import React from "react";
import Meta from "antd/es/card/Meta";
import { IoIosStar } from "react-icons/io";
import { FaBus, FaHotel } from "react-icons/fa6";
import { MdOutlineFlight } from "react-icons/md";

import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const DestinationCard = ({
  img,
  name,
  hotel,
  bus,
  flight,
  id,
  description,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/destination/${id}`)}
      hoverable
      className="rounded-lg overflow-hidden p-3 shadow-lg card_gap"
      cover={
        <img alt="example" src={img} className="object-cover w-full h-48" />
      }
    >
      <Meta
        title={
          <div className="">
            <h3 className="text-lg font-semibold text-center">{name}</h3>
          </div>
        }
        description={
          <div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex flex-col items-center">
                <FaHotel className="text-blue-500" />
                <p className="text-sm text-gray-600">
                  {hotel} Hotel{hotel === 1 ? "" : "s"}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <FaBus className="text-green-500" />
                <p className="text-sm text-gray-600">
                  {bus} Transfer{bus === 1 ? "" : "s"}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <MdOutlineFlight className="text-red-500" />
                <p className="text-sm text-gray-600">
                  {flight} Flight{flight === 1 ? "" : "s"}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700 list-disc list-inside">
              {description.slice(0, 80)}
              {description.length > 80 && "..."}
            </p>
          </div>
        }
      />
    </Card>
  );
};

export default DestinationCard;
