import { FaHotel, FaLocationDot, FaBus } from "react-icons/fa6";
import { Steps, Rate, Button, Image } from "antd";
import { FaBed, FaCheckCircle } from "react-icons/fa";
import beachImg from "../../assets/img/hotel/beach_hotel_1.jpg";
import { useNavigate } from "react-router-dom";

const BusAndHotelSelectHotel = () => {
  const navigate = useNavigate();
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
              status: "process",
              icon: <FaHotel />,
            },
            {
              title: "Select Room",
              status: "wait",
              icon: <FaBed />,
            },
            {
              title: "Select Bus",
              status: "wait",
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
      <div className="flex items-center ml-20 text-2xl mb-8">
        <FaHotel />
        <p className="font-bold ml-5">Start by selecting your hotel</p>
      </div>
      <div className="w-11/12 my-10 mx-auto">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="my-4 p-6 border border-gray-300 rounded-2xl flex"
          >
            <div className="w-1/3 p-2">
              <Image src={beachImg} width={200} height={200} />
            </div>
            <div className="w-2/3 p-2">
              <div className="flex justify-between mb-2">
                <p className="text-lg font-bold">
                  Ngwe Saung Yacht Club and Resort
                </p>
                <p className="text-lg font-bold">USD 72</p>
              </div>
              <Rate value={5} className="text-sm mb-2" />
              <div className="flex items-center mb-5">
                <FaLocationDot className="text-xl mr-2 text-blue-400" />
                <p className="text-base font-semibold text-blue-400">
                  Beach front, Ngwe Saung Beach
                </p>
              </div>
              <p className="mb-5">This property offers:</p>
              <div className="flex flex-wrap mb-4">
                <Button className="mr-2 mb-2">Breakfast</Button>
                <Button className="mr-2 mb-2">Sea View</Button>
                <Button className="mr-2 mb-2">Free Wifi</Button>
              </div>
              <div className="flex justify-end">
                <Button
                  className="bg-blue-500 text-white p-3"
                  onClick={() => navigate("/busandroom")}
                >
                  Select Room
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusAndHotelSelectHotel;
