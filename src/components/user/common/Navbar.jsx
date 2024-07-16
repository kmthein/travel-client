import React from "react";
import { IoMdArrowDropdown, IoMdPerson } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../../features/ui/UiSlice";
import { Avatar, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { logoutUser, userState } from "../../../features/user/UserSlice";
import { BiUser } from "react-icons/bi";

const items = [
  {
    label: <Link to="/flightandhotel">Flight And Hotel</Link>,
    key: "1",
  },
  {
    label: <Link to="/busandhotel">Bus and Hotel</Link>,
    key: "2",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(userState);

  const userItems = [
    {
      label: <Link to="/chatroom">Chatroom</Link>,
      key: "1",
    },
    {
      label: <Link to="/userprofile">UserProfile</Link>,
      key: "1",
    },
    {
      label: <span onClick={() => dispatch(logoutUser())}>Logout</span>,
      key: "2",
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
                      user?.image.length != 0 ? (
                        <img src={user?.image} />
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
