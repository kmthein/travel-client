import { FaHotel, FaPlane, FaLocationDot } from "react-icons/fa6";
import Heading from "../../components/user/common/Heading";
import { Steps, Rate, Button, Image } from "antd";
import { FaBed, FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";

import CustomFooter from "../../components/user/common/Footer";

import maiImg from "../../assets/mai_logo.jpg";

const FlightAndHotelSelectFlight = () => {
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
              status: "finish",
              icon: <FaBed />,
            },
            {
              title: "Select Flight",
              status: "process",
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
        <FaPlane />
        <p className="font-bold ml-5">Select Airline</p>
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
              width: "40%",
              margin: "5px",
              padding: "5px",
            }}
          >
            <Image
              className="inline-block"
              src={maiImg}
              width="150px"
              height="150px"
            />
            <div className="inline-block ">
              <p className="text-2xl  font-bold">Myanmar Airways</p>
              <p className="text-2xl  font-bold">International</p>
            </div>
          </div>
          <div
            className="flex justify-evenly "
            style={{
              width: "40%",
              margin: "5px",
              padding: "5px",
            }}
          >
            <div>
              <div className="text-xl font-bold my-3">6:00</div>
              <div>YGN</div>
            </div>
            <div>
              <FaLongArrowAltRight className="size-8 mt-3" />
            </div>
            <div>
              <div className="text-xl font-bold my-3">7:00</div>
              <div>BGN</div>
            </div>
          </div>
          <div
            style={{
              width: "20%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-end">
              <p className="text-lg font-bold">+ USD 72</p>
            </div>

            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3 mt-20 w-32">Select</Button>
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
              width: "40%",
              margin: "5px",
              padding: "5px",
            }}
          >
            <Image
              className="inline-block"
              src={maiImg}
              width="150px"
              height="150px"
            />
            <div className="inline-block ">
              <p className="text-2xl  font-bold">Myanmar Airways</p>
              <p className="text-2xl  font-bold">International</p>
            </div>
          </div>
          <div
            className="flex justify-evenly "
            style={{
              width: "40%",
              margin: "5px",
              padding: "5px",
            }}
          >
            <div>
              <div className="text-xl font-bold my-3">6:00</div>
              <div>YGN</div>
            </div>
            <div>
              <FaLongArrowAltRight className="size-8 mt-3" />
            </div>
            <div>
              <div className="text-xl font-bold my-3">7:00</div>
              <div>BGN</div>
            </div>
          </div>
          <div
            style={{
              width: "20%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-end">
              <p className="text-lg font-bold">+ USD 72</p>
            </div>

            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3 mt-20 w-32">Select</Button>
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
              width: "40%",
              margin: "5px",
              padding: "5px",
            }}
          >
            <Image
              className="inline-block"
              src={maiImg}
              width="150px"
              height="150px"
            />
            <div className="inline-block ">
              <p className="text-2xl  font-bold">Myanmar Airways</p>
              <p className="text-2xl  font-bold">International</p>
            </div>
          </div>
          <div
            className="flex justify-evenly "
            style={{
              width: "40%",
              margin: "5px",
              padding: "5px",
            }}
          >
            <div>
              <div className="text-xl font-bold my-3">6:00</div>
              <div>YGN</div>
            </div>
            <div>
              <FaLongArrowAltRight className="size-8 mt-3" />
            </div>
            <div>
              <div className="text-xl font-bold my-3">7:00</div>
              <div>BGN</div>
            </div>
          </div>
          <div
            style={{
              width: "20%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-end">
              <p className="text-lg font-bold">+ USD 72</p>
            </div>

            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3 mt-20 w-32">Select</Button>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default FlightAndHotelSelectFlight;
