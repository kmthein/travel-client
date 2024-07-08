import { FaHotel, FaPlane, FaLocationDot } from "react-icons/fa6";
import Heading from "../../components/user/common/Heading";
import { Steps, Rate, Button, Image } from "antd";
import { FaBed, FaCheckCircle } from "react-icons/fa";
import beachImg from "../../assets/beach_hotel_1.jpg";
import CustomFooter from "../../components/user/common/Footer";

const FlightAndHotelSelectHotel = () => {
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
              status: "process",
              icon: <FaHotel />,
            },
            {
              title: "Select Room",
              status: "wait",
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
        <FaHotel />
        <p className="font-bold ml-5">Start by selecting your hotel</p>
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
            <Image src={beachImg} width="200px" height="200px" />
          </div>
          <div
            style={{
              width: "70%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-between">
              <p className="text-lg font-bold">
                Ngwe Saung Yacht Club and Resort
              </p>
              <p className="text-lg font-bold">USD 72</p>
            </div>
            <Rate value={5} className="text-sm" />
            <div className="flex items-center mb-5">
              <FaLocationDot className="size-4 mr-2 text-blue-400" />
              <p className="text-base font-semibold text-blue-400">
                Beach front, Ngwe Saung Beach
              </p>
            </div>
            <p className="mb-5">This property offers:</p>
            <div>
              <Button className="mr-2">Breakfast</Button>
              <Button className="mr-2">Sea View</Button>
              <Button className="mr-2">Free Wifi</Button>
            </div>
            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3">Select Room</Button>
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
            <Image src={beachImg} width="200px" height="200px" />
          </div>
          <div
            style={{
              width: "70%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-between">
              <p className="text-lg font-bold">
                Ngwe Saung Yacht Club and Resort
              </p>
              <p className="text-lg font-bold">USD 72</p>
            </div>
            <Rate value={5} className="text-sm" />
            <div className="flex items-center mb-5">
              <FaLocationDot className="size-4 mr-2 text-blue-400" />
              <p className="text-base font-semibold text-blue-400">
                Beach front, Ngwe Saung Beach
              </p>
            </div>
            <p className="mb-5">This property offers:</p>
            <div>
              <Button className="mr-2">Breakfast</Button>
              <Button className="mr-2">Sea View</Button>
              <Button className="mr-2">Free Wifi</Button>
            </div>
            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3">Select Room</Button>
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
            <Image src={beachImg} width="200px" height="200px" />
          </div>
          <div
            style={{
              width: "70%",
              padding: "5px",
              margin: "5px",
            }}
          >
            <div className="flex justify-between">
              <p className="text-lg font-bold">
                Ngwe Saung Yacht Club and Resort
              </p>
              <p className="text-lg font-bold">USD 72</p>
            </div>
            <Rate value={5} className="text-sm" />
            <div className="flex items-center mb-5">
              <FaLocationDot className="size-4 mr-2 text-blue-400" />
              <p className="text-base font-semibold text-blue-400">
                Beach front, Ngwe Saung Beach
              </p>
            </div>
            <p className="mb-5">This property offers:</p>
            <div>
              <Button className="mr-2">Breakfast</Button>
              <Button className="mr-2">Sea View</Button>
              <Button className="mr-2">Free Wifi</Button>
            </div>
            <div className="flex justify-end">
              <Button className="bg-blue-500 p-3">Select Room</Button>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default FlightAndHotelSelectHotel;
