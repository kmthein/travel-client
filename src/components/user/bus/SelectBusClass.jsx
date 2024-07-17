import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import SelectStep from "../common/SelectStep";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../../features/transport/TransportSlice";
import { getAllBusClassBybus } from "../../../api/busclass";
import SelectBusClassCard from "./SelectBusClassCard";
import { selectState } from "../../../features/select/SelectSlice";

const SelectBusClass = () => {
  const location = useLocation();
  const { busClassDTOList, busServiceName, busImg } = location.state || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate(-1);
    dispatch(reset());
  };
  console.log(busClassDTOList);
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
