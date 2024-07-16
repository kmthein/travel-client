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

  console.log(pathname);

  const items = [];

  if (hotelOnly || hotelPlusBus || hotelPlusFlight) {
    items.push({
      title: "Select Hotel",
      status: "finish",
      icon: <FaHotel />,
    });
    items.push({
      title: "Select Room",
      status: pathname == "/rooms" ? "process" : "finish",
      icon: <FaBed />,
    });
  }
  if (flightOnly || hotelPlusFlight) {
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
