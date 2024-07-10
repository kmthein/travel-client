import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/user/common/Footer";
import Navbar from "../components/user/common/Navbar";
import FormModal from "../components/user/common/FormModal";
import NewsTicker from "../components/user/common/NewsTicket";
import ScrollTop from "../components/user/common/ScrollTop";

const Userlayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollTop />
      <NewsTicker />
      {pathname !== "/" && <Navbar />}
      <FormModal />
      <Outlet />
      <Footer />
    </>
  );
};

export default Userlayout;
