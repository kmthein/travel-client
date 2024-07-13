import React from "react";
import MAI from "../../../assets/mai_logo.jpg";
import { Link } from "react-router-dom";

const Suggestairline = ({ arrive, name }) => {
  return (
    <>
      {arrive && arrive.length > 0 && (
        <div className="my-5">
          <h2 className="text-2xl font-semibold mb-4">
            Popular Airline to {name}
          </h2>
          <div className="flex flex-wrap gap-[20px]">
            {arrive.map((d, i) => (
              <div
                className="flex items-center shadow-lg rounded-lg card_gap py-5 gap-5 pl-4"
                key={i}
              >
                <img
                  src={d.airLine?.image[0].imgUrl}
                  className=" w-[70px] h-[70px] object-contain"
                />
                <p className="text-[17px]">{d?.airLine?.name}</p>
              </div>
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

export default Suggestairline;
