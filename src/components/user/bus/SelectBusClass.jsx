import { useNavigate, useParams } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import SelectStep from "../common/SelectStep";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../../features/transport/TransportSlice";
import { getAllBusClassBybus } from "../../../api/busclass";
import SelectBusClassCard from "./SelectBusClassCard";

const SelectBusClass = () => {
  const [busClass, setBusClass] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getBusClass(id);
  }, []);
  const getBusClass = async (id) => {
    let res = await getAllBusClassBybus(id);
    let modifiedData = res.data.map((item) => {
      return {
        id: item.id,
        class: item.name,
        validSeat: item.validSeat,
        name: item.busService.name,
        img: item.busService.image[0].imgUrl,
        price: item.price,
      };
    });
    setBusClass(modifiedData);
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
      <SelectBusClassCard busClass={busClass} />
    </div>
  );
};

export default SelectBusClass;
