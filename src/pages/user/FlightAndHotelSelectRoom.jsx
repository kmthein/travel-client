import { FaHotel, FaPlane } from "react-icons/fa6";
import { Steps, Button, Image } from "antd";
import { FaBed, FaCheckCircle } from "react-icons/fa";

import roomImg from "../../assets/room.jpg";

const FlightAndHotelSelectRoom = () => {
  return (
    <div className="w-[70%] mx-auto px-4">
      <div
        className="relative h-32 bg-blue-100 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('src/assets/banner.jpg')" }}
      >
        <p className="absolute left-20 top-10 text-xl font-bold text-white font-mono">
          Trip From Yangon To Bagan
        </p>
      </div>
      <div className="w-4/5 my-10 mx-auto">
        <Steps
          size="small"
          items={[
            {
              title: "Select Hotel",
              status: "finish",
              icon: <FaHotel />,
            },
            {
              title: "Select Room",
              status: "process",
              icon: <FaBed />,
            },
            {
              title: "Select Flight",
              status: "wait",
              icon: <FaPlane />,
            },
            {
              title: "Confirmation",
              status: "wait",
              icon: <FaCheckCircle />,
            },
          ]}
        />
      </div>
      <div className="flex items-center ml-20 text-2xl">
        <FaBed />
        <p className="font-bold ml-5">Select Room Type</p>
      </div>
      <div className="w-11/12 my-10 mx-auto">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="my-4 p-4 border border-gray-300 rounded-2xl flex"
          >
            <div className="w-1/3 p-2">
              <Image src={roomImg} width={300} height={300} />
            </div>
            <div className="w-2/3 p-2">
              <div className="flex justify-between">
                <p className="text-lg font-bold">
                  {index % 2 === 0
                    ? "Standard Double Bed"
                    : "Standard Twin Bed"}
                </p>
                <p className="text-lg font-bold">USD 72</p>
              </div>
              <p className="my-2 font-semibold">Features</p>
              <ul className="list-disc pl-5">
                <li>1 king bed</li>
                <li>Room size: 28 m² / 301 ft²</li>
                <li>City View</li>
                <li>Balcony / Terrace</li>
                <li>Non-smoking</li>
                <li>Shower</li>
              </ul>
              <div className="flex justify-end mt-4">
                <Button className="bg-blue-500 text-white p-2">
                  Book Room
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightAndHotelSelectRoom;
