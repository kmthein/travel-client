import { Button, Table } from "antd";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const MemberPage = ({ getColumnSearchProps }) => {
    const dataSource = [
      {
        key: "1",
        username: "John",
        email: "john@gmail.com",
        contactNumber: "09727342334",
        emailReceived: "Yes",
        dob: "1987-08-12",
      },
      {
        key: "2",
        username: "David",
        email: "david@gmail.com",
        contactNumber: "095122143",
        emailReceived: "No",
        dob: "1990-12-09",
      },
    ];
  
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
        ...getColumnSearchProps("emailReceived"),
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
            <Link to={""}>
              Send Message
            </Link>
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
  
    return (
      <>
        <div>
          <div className="flex justify-between my-4">
            <h4 className=" font-semibold">All Members</h4>
            <Button
              type="primary"
              icon={<IoMdAdd />}
              iconPosition={"end"}
              onClick={() => {
                showModal();
                setEditForm(false);
              }}
            >
              Add New
            </Button>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </>
    );
  };

export default MemberPage