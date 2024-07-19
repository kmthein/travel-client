import { Button, Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectBus } from "../../../features/select/SelectSlice";
import { addTransport } from "../../../features/transport/TransportSlice";

const FilterBusClass = ({ filterBus }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelect = (item) => {
    dispatch(selectBus());
    dispatch(
      addTransport({
        name: item.busServiceName,
        img: item.imgUrlList[0],
        ...item.busScheduleDTO,
      })
    );
    navigate(`/buses/${item.busServiceId}/class`, {
      state: {
        busClassDTOList: item.busClassDTOList,
        busServiceName: item.busServiceName,
        busImg: item.imgUrlList[0],
      },
    });
  };

  return (
    <div className="my-10">
      {filterBus.map((item) => (
        <div key={item.busServiceId}>
          <Card className="shadow-lg rounded-lg mb-6 px-5">
            <div className="flex items-center justify-between p-4">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={item.imgUrlList[0]}
                  alt="airline logo"
                  className="w-[100px] h-[100px] object-contain rounded-full"
                />
                <h2 className="text-lg font-semibold mt-2">
                  {item.busServiceName}
                </h2>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Date</p>
                <p className="text-md text-gray-600">
                  {item.busScheduleDTO.departureDate}
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    {item.busScheduleDTO.departureTime}
                  </p>
                  <p className="text-md text-gray-600">
                    {item.busScheduleDTO.departurePlaceName}
                  </p>
                </div>
                <div className="flex items-center ">
                  <div className="h-0.5 w-16 bg-black"></div>
                  <div className="w-1 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-black"></div>
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    {item.busScheduleDTO.arrivalTime}
                  </p>
                  <p className="text-md text-gray-600">
                    {item.busScheduleDTO.arrivalPlaceName}
                  </p>
                </div>
              </div>
              <Button
                className="bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => handleSelect(item)}
              >
                Select
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FilterBusClass;
