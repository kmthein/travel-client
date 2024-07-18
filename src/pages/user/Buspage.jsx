import React, { useEffect, useState } from "react";
import { getAllAvailableBus, getUserBusSchedule } from "../../api/busschedule";
import ScheduleItem from "../../components/user/common/ScheduleItem";
import TransportTicketSearch from "../../components/user/common/TransportTicketSearch";
import { dateformat } from "../../utils/dateformat";
import FilterBusClass from "../../components/user/bus/FilterBusClass";

const Buspage = () => {
  const [allbus, setAllBus] = useState([]);
  const [filterBus, setFilterBus] = useState(null);

  useEffect(() => {
    busSchedule();
  }, []);

  const busSchedule = async () => {
    try {
      const res = await getAllAvailableBus();
      let data = res.data;
      let modifiedData = data.map((item) => {
        return {
          ...item,
          img: item.img[0].imgUrl,
        };
      });
      setAllBus(modifiedData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const choice = async (departurePlace, destination, departureDate) => {
    const form = new FormData();
    form.append("departurePlaceId", departurePlace);
    form.append("arrivalPlaceId", destination);
    form.append("departureDate", dateformat(departureDate));
    let res = await getUserBusSchedule(form);
    setFilterBus(res.data);
  };

  return (
    <div className="w-[70%] mx-auto">
      <TransportTicketSearch isFlight={false} choice={choice} />
      {filterBus === null ? (
        <ScheduleItem data={allbus} isFlight={false} />
      ) : filterBus.length > 0 ? (
        <>
          <FilterBusClass filterBus={filterBus} />
        </>
      ) : (
        <p className="text-center my-5">No Buses Found</p>
      )}
    </div>
  );
};

export default Buspage;
