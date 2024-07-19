import React from "react";
import { IoMdArrowDropdown, IoMdPerson } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openModal } from "../../../features/ui/UiSlice";
import { Avatar, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { logoutUser, userState } from "../../../features/user/UserSlice";
import { BiUser } from "react-icons/bi";
import {
  resetSelect,
  selectBus,
  selectFlight,
  selectHotel,
  selectHotelPlusBus,
  selectHotelPlusFlight,
} from "../../../features/select/SelectSlice";
import { reset } from "../../../features/transport/TransportSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(userState);

  const items = [
    {
      label: (
        <span
          className="cursor-pointer"
          onClick={() => {
            dispatch(reset());
            dispatch(resetSelect());
            dispatch(selectHotelPlusFlight());
            navigate("/hotels?flightpackage");
          }}
        >
          Flight And Hotel
        </span>
      ),
      key: "1",
    },
    {
      label: (
        <span
          className="cursor-pointer"
          onClick={() => {
            dispatch(reset());
            dispatch(resetSelect());
            dispatch(selectHotelPlusBus());
            navigate("/hotels?buspackage");
          }}
        >
          Bus and Hotel
        </span>
      ),
      key: "2",
    },
  ];

  const userItems = [
    user?.role === "ADMIN" && {
      label: <Link to="/admin">Admin Dashboard</Link>,
      key: "1",
    },
    {
      label: <Link to="/user-profile">My Profile</Link>,
      key: "2",
    },
    {
      label: <span onClick={() => dispatch(logoutUser())}>Logout</span>,
      key: "3",
    },
  ];

  return (
    <div>
      <div className="w-[70%] mx-auto flex justify-between py-10 z-20">
        <div className="text-3xl font-bold ">
          Travel<span className="text-blue-600">Trax</span>
        </div>
        <nav>
          <ul className="flex space-x-5 items-center text-lg ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={() => {
                  dispatch(reset());
                  dispatch(resetSelect());
                  dispatch(selectHotel());
                  navigate("/destination");
                }}
              >
                Destination
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={() => {
                  dispatch(reset());
                  dispatch(resetSelect());
                  dispatch(selectHotel());
                  navigate("/hotels");
                }}
              >
                Hotels
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={() => {
                  dispatch(reset());
                  dispatch(resetSelect());
                  dispatch(selectFlight());
                  navigate("/flights");
                }}
              >
                Flights
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer"
                onClick={() => {
                  dispatch(reset());
                  dispatch(resetSelect());
                  dispatch(selectBus());
                  navigate("/buses");
                }}
              >
                Bus
              </span>
            </li>

            <li>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a className="cursor-pointer">
                  <Space>
                    Packages
                    <IoMdArrowDropdown classID="text-sm" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {user ? (
              <li>
                <Dropdown menu={{ items: userItems }}>
                  <Avatar
                    size={"large"}
                    className="cursor-pointer"
                    icon={
                      user?.image?.length != 0 ? (
                        <img src={user?.image[0]?.imgUrl} />
                      ) : (
                        <BiUser />
                      )
                    }
                  />
                </Dropdown>
              </li>
            ) : (
              <li className="cursor-pointer">
                <IoMdPerson onClick={() => dispatch(openModal())} />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
