import React from "react";
import MAI from "../../../assets/mai_logo.jpg";
import { Link } from "react-router-dom";
const Suggestairline = () => {
  return (
    <div className="my-5">
      <h2 className="text-2xl font-semibold mb-4">Popular Airline to Bagan</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center shadow-lg rounded-lg w-[340px] py-5">
          <img src={MAI} className=" h-[70px] object-contain" />
          <p className="text-[17px]">Myanmar Airways international</p>
        </div>
        <div className="flex items-center shadow-lg rounded-lg w-[340px] py-5">
          <img src={MAI} className=" h-[70px] object-contain" />
          <p className="text-[17px]">Myanmar Airways international</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link className="">View More</Link>
      </div>
    </div>
  );
};

export default Suggestairline;
