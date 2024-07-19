import { Avatar, Dropdown, Space } from "antd";
import React from "react";
import { BiUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, userState } from "../../../features/user/UserSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <p
          onClick={() => {
            navigate("/");
          }}
          className=" w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To User Profile
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <p
          onClick={() => {
            dispatch(logoutUser());
            navigate("/");
          }}
          className=" w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logout
        </p>
      ),
    },
  ];

  const { user } = useSelector(userState);

  console.log(user);
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
                src={user?.image[0]?.imgUrl}
                size={44}
                icon={<BiUser />}
              ></Avatar>
              <div>
                <h5 className="text-sm font-medium mb-1">{user?.username}</h5>
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
