import { Steps } from "antd";
import React from "react";
import { FaBed, FaCheckCircle, FaHotel, FaPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectState } from "../../../features/select/SelectSlice";
import { useLocation } from "react-router-dom";

const SelectStep = () => {
  const { hotelOnly, flightOnly, hotelPlusFlight, busOnly, hotelPlusBus } =
    useSelector(selectState);

  const location = useLocation();
  const { pathname } = location;

  const items = [];

  if (hotelOnly || hotelPlusBus || hotelPlusFlight) {
    items.push({
      title: "Select Hotel",
      status: pathname == "/hotels" ? "process" : "finish",
      icon: <FaHotel />,
    });
    items.push({
      title: "Select Room",
      status:
        pathname == "/rooms"
          ? "process"
          : pathname == "/confirmation"
          ? "finish"
          : "wait",
      icon: <FaBed />,
    });
    if (!hotelOnly) {
      items.push({
        title: "Select Flight",
        status:
          pathname == "/flights"
            ? "process"
            : pathname == "/confirmation"
            ? "finish"
            : "wait",
        icon: <FaPlane />,
      });
    }
  }
  if (flightOnly) {
    items.push({
      title: "Select Flight",
      status: "finish",
      icon: <FaPlane />,
    });
  }
  items.push({
    title: "Confirmation",
    status: pathname == "/confirmation" ? "process" : "wait",
    icon: <FaCheckCircle />,
  });
  return (
    <>
      <Steps size="small" items={items} />
    </>
  );
};

export default SelectStep;
