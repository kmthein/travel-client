import { FaHotel, FaPlane } from "react-icons/fa6";

import { Steps, Radio, Image, Button } from "antd";
import {
  FaBed,
  FaCalendarAlt,
  FaCheckCircle,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { useState } from "react";

import visaImg from "../../assets/img/icons/visa.jpg";
import paypalImg from "../../assets/img/icons/paypal.jpg";
import kbzImg from "../../assets/img/icons/kbzpay.jpg";
import ayapayImg from "../../assets/img/icons/ayapay.jpg";
import wavepayImg from "../../assets/img/icons/wavepay.jpg";

import beachImg from "../../assets/img/hotel/beach_hotel_1.jpg";
import maiLogo from "../../assets/mai_logo.jpg";
import { useNavigate } from "react-router-dom";

const FlightAndHotelConfirmation = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
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
        <div style={{ width: "50%" }}>
          <p className="text-xl font-bold m-5">Payment Method</p>

          <div className="ml-5">
            <Radio.Group
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={paymentMethod}
            >
              <div>
                <Radio value="Visa">
                  <div className="flex justify-between items-center mb-3  w-96 ">
                    <p className="text-xl">Visa</p>
                    <img src={visaImg} className="w-10 h-10" />
                  </div>
                </Radio>

                <Radio value="PayPal">
                  <div className="flex justify-between items-center mb-3  w-96 ">
                    <p className="text-xl">PayPal</p>
                    <img src={paypalImg} className="w-10 h-10" />
                  </div>
                </Radio>

                <Radio value="KBZPay">
                  <div className="flex justify-between items-center mb-3  w-96 ">
                    <p className="text-xl">KBZPay</p>
                    <img src={kbzImg} className="w-10 h-10" />
                  </div>
                </Radio>

                <Radio value="AYAPay">
                  <div className="flex justify-between items-center mb-3  w-96 ">
                    <p className="text-xl">AYAPay</p>
                    <img src={ayapayImg} className="w-10 h-10" />
                  </div>
                </Radio>

                <Radio value="WavePay">
                  <div className="flex justify-between items-center mb-3  w-96 ">
                    <p className="text-xl">WavePay</p>
                    <img src={wavepayImg} className="w-10 h-10" />
                  </div>
                </Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <p className="text-xl font-bold m-5">Summary</p>
          <div>
            <p className="text-xl  m-5">Hotel</p>
            <div className="flex ">
              <Image
                src={beachImg}
                width="200px"
                height="150px"
                className="p-3"
              />
              <div className="w-full m-3">
                <div className="flex justify-between ">
                  <p className="text-xl font-bold ">
                    Ngwe Saung Yacht Club & Resort
                  </p>
                  <p className="text-xl font-bold ">$168</p>
                </div>
                <div className="flex items-center text-xl m-2">
                  <FaCalendarAlt />
                  <p className="ml-2">
                    7 July 2024 - 9 July 2024 &#40;2 nights&#41;
                  </p>
                </div>
                <div className="flex items-center text-xl m-2">
                  <FaBed />
                  <p className="ml-2">1 x Deluxe Room</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-2 h-px bg-black" />
          <div>
            <p className="text-xl  m-5">Flight</p>
            <div className="flex ">
              <Image
                src={maiLogo}
                width="200px"
                height="150px"
                className="p-3 object-cover"
              />
              <div className="w-full m-3">
                <div className="flex justify-between ">
                  <div className="flex justify-evenly items-center ">
                    <p className="text-xl font-bold mr-5 ">YGN 6:00 </p>
                    <FaLongArrowAltRight className="size-8 inline mr-5" />
                    <p className="text-xl font-bold mr-5">BGN 7:00</p>
                  </div>
                  <p className="text-xl font-bold ">$45</p>
                </div>
                <p className="text-xl m-2">Myanmar Airline International</p>
              </div>
            </div>
          </div>
          <hr className="my-2 h-px bg-black" />
          <div name="subtotal" className="p-2">
            <div className="flex justify-between text-xl font-semibold m-2">
              <p>Subtotal</p>
              <p>$214</p>
            </div>
            <div className="flex justify-between text-xl font-semibold m-2">
              <p>Member Discount &#40;20%&#41; </p>
              <p>-$36</p>
            </div>
            <div className="flex justify-between text-xl font-semibold m-2">
              <p>Delivery Fees</p>
              <p>$5</p>
            </div>
          </div>
          <hr className="my-2 h-px bg-black" />
          <div className="flex justify-between text-xl font-semibold m-2 p-2">
            <p>Total</p>
            <p>$183</p>
          </div>
          <div className="flex justify-end ">
            <Button
              className=" m-4 w-32 text-white bg-red-500"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button
              className=" m-4 w-32 bg-blue-500  text-white"
              onClick={() => navigate("/travelreceipt")}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightAndHotelConfirmation;
