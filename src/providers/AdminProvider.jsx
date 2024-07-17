import React from "react";
import { useSelector } from "react-redux";
import { userState } from "../features/user/UserSlice";
import AdminLayout from "../layouts/AdminLayout";
import { Navigate } from "react-router-dom";

const AdminProvider = () => {
  const { user, token } = useSelector(userState);
  let content;
  if (user?.role === "ADMIN" && token) {
    content = <AdminLayout />;
  } else {
    content = <Navigate to="/" />;
  }
  return <>{content}</>;
};

export default AdminProvider;
