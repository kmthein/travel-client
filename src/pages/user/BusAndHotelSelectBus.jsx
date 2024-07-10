import { FaBus, FaHotel, FaPlane } from "react-icons/fa6";
import { Steps, Button, Image } from "antd";
import { FaBed, FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";

import busLogo2 from "../../assets/img/bus/busLogo2.jpg";

const BusAndHotelSelectBus = () => {
  return (
    <div className="w-[70%] mx-auto">
      <div
        className="flex h-32 bg-blue-100 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('src/assets/banner.jpg')" }}
      >
        <p className="ml-20 mt-10 text-xl font-bold text-white font-mono">
          Trip From Yangon To Bagan
        </p>
      </div>
      <div name="step" className="w-4/5 my-10 mx-auto">
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
              status: "finish",
              icon: <FaBed />,
            },
            {
              title: "Select Bus",
              status: "process",
              icon: <FaBus />,
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
        <FaPlane />
        <p className="font-bold ml-5">Select Airline</p>
      </div>
      <div name="main" className="w-11/12 mx-auto my-10">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex border border-[#cad2de] rounded-2xl p-2 mb-4"
          >
            <div className="w-2/5 m-1 p-1 flex items-center">
              <Image
                className="inline-block"
                src={busLogo2}
                width="150px"
                height="150px"
              />
              <div className="ml-2">
                <p className="text-2xl font-bold">Mandalar Min</p>
                <p className="text-2xl font-bold">Express Bus</p>
              </div>
            </div>
            <div className="w-2/5 m-1 p-1 flex justify-evenly items-center">
              <div>
                <div className="text-xl font-bold my-3">6:00</div>
                <div>YGN</div>
              </div>
              <FaLongArrowAltRight className="text-2xl" />
              <div>
                <div className="text-xl font-bold my-3">7:00</div>
                <div>BGN</div>
              </div>
            </div>
            <div className="w-1/5 m-1 p-1 flex flex-col justify-between">
              <p className="text-lg font-bold text-right">+ USD 72</p>
              <Button className="bg-blue-500 p-3 w-full">Select</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusAndHotelSelectBus;
