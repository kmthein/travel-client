import { FaHotel, FaPlane, FaLocationDot } from "react-icons/fa6";
import Heading from "../../components/user/common/Heading";
import { Steps, Rate, Button, Image } from "antd";
import { FaBed, FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";

const FlightAndHotelConfirmation = () => {
  return (
    <div
      style={{
        width: "90%",
        minHeight: "100vh",
        margin: "0 auto",
        border: "1px solid black",
      }}
    >
      <div
        className="flex w-full h-32 bg-blue-100 bg-no-repeat bg-cover"
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
              title: "Select Flight",
              status: "finish",
              icon: <FaPlane />,
            },
            {
              title: "Confirmation",
              status: "process",
              icon: <FaCheckCircle />,
            },
          ]}
        />
      </div>
      <div className="flex items-center ml-20 text-2xl  ">
        <p className="font-bold ml-5">Confirmation</p>
      </div>
      <div
        name="main"
        style={{ width: "90%", margin: "10px auto", display: "flex" }}
      >
        <div
          style={{ width: "50%", height: "500px", backgroundColor: "pink" }}
        ></div>
        <div
          style={{
            width: "50%",
            height: "500px",
            backgroundColor: "lightblue",
          }}
        ></div>
      </div>
    </div>
  );
};

export default FlightAndHotelConfirmation;
