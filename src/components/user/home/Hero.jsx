import React, { useState } from "react";
import MainImg from "../../../assets/img/home/main.png";
import { CiLocationOn } from "react-icons/ci";
import { MdFlightTakeoff, MdOutlineHotel } from "react-icons/md";
import { FaBus } from "react-icons/fa6";
import FlightTicket from "../common/FlightAndHotelSearch";
import FlightAndHotel from "../common/FlightAndHotelSearch";
import BusTicket from "../common/BusTicketSearch";
import Destinationbox from "../common/Destinationbox";
import HotelBox from "../common/HotelBox";
import BusAndHotelSearch from "../common/BusAndHotelSearch";
import Navbar from "../common/Navbar";
const Hero = () => {
  const [option, setOption] = useState("destination");
  const handleOption = (o) => {
    setOption(o);
  };

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
              className={`relative flex flex-col items-center gap-2 cursor-pointer ${
                option === "destination" &&
                "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full "
              }`}
              onClick={() => handleOption("destination")}
            >
              <CiLocationOn size={30} />
              <p className="text-lg md:text-xl">Destination</p>
              <p className="text-sm text-gray-300">
                Find amazing places to visit
              </p>
            </div>
            <div
              className={`relative flex flex-col items-center gap-2 cursor-pointer ${
                option === "hotel" &&
                "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full "
              }`}
              onClick={() => handleOption("hotel")}
            >
              <MdOutlineHotel size={30} />
              <p className="text-lg md:text-xl">Hotels</p>
              <p className="text-sm text-gray-300">
                Find the best places to stay
              </p>
            </div>
            <div
              className={`relative flex flex-col items-center gap-2 cursor-pointer ${
                option === "flight" &&
                "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full "
              }`}
              onClick={() => handleOption("flight")}
            >
              <MdFlightTakeoff size={30} />
              <p className="text-lg md:text-xl">Flight Ticket</p>
              <p className="text-sm text-gray-300">
                Book your flights with ease
              </p>
            </div>
            <div
              className={`relative flex flex-col items-center gap-2 cursor-pointer ${
                option === "flightandhotel" &&
                "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full "
              }`}
              onClick={() => handleOption("flightandhotel")}
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
              className={`relative flex flex-col items-center gap-2 cursor-pointer ${
                option === "bus" &&
                "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full "
              }`}
              onClick={() => handleOption("bus")}
            >
              <FaBus size={30} />
              <p className="text-lg md:text-xl">Bus Ticket</p>
              <p className="text-sm text-gray-300">Book your bus rides here</p>
            </div>
            <div
              className={`relative flex flex-col items-center gap-2 cursor-pointer ${
                option === "busandhotel" &&
                "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full "
              }`}
              onClick={() => handleOption("busandhotel")}
            >
              <div className="flex gap-1">
                <FaBus size={30} />
                <MdOutlineHotel size={30} />
              </div>
              <p className="text-lg md:text-xl">Flight + Hotel</p>
              <p className="text-sm text-gray-300">
                Combine flights and hotels for savings
              </p>
            </div>
          </div>
          <div className="w-full min-h-[200px] rounded-lg">
            {option === "destination" && <Destinationbox />}
            {option === "hotel" && <HotelBox />}
            {option === "flight" && <FlightTicket />}
            {option === "flightandhotel" && <FlightAndHotel />}
            {option === "bus" && <BusTicket />}
            {option === "busandhotel" && <BusAndHotelSearch />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
