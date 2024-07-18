import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import SelectStep from "../common/SelectStep";
import SelectFlightClassCard from "./SelectFlightClassCard";
import { useDispatch } from "react-redux";
import { reset } from "../../../features/transport/TransportSlice";

const SelectFlightClass = () => {
  const location = useLocation();
  const { flightClassDTOList, airlineName, airlineImg } = location.state || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = () => {
    navigate(-1);
    dispatch(reset());
  };
  return (
    <div className="w-[70%] mx-auto">
      <div className="my-10">
        <SelectStep />
      </div>
      <div className="flex justify-end my-5">
        <IoReturnUpBack
          onClick={handleBack}
          className="text-3xl cursor-pointer"
        />
      </div>
      <SelectFlightClassCard
        flightClassDTOList={flightClassDTOList}
        airlineName={airlineName}
        airlineImg={airlineImg}
      />
    </div>
  );
};

export default SelectFlightClass;
