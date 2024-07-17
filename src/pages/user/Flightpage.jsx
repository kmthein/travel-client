import React, { useEffect, useState } from "react";
import FlightTicketSearch from "../../components/user/common/FlightTicketSearch";
import { getAllAvailableFlight } from "../../api/flightschedule";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFlight } from "../../features/select/SelectSlice";
import ScheduleItem from "../../components/user/common/ScheduleItem";
import { addFlight } from "../../features/flight/FlightTicketSlice";

const Flightpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [allFlight, setAllFlight] = useState([]);
  useEffect(() => {
    flightSchedule();
  }, []);
  const flightSchedule = async () => {
    try {
      const res = await getAllAvailableFlight();
      let data = res.data;
      let modifiedData = data.map((item) => {
        return {
          ...item,
          ariLineImg: item.ariLineImg[0].imgUrl,
        };
      });
      setAllFlight(modifiedData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const goto = (id, data) => {
    handleSelected(data);
    dispatch(selectFlight());
    navigate(`/flights/${id}/class`);
  };
  const handleSelected = (data) => {
    dispatch(addFlight(data));
  };

  // const dateFormat = (s) => {
  //   const date = new Date(s);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   return `${year}-${month}-${day}`;
  // };
  return (
    <div className="w-[70%] mx-auto">
      <FlightTicketSearch />
      <ScheduleItem data={allFlight} goto={goto} />
    </div>
  );
};

export default Flightpage;
