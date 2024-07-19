import React, { useState } from "react";
import MainImg from "../../../assets/img/home/main.png";
import { CiLocationOn } from "react-icons/ci";
import { MdFlightTakeoff, MdOutlineHotel } from "react-icons/md";
import { FaBus } from "react-icons/fa6";
// import FlightTicket from "../common/FlightAndHotelSearch";
// import FlightAndHotel from "../common/FlightAndHotelSearch";
// import BusTicket from "../common/BusTicketSearch";
// import Destinationbox from "../common/Destinationbox";
// import HotelBox from "../common/HotelBox";
// import BusAndHotelSearch from "../common/BusAndHotelSearch";
import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen text-white relative bg-cover bg-center"
      style={{ backgroundImage: `url(${MainImg})` }}
    >
      <Navbar />

      <div className="w-full h-full flex flex-col justify-center">
        <div className=" mx-auto relative p-8 md:p-12 lg:p-16 rounded-lg z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Discover Your Perfect Getaway
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Find the best flights, hotels, and activities for your dream
            vacation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div
              className="relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-700 border-b-2 border-transparent hover:border-yellow-400"
              onClick={() => navigate("destination")}
            >
              <CiLocationOn size={30} />
              <p className="text-lg md:text-xl">Destination</p>
              <p className="text-sm text-gray-300">
                Find amazing places to visit
              </p>
            </div>
            <div
              className="relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-700 border-b-2 border-transparent hover:border-yellow-400"
              onClick={() => navigate("hotel")}
            >
              <MdOutlineHotel size={30} />
              <p className="text-lg md:text-xl">Hotels</p>
              <p className="text-sm text-gray-300">
                Find the best places to stay
              </p>
            </div>
            <div
              className="relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-700 border-b-2 border-transparent hover:border-yellow-400"
              onClick={() => navigate("flight")}
            >
              <MdFlightTakeoff size={30} />
              <p className="text-lg md:text-xl">Flight Ticket</p>
              <p className="text-sm text-gray-300">
                Book your flights with ease
              </p>
            </div>
            <div
              className="relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-700 border-b-2 border-transparent hover:border-yellow-400"
              onClick={() => navigate("flightandhotel")}
            >
              <div className="flex gap-1">
                <MdFlightTakeoff size={30} />
                <MdOutlineHotel size={30} />
              </div>
              <p className="text-lg md:text-xl">Flight + Hotel</p>
              <p className="text-sm text-gray-300">
                Combine flights and hotels for savings
              </p>
            </div>
            <div
              className="relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-700 border-b-2 border-transparent hover:border-yellow-400"
              onClick={() => navigate("bus")}
            >
              <FaBus size={30} />
              <p className="text-lg md:text-xl">Bus Ticket</p>
              <p className="text-sm text-gray-300">Book your bus rides here</p>
            </div>
            <div
              className="relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-700 border-b-2 border-transparent hover:border-yellow-400"
              onClick={() => navigate("busandhotel")}
            >
              <div className="flex gap-1">
                <FaBus size={30} />
                <MdOutlineHotel size={30} />
              </div>
              <p className="text-lg md:text-xl">Bus + Hotel</p>
              <p className="text-sm text-gray-300">
                Combine buses and hotels for savings
              </p>
            </div>
          </div>
          {/* <div className="w-full min-h-[200px] rounded-lg">
            {option === "destination" && <Destinationbox />}
            {option === "hotel" && <HotelBox />}
            {option === "flight" && <FlightTicket />}
            {option === "flightandhotel" && <FlightAndHotel />}
            {option === "bus" && <BusTicket />}
            {option === "busandhotel" && <BusAndHotelSearch />}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
