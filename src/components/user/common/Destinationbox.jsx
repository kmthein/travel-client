import { Button, Input } from "antd";
import React from "react";
import { FaCity } from "react-icons/fa";

const Destinationbox = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="flex items-center gap-2">
        <FaCity className="text-black" size={32} />
        <Input placeholder="Search by destination" className="p-3" />
        <Button type="primary" size="large">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Destinationbox;
