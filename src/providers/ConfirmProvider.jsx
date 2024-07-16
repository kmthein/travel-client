import React from "react";
import { useSelector } from "react-redux";
import { selectState } from "../features/select/SelectSlice";
import { Navigate } from "react-router-dom";

const ConfirmProvider = ({ children }) => {
  const { selectedPlan } = useSelector(selectState);

  return selectedPlan ? <>{children}</> : <Navigate to="/" />;
};

export default ConfirmProvider;
