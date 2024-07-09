import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import Bagan from "../../../assets/img/destination/bagan.png";
import { IoIosStar } from "react-icons/io";

const SuggestHotelItem = () => {
  return (
    <Card
      hoverable
      className="rounded-lg overflow-hidden p-5 shadow-lg"
      cover={
        <img alt="example" src={Bagan} className="object-cover w-full h-48" />
      }
    >
      <Meta
        title={
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Bagan Thiripyitsaya</h3>
            <div className="flex items-center">
              <IoIosStar className="text-yellow-500" />
              <span className="ml-1 text-gray-600">4.7</span>
            </div>
          </div>
        }
        description={
          <div>
            <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
              <li>Tour combo with return airport transfer</li>
              <li>City Tour</li>
              <li>Curious Corner</li>
            </ul>
          </div>
        }
      />
    </Card>
  );
};

export default SuggestHotelItem;
