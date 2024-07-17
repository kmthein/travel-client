import React, { useEffect, useState } from "react";
import FlightTicketSearch from "../../components/user/common/FlightTicketSearch";
import Suggestairline from "../../components/user/destinationdetail/Suggestairline";
import { getAllAvailableFlight } from "../../api/flightschedule";
import Allflight from "../../components/user/flight/Allflight";

const Flightpage = () => {
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
  return (
    <div className="w-[70%] mx-auto">
      <FlightTicketSearch />
      <Allflight allFlight={allFlight} />
    </div>
  );
};

export default Flightpage;
