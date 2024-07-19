import React from "react";
import Userlayout from "../layouts/Userlayout";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userState } from "../features/user/UserSlice";

const UserProvider = ({ children }) => {
  const { user, token } = useSelector(userState);

  let content;
  if (user && token) {
    content = children;
  } else {
    content = <Navigate to="/" />;
  }
  return <>{content}</>;
};

export default UserProvider;
