import React from "react";
import { useSelector } from "react-redux";
import { selectState } from "../features/select/SelectSlice";
import { Navigate } from "react-router-dom";
import { transportState } from "../features/transport/TransportSlice";

const ConfirmProvider = ({ children }) => {
  const { selectedPlan } = useSelector(selectState);
  const { transport } = useSelector(transportState);

  return selectedPlan || transport ? <>{children}</> : <Navigate to="/" />;
};

export default ConfirmProvider;
