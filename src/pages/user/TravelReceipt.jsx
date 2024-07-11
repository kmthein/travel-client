import { Image, Button } from "antd";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import maiLogo from "../../assets/mai_logo.jpg";
import beachImg from "../../assets/img/hotel/beach_hotel_1.jpg";
import { useNavigate } from "react-router-dom";

const TravelReceipt = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[70%] mx-auto">
      <div
        className="flex w-full h-32 bg-blue-100 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('src/assets/banner.jpg')" }}
      >
        <p className="ml-20 mt-10 text-xl font-bold text-white font-mono">
          Trip From Yangon To Bagan
        </p>
      </div>

      <div className="flex items-center my-5 ml-20 text-2xl  ">
        <p className="font-bold ml-5">Travel Plan Successfully Made</p>
      </div>
      <div
        name="main"
        style={{
          width: "85%",
          minHeight: "100vh",
          margin: "10px auto",

          border: "1px solid black",
        }}
      >
        <div name="status" className="m-5 mb-20 text-xl font-semibold">
          <p>Booking Status</p>
          <hr className="my-5 h-px bg-black" />
          <p>
            The reservation has been confirmed and the ticket number for this
            itinerary has been emailed. Thank you for booking with Travel
            <span className="text-blue-500">Trax</span>.
          </p>
        </div>
        <div name="customer_info" className="m-5 mb-20 text-xl font-semibold">
          <p>Customer Information</p>
          <hr className="my-5 h-px bg-black" />
          <div className="flex flex-wrap justify-evenly">
            <p className=" w-1/3">Traveler: Emily Hank</p>
            <p className=" w-1/3">Booking Number: 12345678</p>
            <p className="w-1/3">Phone: +95 9452887631</p>
            <p className=" w-1/3">Email: emilyhank@gmail.com</p>
            <p className="w-1/3">Booked On: 22nd, July, 2024</p>
            <div className="w-1/3"></div>
          </div>
        </div>
        <div name="summary" className="m-5 mb-20 text-xl font-semibold">
          <p>Trip Summary</p>
          <hr className="my-5 h-px bg-black" />
          <p>
            For any changes to the itinerary, call us 24/7 for free{" "}
            <span className="text-blue-800">+95 9500 5321</span>
          </p>
        </div>
        <div name="summary" className="m-5 mb-20 text-xl font-semibold">
          <p>Flight Summary</p>
          <div className="flex mt-5">
            <div className="w-1/3 border-r border-black p-3 pl-0">
              <div className="mb-5">
                <p>From:</p>
                <p>Yangon, &#40;YGN&#41;</p>
              </div>
              <div>
                <p>To:</p>
                <p>Ngapali, &#40;NPL&#41;</p>
              </div>
            </div>
            <div className="w-1/3 border-r border-black p-3">
              <p className="mb-1">Depart:</p>
              <p className="mb-1">July, 31st, 2024</p>
              <p className="mb-1">3:45 PM - 6:00</p>
              <p className="mb-1">&#40;+2day&#41;&#40;1 stop&#41;</p>
            </div>
            <div className="w-1/3 p-3">
              <p className="mb-2">Airline Confirmation</p>
              <p>Myanmar Airway</p>
            </div>
          </div>
          <div className="flex m-5">
            <div className="w-1/4">
              <Image
                src={maiLogo}
                width="150px"
                height="150px"
                className="object-cover"
              />
            </div>
            <div className="w-1/4">
              <p className="mb-2">From</p>
              <p>YGN</p>
              <p>3:45 PM</p>
            </div>
            <div className="w-1/4 ">
              <FaLongArrowAltRight className="size-8 mt-5" />
            </div>
            <div className="w-1/4">
              <p className="mb-2">To</p>
              <p>NPL</p>
              <p>6:00 PM</p>
            </div>
          </div>
          <div className="flex">
            <div className="m-5">
              <Image
                src={beachImg}
                width="150px"
                height="150px"
                className="rounded-xl"
              />
            </div>
            <div className="m-5 ml-12">
              <p className="mb-2">Ngew Saung Yacht Club & Resort</p>
              <p className="mb-2 font-normal">
                7 July 2024 - 9 July 2024 &#40;+2 nights&#41;{" "}
              </p>
              <p className="font-normal">1 x Deluxe Room</p>
            </div>
          </div>
          <div className="flex m-5">
            <div className="w-1/4">
              <Image
                src={maiLogo}
                width="150px"
                height="150px"
                className="object-cover"
              />
            </div>
            <div className="w-1/4">
              <p className="mb-2">From</p>
              <p>NPL</p>
              <p>3:45 PM</p>
            </div>
            <div className="w-1/4 ">
              <FaLongArrowAltLeft className="size-8 mt-5" />
            </div>
            <div className="w-1/4">
              <p className="mb-2">To</p>
              <p>YGN</p>
              <p>6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          className="w-32 text-white bg-blue-500 mr-24 my-5"
          onClick={() => navigate("/")}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default TravelReceipt;
