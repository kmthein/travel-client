import React, { useEffect, useState } from "react";
import { getAllAvailableFlight } from "../../api/flightschedule";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFlight } from "../../features/select/SelectSlice";
import ScheduleItem from "../../components/user/common/ScheduleItem";
import TransportTicketSearch from "../../components/user/common/TransportTicketSearch";
import { addTransport } from "../../features/transport/TransportSlice";
import { dateformat } from "../../utils/dateformat";

const Flightpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [allFlight, setAllFlight] = useState([]);
  const [filerFlight, setFliterFlight] = useState(null);
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
          img: item.img[0].imgUrl,
        };
      });
      setAllFlight(modifiedData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const choiceFlight = (departurePlace, destination, departureDate) => {
    let data = {
      departurePlaceId: departurePlace,
      arrivalPlaceId: destination,
      departureDate: dateformat(departureDate),
    };
    console.log(data);
  };
  return (
    <div className="w-[70%] mx-auto">
      <TransportTicketSearch isFlight={true} choiceFlight={choiceFlight} />
      <ScheduleItem data={allFlight} />
    </div>
  );
};

export default Flightpage;
