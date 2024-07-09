import { FaHotel, FaPlane, FaLocationDot } from "react-icons/fa6";
import Heading from "../../components/user/common/Heading";
import { Steps, Rate, Button, Image } from "antd";
import { FaBed, FaCheckCircle } from "react-icons/fa";
import beachImg from "../../assets/beach_hotel_1.jpg";
import CustomFooter from "../../components/user/common/Footer";

import roomImg from "../../assets/room.jpg";

const FlightAndHotelSelectRoom = () => {
  return (
    <div
      style={{
        width: "90%",
        minHeight: "100vh",
        margin: "0 auto",
        border: "1px solid black",
      }}
    >
      <Heading />

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
      <div className="flex items-center ml-20 text-2xl  ">
        <FaBed />
        <p className="font-bold ml-5">Select Room Type</p>
      </div>
      <div name="main" style={{ width: "90%", margin: "10px auto" }}>
        <div
          style={{
            margin: "10px auto",
            padding: "10px",
            border: "1px solid #cad2de",
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "30%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <Image src={roomImg} width="300px" height="300px" />
          </div>
          <div
            style={{
              width: "70%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-between">
              <p className="text-lg font-bold">Standard Double Bed</p>
              <p className="text-lg font-bold">USD 72</p>
            </div>

            <p className="my-2">Features</p>
            <ul style={{ listStyle: "inside" }}>
              <li>1 king bed</li>
              <li>Room size: 28 m sq / 301 ft sq</li>
              <li>City View</li>
              <li>Balcony / Terrace</li>
              <li>Non-somking</li>
              <li>Shower</li>
            </ul>
            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3">Book Room</Button>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "10px auto",
            padding: "10px",
            border: "1px solid #cad2de",
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "30%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <Image src={roomImg} width="300px" height="300px" />
          </div>
          <div
            style={{
              width: "70%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-between">
              <p className="text-lg font-bold">Standard Twin Bed</p>
              <p className="text-lg font-bold">USD 72</p>
            </div>

            <p className="my-2">Features</p>
            <ul style={{ listStyle: "inside" }}>
              <li>2 single beds</li>
              <li>Room size: 28 m sq / 301 ft sq</li>
              <li>City View</li>
              <li>Balcony / Terrace</li>
              <li>Non-somking</li>
              <li>Shower</li>
            </ul>
            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3">Book Room</Button>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "10px auto",
            padding: "10px",
            border: "1px solid #cad2de",
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "30%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <Image src={roomImg} width="300px" height="300px" />
          </div>
          <div
            style={{
              width: "70%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-between">
              <p className="text-lg font-bold">Standard Double Bed</p>
              <p className="text-lg font-bold">USD 72</p>
            </div>

            <p className="my-2">Features</p>
            <ul style={{ listStyle: "inside" }}>
              <li>1 king bed</li>
              <li>Room size: 28 m sq / 301 ft sq</li>
              <li>City View</li>
              <li>Balcony / Terrace</li>
              <li>Non-somking</li>
              <li>Shower</li>
            </ul>
            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3">Book Room</Button>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default FlightAndHotelSelectRoom;
