import React from "react";
import { BiBus } from "react-icons/bi";
import { FaCity, FaHotel } from "react-icons/fa6";
import { ImHome3 } from "react-icons/im";
import { MdAirlines } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-[#22387d] w-[20%] text-white min-h-screen">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#243055] flex items-center px-20 gap-4 py-6 mx-auto font-semibold hover:bg-[#243055]"
            : `flex items-center px-20 gap-4 py-6 mx-auto text-gray-400 hover:text-white hover:bg-[#2c4180]`
        }
        to="/admin"
        end
      >
        <ImHome3 className="text-xl" />
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#243055] flex items-center px-20 gap-4 py-6 mx-auto font-semibold hover:bg-[#243055]"
            : `flex items-center px-20 gap-4 py-6 mx-auto text-gray-400 hover:text-white hover:bg-[#2c4180]`
        }
        to="destination"
        end
      >
        <FaCity className="text-xl" />
        <span>Destination</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#243055] flex items-center px-20 gap-4 py-6 mx-auto font-semibold hover:bg-[#243055]"
            : `flex items-center px-20 gap-4 py-6 mx-auto text-gray-400 hover:text-white hover:bg-[#2c4180]`
        }
        to="hotel"
        end
      >
        <FaHotel className="text-xl" />
        <span>Hotel</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#243055] flex items-center px-20 gap-4 py-6 mx-auto font-semibold hover:bg-[#243055]"
            : `flex items-center px-20 gap-4 py-6 mx-auto text-gray-400 hover:text-white hover:bg-[#2c4180]`
        }
        to="airline"
        end
      >
        <MdAirlines className="text-xl" />
        <span>Airline</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#243055] flex items-center px-20 gap-4 py-6 mx-auto font-semibold hover:bg-[#243055]"
            : `flex items-center px-20 gap-4 py-6 mx-auto text-gray-400 hover:text-white hover:bg-[#2c4180]`
        }
        to="bus"
        end
      >
        <BiBus className="text-xl" />
        <span>Bus Service</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
