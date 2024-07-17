import { useNavigate, useParams } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import SelectStep from "../common/SelectStep";
import { useEffect, useState } from "react";
import { getAllFlightClassByAirline } from "../../../api/airlineclass";
import SelectFlightClassCard from "./SelectFlightClassCard";
import { useDispatch } from "react-redux";
import { reset } from "../../../features/flight/FlightTicketSlice";

const SelectFlightClass = () => {
  const [airlineClass, setAirlineClass] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getFlightClass(id);
  }, []);
  const getFlightClass = async (id) => {
    let res = await getAllFlightClassByAirline(id);

    let modifiedData = res.data.map((item) => {
      return {
        id: item.id,
        class: item.name,
        validSeat: item.validSeat,
        name: item.airline.name,
        img: item.airline.image[0].imgUrl,
        price: item.price,
      };
    });
    setAirlineClass(modifiedData);
  };
  const handleBack = () => {
    navigate(-1);
    dispatch(reset());
  };
  return (
    <div className="w-[70%] mx-auto">
      <SelectStep />
      <div className="flex justify-end my-5">
        <IoReturnUpBack
          onClick={handleBack}
          className="text-3xl cursor-pointer"
        />
      </div>
      <SelectFlightClassCard airlineClass={airlineClass} />
    </div>
  );
};

export default SelectFlightClass;
