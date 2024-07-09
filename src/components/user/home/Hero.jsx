import React, { useState } from "react";
import MainImg from "../../../assets/img/home/main.png";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { MdFlightTakeoff, MdOutlineHotel, MdPerson } from "react-icons/md";
import { FaBus } from "react-icons/fa6";
import { Button, Input, DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const Hero = () => {
  const [option, setOption] = useState("destination");
  const handleOption = (o) => {
    setOption(o);
  };

  return (
    <div
      className="h-screen flex flex-col justify-center text-white relative"
      style={{
        backgroundImage: `url(${MainImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="w-[1660px] mx-auto relative p-8 md:p-12 lg:p-16 rounded-lg z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Discover Your Perfect Getaway
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Find the best flights, hotels, and activities for your dream vacation.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div
            className={`relative flex flex-col items-center gap-2 cursor-pointer ${
              option === "destination" &&
              "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full after:transition after:duration-300 after:ease-in-out"
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
              "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full after:transition after:duration-300 after:ease-in-out"
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
              "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full after:transition after:duration-300 after:ease-in-out"
            }`}
            onClick={() => handleOption("flight")}
          >
            <MdFlightTakeoff size={30} />
            <p className="text-lg md:text-xl">Flight Ticket</p>
            <p className="text-sm text-gray-300">Book your flights with ease</p>
          </div>
          <div
            className={`relative flex flex-col items-center gap-2 cursor-pointer ${
              option === "flightandhotel" &&
              "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full after:transition after:duration-300 after:ease-in-out"
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
              "after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-full after:transition after:duration-300 after:ease-in-out"
            }`}
            onClick={() => handleOption("bus")}
          >
            <FaBus size={30} />
            <p className="text-lg md:text-xl">Bus Ticket</p>
            <p className="text-sm text-gray-300">Book your bus rides here</p>
          </div>
        </div>
        <div className="w-full bg-white/20 mt-8 rounded-lg p-6 md:p-8">
          {option === "hotel" && (
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center flex-1">
                <CiSearch size={24} className="text-white" />
                <Input
                  placeholder="Where do you want to go?"
                  className="bg-transparent text-black text-xl ml-5 flex-1 placeholder:text-gray-800"
                />
              </div>
              <div className="flex items-center gap-3">
                <Space direction="vertical" size={12}>
                  <RangePicker
                    className="bg-transparent text-black placeholder:text-gray-800 rounded-md"
                    placeholder={["Check-in", "Check-out"]}
                    style={{ width: "100%" }}
                  />
                </Space>
              </div>
              <div className="flex items-center gap-3">
                <MdPerson size={24} className="text-white" />
                <p className="text-white">1 room, 2 adults</p>
              </div>
              <Button
                type="primary"
                size="large"
                className="mt-4 md:mt-0 transition-transform transform hover:scale-105"
              >
                Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
