import React from "react";
import { Link } from "react-router-dom";
import SuggestHotelItem from "./SuggestHotelItem";

const SuggestHotel = ({ hotels, name }) => {
  return (
    <>
      {hotels && hotels.length > 0 && (
        <div className="my-5">
          <h2 className="text-2xl font-semibold mb-4">
            Popular Hotels in {name}
          </h2>
          <div className="flex flex-wrap gap-[20px] mb-3">
            {hotels.slice(0, 3).map((hotel, i) => (
              <SuggestHotelItem hotel={hotel} key={i} />
            ))}
          </div>
          <div className="flex justify-end">
            <Link className="">View More</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SuggestHotel;
