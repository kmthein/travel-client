import { Avatar, Dropdown, Space } from "antd";
import React from "react";
import { BiUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../features/user/UserSlice";

const Header = () => {
  const dispatch = useDispatch();

  const items = [
    {
      label: <span onClick={() => dispatch(logoutUser())}>Logout</span>,
      key: "1",
    },
  ];
  return (
    <div className=" py-6 px-6 flex justify-between bg-[#1f326d] text-white">
      <div className="ml-10">
        <h1 className=" text-2xl logo">
          Travel<span className=" text-[#5174FF]">Trax</span>
        </h1>
      </div>
      <div className="ml-auto">
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <div className="flex gap-2">
              <Avatar
                src="https://www.shutterstock.com/image-photo/portrait-serious-confident-businessman-entrepreneur-260nw-2022462281.jpg"
                size={44}
                icon={<BiUser />}
              ></Avatar>
              <div>
                <h5 className="text-sm font-medium mb-1">Admin Name</h5>
                <p className="text-xs text-[#cecece]">Admin</p>
              </div>
              <IoIosArrowDown className="mt-1 ml-2" />
            </div>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
