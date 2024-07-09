import { Avatar, Rate } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

const ReviewList = () => {
  const [rate, setRate] = useState(4);
  return (
    <div className="border rounded-lg p-10">
      <div className="flex justify-between items-start ">
        <div className="flex gap-3">
          <Avatar size={50} icon={<UserOutlined />} />
          <div>
            <h2>Martin Gary</h2>
            <p>27 Aug 2024</p>
          </div>
        </div>
        <div>
          <Rate onChange={setRate} value={rate} />
        </div>
      </div>
      <p className="mt-5">
        Bagan is absolutely magical! The sight of thousands of ancient temples
        scattered across the plains is something I'll never forget. The best
        part of my trip was taking a hot air balloon ride at sunrise—floating
        above the temples with the mist rising was surreal. The locals are
        incredibly friendly and welcoming, and the food is delicious. Bagan is a
        place that feels both timeless and enchanting. Highly recommend!
      </p>
    </div>
  );
};

export default ReviewList;
