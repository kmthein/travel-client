/** @jsxImportSource @emotion/react */
import React from "react";
import { BiBus } from "react-icons/bi";
import { FaCity, FaHotel } from "react-icons/fa6";
import { ImHome3 } from "react-icons/im";
import { MdAirlines } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { css } from "@emotion/react";

const { SubMenu } = Menu;

const customMenuStyle = css`
  .ant-menu {
    background: #22387d !important;
    color: white !important;
    border-right: 0 !important;
    padding: 0 !important;
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    background: #22387d !important;
    color: white !important;
    margin: 0 !important;
    height: 60px;
    line-height: 60px;
    border-radius: 0;
    width: 100% !important;
    padding-left: 60px !important;
  }

  .ant-menu-item-selected {
    background: #243055 !important;
    width: 100% !important;
  }

  .ant-menu-submenu-selected {
    background: #243055 !important;
    width: 100% !important;
  }

  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover {
    background: #2c4180 !important;
  }

  .ant-menu-item > span,
  .ant-menu-submenu-title > span {
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .ant-menu-submenu {
    .ant-menu-submenu-title {
      height: 60px;
      line-height: 60px;
    }
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <div className="bg-[#22387d] w-[20%] text-white min-h-screen">
      <Menu
        onClick={onClick}
        css={customMenuStyle}
        defaultSelectedKeys={["/admin"]}
        mode="inline"
      >
        <Menu.Item key="/admin" icon={<ImHome3 className="text-xl" />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="destination" icon={<FaCity className="text-xl" />}>
          Destination
        </Menu.Item>
        <Menu.Item key="hotel" icon={<FaHotel className="text-xl" />}>
          Hotel
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<MdAirlines className="text-xl" />}
          title="Flight Service"
        >
          <Menu.Item key="airline">Airline</Menu.Item>
          <Menu.Item key="airline/class">Flight Class</Menu.Item>
          <Menu.Item key="airline/schedule">Flight Schedule</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<BiBus className="text-xl" />}
          title="Bus Service"
        >
          <Menu.Item key="bus">Bus Operator</Menu.Item>
          <Menu.Item key="bus/class">Bus Class</Menu.Item>
          <Menu.Item key="bus/schedule">Bus Schedule</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
