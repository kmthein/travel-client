import React from "react";
import { Link } from "react-router-dom";
import Express from "../../../assets/express.png";
const SuggestBus = () => {
  return (
    <div className="my-5">
      <h2 className="text-2xl font-semibold mb-4">
        Popular Bus Service to Bagan
      </h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center shadow-lg rounded-lg w-[340px] py-5 gap-2">
          <img src={Express} className="ml-5 h-[70px] object-contain" />
          <p className="text-[17px]">GI Group Express</p>
        </div>
        <div className="flex items-center shadow-lg rounded-lg w-[340px] py-5 gap-2">
          <img src={Express} className="ml-5 h-[70px] object-contain" />
          <p className="text-[17px]">GI Group Express</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link>View More</Link>
      </div>
    </div>
  );
};

export default SuggestBus;
