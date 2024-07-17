import React, { useEffect, useState } from "react";
import BusTicketSearch from "../../components/user/common/BusTicketSearch";
import { selectBus } from "../../features/select/SelectSlice";
import { getAllAvailableBus } from "../../api/busschedule";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ScheduleItem from "../../components/user/common/ScheduleItem";

const Buspage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [allbus, setAllBus] = useState([]);
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
          ariLineImg: item.ariLineImg[0].imgUrl,
        };
      });
      setAllBus(modifiedData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const goto = (id) => {
    dispatch(selectBus());
    navigate(`/bus/${id}/class`);
  };
  return (
    <div className="w-[70%] mx-auto">
      <BusTicketSearch />
      <ScheduleItem data={allbus} goto={goto} />
    </div>
  );
};

export default Buspage;
