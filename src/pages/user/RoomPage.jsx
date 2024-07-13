import { FaHotel, FaPlane } from "react-icons/fa6";
import { Steps, Button, Image } from "antd";
import { FaBed, FaCheckCircle } from "react-icons/fa";

import roomImg from "../../assets/room.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveRoom, selectState } from "../../features/select/SelectSlice";

const RoomPage = () => {
  const navigate = useNavigate();

  const { selectedHotel } = useSelector(selectState);

  const { roomList } = selectedHotel;

  const dispatch = useDispatch();

  return (
    <div className="w-[70%] mx-auto px-4">
      <div className="w-4/5 my-10 mx-auto">
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
              title: "Confirmation",
              status: "wait",
              icon: <FaCheckCircle />,
            },
          ]}
        />
      </div>
      <div className="flex items-center ml-20 text-2xl">
        <FaBed />
        <p className="font-bold ml-5">Select Room Type</p>
      </div>
      <div className="w-11/12 my-10 mx-auto">
        {roomList &&
          roomList.length > 0 &&
          roomList.map((room, index) => (
            <div
              key={index}
              className="my-4 p-4 border border-gray-300 rounded-2xl flex"
            >
              <div className="w-1/3 p-2">
                <Image src={roomImg} width={300} height={300} />
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
                <div className="flex justify-end mt-4">
                  <Button
                    className="bg-blue-500 text-white p-2"
                    onClick={() => {
                      dispatch(saveRoom(room));
                      navigate("/confirmation");
                    }}
                  >
                    Book Room
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RoomPage;
