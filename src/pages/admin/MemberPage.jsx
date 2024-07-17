import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllNormalUser } from "../../api/memberapi";
import { useSelector } from "react-redux";
import { userState } from "../../features/user/UserSlice";

const MemberPage = ({ getColumnSearchProps }) => {
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img src={record.image} alt="image" style={{ width: "100%" }} />
      ),
      width: "10%",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: "15%",
      ...getColumnSearchProps("username"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
      width: "15%",
      ...getColumnSearchProps("contactNumber"),
    },
    {
      title: "Email Received",
      dataIndex: "emailReceived",
      key: "emailReceived",
      width: "10%",
      render: (text, record) => (
        <span>{record.emailReceived ? "Yes" : "No"}</span>
      ),
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
      width: "15%",
      ...getColumnSearchProps("dob"),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div className="flex gap-4">
          <Link to={""}>Send Message</Link>
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const { token } = useSelector(userState);
  useEffect(() => {
    getUserList(token);
  }, []);
  console.log(data);
  const getUserList = async (token) => {
    try {
      let res = await getAllNormalUser(token);
      const modifiedData = res.data.map((d) => {
        return {
          ...d,
          key: d.id,
          image: d.image[0]?.imgUrl,
        };
      });
      setData(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="flex justify-between my-4">
          <h4 className=" font-semibold">All Members</h4>
        </div>
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default MemberPage;
