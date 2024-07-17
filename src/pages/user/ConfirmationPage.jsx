import { IoReturnUpBack } from "react-icons/io5";
import { Radio, Image, Button, Divider, Typography } from "antd";
import { FaBed, FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";

const { Text } = Typography;

import visaImg from "../../assets/img/icons/visa.jpg";
import paypalImg from "../../assets/img/icons/paypal.jpg";
import kbzImg from "../../assets/img/icons/kbzpay.jpg";
import ayapayImg from "../../assets/img/icons/ayapay.jpg";
import wavepayImg from "../../assets/img/icons/wavepay.jpg";
import { useNavigate } from "react-router-dom";
import SelectStep from "../../components/user/common/SelectStep";
import { useSelector } from "react-redux";
import { selectState } from "../../features/select/SelectSlice";
import { useState } from "react";
import { transportState } from "../../features/transport/TransportSlice";

const ConfirmationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const navigate = useNavigate();
  const { selectedPlan, flightOnly } = useSelector(selectState);
  const { hotel, room } = selectedPlan;

  const { economy, business, firstclass, transport } =
    useSelector(transportState);
  let totalAmount = economy.amount + business.amount + firstclass.amount;
  let serviceFee = totalAmount * 0.05;
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
                        <p className="text-md font-bold ">$168</p>
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
                <hr className="my-2 h-px bg-black" />
              </>
            )}
            {flightOnly && (
              <>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <Text className="text-lg font-semibold m-5 block">
                    Flight
                  </Text>
                  <div className="flex justify-between items-center">
                    <Image
                      src={transport.img}
                      width="200px"
                      height="150px"
                      className="p-3 object-cover rounded-lg shadow-md"
                    />
                    <div className="w-full m-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-5">
                          <div>
                            <Text className="text-lg font-bold block">
                              {transport.departurePlace}
                            </Text>
                            <Text className="text-md text-gray-500">
                              {transport.departureTime}
                            </Text>
                          </div>
                          <FaLongArrowAltRight className="text-2xl text-gray-500" />
                          <div>
                            <Text className="text-lg font-bold block">
                              {transport.arrivalPlace}
                            </Text>
                            <Text className="text-md text-gray-500">
                              {transport.arrivalTime}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text className="text-lg mt-3 block">
                        {transport.name}
                      </Text>
                      <div>
                        {economy.ticket > 0 && (
                          <Text className="block">
                            Economy Ticket x{economy.ticket}
                          </Text>
                        )}
                        {business.ticket > 0 && (
                          <Text className="block">
                            Business Ticket x{business.ticket}
                          </Text>
                        )}
                        {firstclass.ticket > 0 && (
                          <Text className="block">
                            First Class Ticket x{firstclass.ticket}
                          </Text>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Divider className="my-4 bg-gray-200" />
                <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                  <div name="subtotal" className="p-2">
                    <div className="flex justify-between text-md font-semibold m-2">
                      <Text>Cost</Text>
                      <Text>{totalAmount}</Text>
                    </div>
                    <div className="flex justify-between text-md font-semibold m-2">
                      <Text>Service Fee</Text>
                      <Text>{serviceFee}</Text>
                    </div>
                  </div>
                  <Divider className="my-2 bg-gray-200" />
                  <div className="flex justify-between text-md font-semibold m-2 p-2">
                    <Text>Total</Text>
                    <Text>{totalAmount + serviceFee}</Text>
                  </div>
                </div>
              </>
            )}
            <div name="subtotal" className="p-2">
              <div className="flex justify-between text-md font-semibold m-2">
                <p>Subtotal</p>
                <p>$214</p>
              </div>
              <div className="flex justify-between text-md font-semibold m-2">
                <p>Member Discount &#40;20%&#41; </p>
                <p>-$36</p>
              </div>
              <div className="flex justify-between text-md font-semibold m-2">
                <p>Delivery Fees</p>
                <p>$5</p>
              </div>
            </div>
            <hr className="my-2 h-px bg-black" />
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
