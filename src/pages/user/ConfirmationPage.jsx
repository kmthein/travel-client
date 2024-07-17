import { FaHotel, FaPlane } from "react-icons/fa6";

import { Steps, Radio, Image, Button } from "antd";
import {
  FaBed,
  FaCalendarAlt,
  FaCheckCircle,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import visaImg from "../../assets/img/icons/visa.jpg";
import paypalImg from "../../assets/img/icons/paypal.jpg";
import kbzImg from "../../assets/img/icons/kbzpay.jpg";
import ayapayImg from "../../assets/img/icons/ayapay.jpg";
import wavepayImg from "../../assets/img/icons/wavepay.jpg";
import beachImg from "../../assets/img/hotel/beach_hotel_1.jpg";
import maiLogo from "../../assets/mai_logo.jpg";
import { useNavigate } from "react-router-dom";
import SelectStep from "../../components/user/common/SelectStep";
import { useSelector } from "react-redux";
import { selectState } from "../../features/select/SelectSlice";
import { IoReturnUpBack } from "react-icons/io5";

const ConfirmationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const navigate = useNavigate();
  const { selectedPlan, flightOnly, hotelPlusFlight } =
    useSelector(selectState);
  const { hotel, room, totalNight } = selectedPlan;

  console.log(+selectedPlan.checkOutDate - +selectedPlan.checkInDate);

  console.log(selectState);

  return (
    <>
      <div
        className="flex w-full h-32 bg-blue-100 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('src/assets/banner.jpg')" }}
      >
        <p className="w-[70%] mx-auto flex items-center text-md font-bold text-white">
          Confirmation Your Travel Plan
        </p>
      </div>
      <div className="w-[70%] mx-auto">
        <div name="step" className="my-10 mx-auto">
          <SelectStep />
        </div>
        <div name="main" className="flex gap-10">
          <div style={{ width: "40%" }}>
            <p className="text-md font-bold m-5">Payment Method</p>

            <div className="ml-5">
              <Radio.Group
                onChange={(e) => setPaymentMethod(e.target.value)}
                value={paymentMethod}
              >
                <div>
                  <Radio value="Visa">
                    <div className="flex justify-between items-center mb-3  w-96 ">
                      <p className="text-md">Visa</p>
                      <img src={visaImg} className="w-10 h-10" />
                    </div>
                  </Radio>

                  <Radio value="PayPal">
                    <div className="flex justify-between items-center mb-3  w-96 ">
                      <p className="text-md">PayPal</p>
                      <img src={paypalImg} className="w-10 h-10" />
                    </div>
                  </Radio>

                  <Radio value="KBZPay">
                    <div className="flex justify-between items-center mb-3  w-96 ">
                      <p className="text-md">KBZPay</p>
                      <img src={kbzImg} className="w-10 h-10" />
                    </div>
                  </Radio>

                  <Radio value="AYAPay">
                    <div className="flex justify-between items-center mb-3  w-96 ">
                      <p className="text-md">AYAPay</p>
                      <img src={ayapayImg} className="w-10 h-10" />
                    </div>
                  </Radio>

                  <Radio value="WavePay">
                    <div className="flex justify-between items-center mb-3  w-96 ">
                      <p className="text-md">WavePay</p>
                      <img src={wavepayImg} className="w-10 h-10" />
                    </div>
                  </Radio>
                </div>
              </Radio.Group>
            </div>
          </div>
          <div
            style={{
              width: "60%",
            }}
          >
            <div className="flex justify-between items-center">
              <p className="text-md font-bold m-5">Summary</p>
              <IoReturnUpBack
                onClick={() => navigate(-1)}
                className="text-3xl cursor-pointer"
              />
            </div>
            {hotel && (
              <>
                <div>
                  <p className="text-md m-5">Hotel</p>
                  <div className="flex ">
                    <Image
                      src={hotel?.imgUrlList[0]}
                      className="p-3 object-cover"
                    />
                    <div className="w-full m-3">
                      <div className="flex justify-between ">
                        <p className="text-md font-bold ">{hotel?.name}</p>
                        <p className="text-md font-bold ">
                          {totalNight * room.roomPrice} ks
                        </p>
                      </div>
                      <div className="flex items-center text-md m-2">
                        <FaCalendarAlt />
                        <p className="ml-2">
                          {selectedPlan?.checkInDate} to{" "}
                          {selectedPlan?.checkOutDate} &#40;
                          {selectedPlan?.totalNight} nights&#41;
                        </p>
                      </div>
                      <div className="flex items-center text-md m-2">
                        <FaBed />
                        <p className="ml-2">1 x Deluxe Room</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-2 h-[0.5px] bg-black" />
              </>
            )}
            {flightOnly ||
              (hotelPlusFlight && (
                <>
                  <div>
                    <p className="text-md  m-5">Flight</p>
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
                            <p className="text-md font-bold mr-5 ">YGN 6:00 </p>
                            <FaLongArrowAltRight className="size-8 inline mr-5" />
                            <p className="text-md font-bold mr-5">BGN 7:00</p>
                          </div>
                          <p className="text-md font-bold ">$45</p>
                        </div>
                        <p className="text-md m-2">
                          Myanmar Airline International
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-2 h-px bg-black" />
                </>
              ))}
            <div name="subtotal" className="p-2">
              <div className="flex justify-between text-md font-semibold m-2">
                <p>Subtotal</p>
                <p>$214</p>
              </div>
              <div className="flex justify-between text-md font-semibold m-2">
                <p>Member Discount &#40;20%&#41; </p>
                <p>-$36</p>
              </div>
            </div>
            <hr className="my-2 h-[0.5px] bg-black" />
            <div className="flex justify-between text-md font-semibold m-2 p-2">
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
    </>
  );
};

export default ConfirmationPage;
