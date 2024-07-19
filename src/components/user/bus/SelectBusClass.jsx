import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import SelectStep from "../common/SelectStep";
import { useDispatch } from "react-redux";
import { reset } from "../../../features/transport/TransportSlice";
import SelectBusClassCard from "./SelectBusClassCard";

const SelectBusClass = () => {
  const location = useLocation();
  const { busClassDTOList, busServiceName, busImg } = location.state || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <SelectBusClassCard
        busClassDTOList={busClassDTOList}
        busServiceName={busServiceName}
        busImg={busImg}
      />
    </div>
  );
};

export default SelectBusClass;
