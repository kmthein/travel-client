import React from "react";
import FlightTicketSearch from "../../components/user/common/FlightTicketSearch";
import Suggestairline from "../../components/user/destinationdetail/Suggestairline";

const Flightpage = () => {
  return (
    <div className="w-[70%] mx-auto">
      <FlightTicketSearch />
      <Suggestairline />
    </div>
  );
};

export default Flightpage;
