import React from "react";
import { Link } from "react-router-dom";
import SuggestHotelItem from "./SuggestHotelItem";

const SuggestHotel = () => {
  return (
    <div className="my-5">
      <h2 className="text-2xl font-semibold mb-4">Popular Hotels in Bagan</h2>
      <div className="flex flex-wrap gap-4">
        <SuggestHotelItem />
        <SuggestHotelItem />
        <SuggestHotelItem />
      </div>
      <div className="flex justify-end">
        <Link className="">View More</Link>
      </div>
    </div>
  );
};

export default SuggestHotel;
