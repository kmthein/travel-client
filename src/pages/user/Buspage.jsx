import React, { useEffect, useState } from "react";
import { selectBus } from "../../features/select/SelectSlice";
import { getAllAvailableBus } from "../../api/busschedule";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ScheduleItem from "../../components/user/common/ScheduleItem";
import TransportTicketSearch from "../../components/user/common/TransportTicketSearch";
import { addTransport } from "../../features/transport/TransportSlice";

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
          img: item.img[0].imgUrl,
        };
      });
      setAllBus(modifiedData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const goto = (id, data) => {
    dispatch(selectBus());
    handleSelected(data);
    navigate(`/buses/${id}/class`);
  };

  const handleSelected = (data) => {
    dispatch(addTransport(data));
  };
  return (
    <div className="w-[70%] mx-auto">
      <TransportTicketSearch isFlight={false} />
      <ScheduleItem data={allbus} goto={goto} isFlight={false} />
    </div>
  );
};

export default Buspage;
