import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/common/Sidebar";
import Header from "../components/admin/common/Header";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="flex bg-[#F2F2F2]">
        <Sidebar />
        <div className=" w-[80%]">
          <div className="px-6 py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
