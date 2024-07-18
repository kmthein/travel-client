import React, { useEffect, useState } from "react";
import {
  getAllAvailableFlight,
  getUserFlightSchedule,
} from "../../api/flightschedule";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFlight } from "../../features/select/SelectSlice";
import ScheduleItem from "../../components/user/common/ScheduleItem";
import TransportTicketSearch from "../../components/user/common/TransportTicketSearch";
import { addTransport } from "../../features/transport/TransportSlice";
import { dateformat } from "../../utils/dateformat";
import FilterFlightClass from "../../components/user/flight/FilterFlightClass";
import SelectStep from "../../components/user/common/SelectStep";

const Flightpage = () => {
  const [allFlight, setAllFlight] = useState([]);
  const [filerFlight, setFliterFlight] = useState(null);
  useEffect(() => {
    flightSchedule();
  }, []);
  const flightSchedule = async () => {
    try {
      const res = await getAllAvailableFlight();
      console.log(res);
      let data = res.data;
      let modifiedData = data.map((item) => {
        return {
          ...item,
          img: item.img[0].imgUrl,
        };
      });
      setAllFlight(modifiedData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const choiceFlight = async (departurePlace, destination, departureDate) => {
    const form = new FormData();
    form.append("departurePlaceId", departurePlace);
    form.append("arrivalPlaceId", destination);
    form.append("departureDate", dateformat(departureDate));
    let res = await getUserFlightSchedule(form);
    setFliterFlight(res.data);
  };
  return (
    <div className="w-[70%] mx-auto">
      <div className="my-10">
        <SelectStep />
      </div>
      <TransportTicketSearch isFlight={true} choice={choiceFlight} />
      {filerFlight === null ? (
        <ScheduleItem data={allFlight} />
      ) : filerFlight.length > 0 ? (
        <FilterFlightClass filerFlight={filerFlight} />
      ) : (
        <p className="text-center my-5">No Flight Found</p>
      )}
    </div>
  );
};

export default Flightpage;
