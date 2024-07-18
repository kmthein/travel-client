import { Button, Card } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFlight } from "../../../features/select/SelectSlice";
import { useNavigate } from "react-router-dom";
import {
  addBusiness,
  addEconomy,
  addFirstClass,
  reduceBusiness,
  reduceEconomy,
  reduceFirstClass,
  transportState,
} from "../../../features/transport/TransportSlice";

const SelectFlightClassCard = ({
  flightClassDTOList,
  airlineName,
  airlineImg,
}) => {
  const { economy, business, firstclass } = useSelector(transportState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goto = () => {
    dispatch(selectFlight);
    navigate("/confirmation");
  };
  const handleTicket = (type, action, validseat, amount) => {
    if (action === "add") {
      if (type.toLowerCase() === "economy") {
        dispatch(addEconomy({ amount, validseat }));
      } else if (type.toLowerCase() === "business") {
        dispatch(addBusiness({ amount, validseat }));
      } else if (type.toLowerCase() === "firstclass") {
        dispatch(addFirstClass({ amount, validseat }));
      }
    } else {
      if (type.toLowerCase() === "economy") {
        dispatch(reduceEconomy({ amount }));
      } else if (type.toLowerCase() === "business") {
        dispatch(reduceBusiness({ amount, validseat }));
      } else if (type.toLowerCase() === "firstclass") {
        dispatch(reduceFirstClass({ amount, validseat }));
      }
    }
  };

  return (
    <div className="my-10">
      {flightClassDTOList.map((item) => (
        <Card key={item.airlineId} className="shadow-lg rounded-lg mb-6">
          <div className="flex justify-between items-center p-4">
            <img
              src={airlineImg}
              alt=""
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="flex flex-col items-center text-center mx-2">
              <h2 className="text-lg font-semibold">Airline Name</h2>
              <p className="text-gray-600">{airlineName}</p>
            </div>
            <div className="flex flex-col items-center text-center mx-2">
              <h2 className="text-lg font-semibold">Class</h2>
              <p className="text-gray-600">{item.flightClassName}</p>
            </div>
            <div className="flex flex-col items-center text-center mx-2">
              <h2 className="text-lg font-semibold">Valid Seat</h2>
              <p className="text-gray-600">{item.availableSeat}</p>
            </div>
            <div className="flex flex-col items-center text-center mx-2">
              <h2 className="text-lg font-semibold">Price</h2>
              <p className="text-gray-600">{item.price}</p>
            </div>
            <div className="flex items-center mx-2">
              <Button
                className="mx-1 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={() =>
                  handleTicket(
                    item.flightClassName,
                    "reduce",
                    item.availableSeat,
                    item.price
                  )
                }
              >
                -
              </Button>
              <Button className="mx-1 bg-white rounded-full">
                {item.flightClassName.toLowerCase() === "economy" &&
                  economy.ticket}
                {item.flightClassName.toLowerCase() === "business" &&
                  business.ticket}
                {item.flightClassName.toLowerCase() === "firstclass" &&
                  firstclass.ticket}
              </Button>
              <Button
                className="mx-1 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={() =>
                  handleTicket(
                    item.flightClassName,
                    "add",
                    item.availableSeat,
                    item.price
                  )
                }
              >
                +
              </Button>
            </div>
          </div>
        </Card>
      ))}
      {(economy.ticket > 0 || business.ticket > 0 || firstclass.ticket > 0) && (
        <div className="flex justify-end mt-4">
          <Button
            onClick={goto}
            className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 p-5"
          >
            Order
          </Button>
        </div>
      )}
    </div>
  );
};

export default SelectFlightClassCard;
