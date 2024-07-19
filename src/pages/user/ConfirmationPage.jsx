import { Radio, Image, Button, Divider, Typography, Result, Modal } from "antd";
import { FaBed, FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";
const { Text } = Typography;

import visaImg from "../../assets/img/icons/visa.jpg";
import paypalImg from "../../assets/img/icons/paypal.jpg";
import kbzImg from "../../assets/img/icons/kbzpay.jpg";
import ayapayImg from "../../assets/img/icons/ayapay.jpg";
import wavepayImg from "../../assets/img/icons/wavepay.jpg";
import { useNavigate } from "react-router-dom";
import SelectStep from "../../components/user/common/SelectStep";
import { useDispatch, useSelector } from "react-redux";
import { resetSelect, selectState } from "../../features/select/SelectSlice";
import { IoReturnUpBack } from "react-icons/io5";
import { reset, transportState } from "../../features/transport/TransportSlice";
import { saveAccommodation } from "../../api/accommodation";
import { userState } from "../../features/user/UserSlice";
import { saveTravelPlan } from "../../api/travelplan";
import { toast } from "react-toastify";

const ConfirmationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [initialTotal, setInitialTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalTransportCost, setTotalTransportCost] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();
  const { selectedPlan, flightOnly, busOnly, hotelPlusFlight } =
    useSelector(selectState);
  const { user } = useSelector(userState);

  const [plan, setPlan] = useState({
    hotel: null,
    room: null,
    totalNight: null,
  });

  const { hotel, room, totalNight, totalPerson, checkInDate, checkOutDate } =
    plan;
  const { economy, business, firstclass, transport } =
    useSelector(transportState);

  useEffect(() => {
    let totalHotelCost = 0;
    if (selectedPlan != null) {
      totalHotelCost = selectedPlan.totalNight * selectedPlan.room.roomPrice;
      setPlan({
        ...plan,
        hotel: selectedPlan.hotel,
        room: selectedPlan.room,
        totalNight: selectedPlan.totalNight,
        totalPerson: selectedPlan.totalPerson,
        checkInDate: selectedPlan.checkInDate,
        checkOutDate: selectedPlan.checkOutDate,
      });
    }
    let initialTransportCost = 0;
    if (transport != {}) {
      initialTransportCost =
        (economy?.amount || 0) +
        (business?.amount || 0) +
        (firstclass?.amount || 0);
    }
    const newInitialTotal = totalHotelCost + initialTransportCost;
    setTotalTransportCost(+initialTransportCost);
    setInitialTotal(newInitialTotal);
  }, [selectedPlan, economy, business, firstclass, transport]);

  console.log(transport);
  useEffect(() => {
    const serviceFee = initialTotal * 0.05;
    setServiceFee(serviceFee);
    setTotalAmount(initialTotal + serviceFee);
  }, [initialTotal]);

  const dispatch = useDispatch();

  const confirmPlanSubmit = async () => {
    console.log(room);
    const hotelformData = new FormData();
    const formData = new FormData();
    hotelformData.append("totalPrice", totalAmount);
    let accommodationId;
    if (hotel) {
      hotelformData.append("checkIn", checkInDate);
      hotelformData.append("checkOut", checkOutDate);
      hotelformData.append("totalPerson", totalPerson);
      hotelformData.append("roomId", room?.id);
      const saveHotelRes = await saveAccommodation(hotelformData);
      formData.append("accommodationId", saveHotelRes.data.id);
      formData.append("startDate", checkInDate);
    }
    formData.append("totalPrice", +totalAmount);
    formData.append("userId", user?.id);
    if (transport.flightScheduleId) {
      formData.append("flightClassId", +transport.classId);
      formData.append("flightScheduleId", +transport.flightScheduleId);
      formData.append("startDate", transport.departureDate);
    } else if (transport.busScheduleId) {
      formData.append("busClassId", +transport.classId);
      formData.append("busScheduleId", +transport.busScheduleId);
      formData.append("startDate", transport.departureDate);
    }
    const res = await saveTravelPlan(formData);
    if (res.status == 200) {
      setIsModalOpen(true);
      dispatch(reset());
      dispatch(resetSelect());
    }
    // navigate("/travelreceipt");
  };

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
                    <img
                      width="150px"
                      height="120px"
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
                        <p className="ml-2">1 x {room?.roomType}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Divider className="my-4 bg-gray-200" />
              </>
            )}
            {(hotelPlusFlight || flightOnly || busOnly) && (
              <>
                <div>
                  <p className="text-md m-5">Flight</p>
                  <div className="flex justify-between items-center p-3">
                    <img
                      src={transport.img}
                      width="100px"
                      height="100px"
                      className="p-3 object-contain rounded-lg shadow-md"
                    />
                    <div className="w-full m-3 ml-6">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-between w-full">
                          <div className="flex items-center space-x-5">
                            <div>
                              <p className="text-md font-bold block">
                                {transport.departurePlace}
                              </p>
                              <Text className="text-md text-gray-500">
                                {transport.departureTime}
                              </Text>
                            </div>
                            <FaLongArrowAltRight className="text-2xl text-gray-500" />
                            <div>
                              <p className="text-md font-bold block">
                                {transport.arrivalPlace}
                              </p>
                              <Text className="text-md text-gray-500">
                                {transport.arrivalTime}
                              </Text>
                            </div>
                          </div>
                          <p className="text-md font-bold block">
                            {totalTransportCost} ks
                          </p>
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
              </>
            )}
            <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
              <div name="subtotal" className="p-2">
                <div className="flex justify-between text-md font-semibold m-2">
                  <Text>Cost</Text>
                  <Text>{initialTotal} ks</Text>
                </div>
                <div className="flex justify-between text-md font-semibold m-2">
                  <Text>Service Fee (5%)</Text>
                  <Text>+ {serviceFee} ks</Text>
                </div>
              </div>
              <Divider className="my-2 bg-gray-200" />
              <div className="flex justify-between text-md font-semibold m-2 p-2">
                <Text>Total</Text>
                <Text>{totalAmount} ks</Text>
              </div>
            </div>
            <div className="flex justify-end ">
              <Button
                className=" m-4 w-32 text-white bg-red-500"
                onClick={() => {
                  dispatch(resetSelect());
                  dispatch(reset());
                  navigate("/");
                }}
              >
                Cancel
              </Button>
              <Button
                className=" m-4 w-32 bg-blue-500  text-white"
                onClick={confirmPlanSubmit}
              >
                Confirm
              </Button>
              <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
              >
                <Result
                  status="success"
                  title="Successfully Purchased "
                  subTitle="Order Confirmed"
                  extra={[
                    <Button type="primary" onClick={() => navigate("/")}>
                      Go To Home
                    </Button>,
                  ]}
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
