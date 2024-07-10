import React from "react";
import { IoMdPerson } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../../features/ui/UiSlice";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

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
              <Link to="/bus">Bus</Link>
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
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer">
              <IoMdPerson onClick={() => dispatch(openModal())} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
