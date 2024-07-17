import { Steps } from "antd";
import React from "react";
import { FaBed, FaCheckCircle, FaHotel, FaPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectState } from "../../../features/select/SelectSlice";
import { useLocation, useParams } from "react-router-dom";
import { MdOutlineFlightClass } from "react-icons/md";

const SelectStep = () => {
  const { hotelOnly, flightOnly, hotelPlusFlight, busOnly, hotelPlusBus } =
    useSelector(selectState);
  const { id } = useParams();
  const location = useLocation();
  const { pathname, search } = location;

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
          : pathname == `/flights/${id}/class`
          ? "finish"
          : pathname == "/flights"
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
            : pathname == "/confirmation" || pathname == `/flights/${id}/class`
            ? "finish"
            : "wait",
        icon: <FaPlane />,
      });
    }
  }
  if (flightOnly || hotelPlusFlight) {
    items.push({
      title: "Select Class",
      status:
        pathname === `/flights/${id}/class`
          ? "process"
          : pathname === "/rooms"
          ? "wait"
          : pathname === "/hotels" || pathname === "/flights"
          ? "wait"
          : "finish",
      icon: <MdOutlineFlightClass />,
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
