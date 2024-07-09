import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/user/common/Footer";
import Navbar from "../components/user/common/Navbar";
import FormModal from "../components/user/common/FormModal";

const Userlayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <Navbar />}
      <FormModal />
      <Outlet />
      <Footer />
    </>
  );
};

export default Userlayout;
