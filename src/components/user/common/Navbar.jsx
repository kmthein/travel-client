import React from "react";
import { IoMdArrowDropdown, IoMdPerson } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openModal } from "../../../features/ui/UiSlice";
import { Avatar, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { logoutUser, userState } from "../../../features/user/UserSlice";
import { BiUser } from "react-icons/bi";
import { selectHotelPlusFlight } from "../../../features/select/SelectSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(userState);

  const items = [
    {
      label: (
        <span
          onClick={() => {
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
      label: <Link to="/busandhotel">Bus and Hotel</Link>,
      key: "2",
    },
  ];

  const userItems = [
    user.role === "ADMIN" && {
      label: <Link to="/admin">Admin Dashboard</Link>,
      key: "1",
    },
    {
      label: <Link to="/userprofile">UserProfile</Link>,
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
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/hotels">Hotels</Link>
            </li>
            <li>
              <Link to="/flights">Flights</Link>
            </li>
            <li>
              <Link to="/buses">Bus</Link>
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
