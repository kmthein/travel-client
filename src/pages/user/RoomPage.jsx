import { FaHotel, FaPlane } from "react-icons/fa6";
import { Steps, Button, Image, Form, DatePicker } from "antd";
import { FaBed, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import noImg from "../../assets/img/common/no_img.jpg";
import roomImg from "../../assets/room.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPlan, selectState } from "../../features/select/SelectSlice";
import SelectStep from "../../components/user/common/SelectStep";
import { IoReturnUpBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { calculateDaysBetween, formattedDate } from "../../utils/utils";
import moment from "moment";
import CheckInDatePicker from "../../components/user/common/CheckInDatePicker";
import CheckOutDatePicker from "../../components/user/common/CheckOutDatePicker";

const RoomPage = () => {
  const navigate = useNavigate();

  const checkInDateChange = (value) => {
    setCheckInDate(formattedDate(value));
    if (checkOutDate) {
      setDisabled(false);
    }
  };

  const checkOutDateChange = (value) => {
    setCheckOutDate(formattedDate(value));
    if (checkInDate) {
      setDisabled(false);
    }
  };

  const [form] = Form.useForm();
  const { selectedPlan, hotelPlusFlight } = useSelector(selectState);

  const { availableRoomList } = selectedPlan.hotel;

  const [roomList, setRoomList] = useState([]);
  console.log(roomList);
  useEffect(() => {
    const roomAry = [];
    const idSet = new Set();

    availableRoomList.forEach((room) => {
      if (!idSet.has(room.id)) {
        idSet.add(room.id);
        roomAry.push(room);
      }
    });
    setRoomList(roomAry);
  }, [availableRoomList]);

  const dispatch = useDispatch();

  const location = useLocation();
  const { search } = location;

  return (
    <div className="w-[70%] mx-auto px-4">
      <div className="my-10 mx-auto">
        <SelectStep />
      </div>
      <div className="flex items-center text-xl">
        <FaBed />
        <div className="flex justify-between w-full">
          <p className="font-bold ml-5">Select Room Type</p>
          <IoReturnUpBack
            onClick={() => navigate(-1)}
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>
      <div className="my-10 mx-auto">
        {roomList &&
          roomList.length > 0 &&
          roomList.map((room, index) => (
            <div
              key={index}
              className="my-4 p-4 border border-gray-300 rounded-2xl flex gap-4"
            >
              <div className="w-1/3 p-2">
                <Image
                  src={
                    room?.imgUrlList.length > 0 ? room?.imgUrlList[0] : noImg
                  }
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-2/3 p-2">
                <div className="flex justify-between">
                  <p className="text-lg font-bold">{room.roomType}</p>
                  <p className="text-lg font-bold">{room.roomPrice} kyats</p>
                </div>
                <p className="my-2 font-semibold">Features</p>
                <ul className="list-disc pl-5">
                  <li>1 king bed</li>
                  <li>Room size: 28 m² / 301 ft²</li>
                  <li>City View</li>
                  <li>Balcony / Terrace</li>
                  <li>Non-smoking</li>
                  <li>Shower</li>
                </ul>
                <div className="flex items-center justify-end mt-2">
                  {/* <Form layout="vertical" className="flex gap-3" form={form}>
                    <Form.Item
                      name="checkin"
                      label="Check In"
                      rules={[
                        { required: true, message: "Select check in date!" },
                      ]}
                    >
                      <CheckInDatePicker
                        checkInDateChange={checkInDateChange}
                      />
                    </Form.Item>
                    <Form.Item
                      name="checkout"
                      label="Check Out"
                      rules={[
                        { required: true, message: "Select check out date!" },
                      ]}
                    >
                      <CheckOutDatePicker
                        checkOutDateChange={checkOutDateChange}
                        checkInDate={checkInDate}
                      />
                    </Form.Item>
                  </Form> */}
                  <div className="">
                    <Button
                      className="bg-blue-500 text-white p-2"
                      onClick={() => {
                        dispatch(
                          addPlan({
                            room,
                          })
                        );
                        if (search == "?flightpackage") {
                          navigate("/flights?package");
                        } else if (search == "?buspackage") {
                          navigate("/buses?package");
                        } else {
                          navigate("/confirmation");
                        }
                      }}
                    >
                      Book Room
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RoomPage;
