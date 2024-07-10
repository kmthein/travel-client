import React from "react";
import BusTicketSearch from "../../components/user/common/BusTicketSearch";
import SuggestBus from "../../components/user/destinationdetail/SuggestBus";

const Buspage = () => {
  return (
    <div className="w-[70%] mx-auto">
      <BusTicketSearch />
      <SuggestBus />
    </div>
  );
};

export default Buspage;
