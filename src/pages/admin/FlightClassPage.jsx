import { Button, Table } from "antd";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import ClassForm from "../../components/admin/form/ClassForm";

const FlightClassPage = ({ getColumnSearchProps }) => {
  const dataSource = [
    {
      key: "1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-3b0bf.appspot.com/o/ngwesaung1.png?alt=media&token=53cc4e2e-b1a3-4856-b71f-f651e0130942",
      name: "Economy Class",
      price: 57,
      seat: 34,
      airline: "Air Bagan Airlines",
    },
    {
      key: "2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-3b0bf.appspot.com/o/ngwesaung2.png?alt=media&token=94433001-e67c-40f4-8909-0ab108086406",
      name: "Premium Economy Class",
      price: 68,
      seat: 52,
      airline: "Myanmar National Airlines",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%",
      ...getColumnSearchProps("price"),
    },
    {
      title: "Total Seat",
      dataIndex: "seat",
      key: "seat",
      width: "20%",
      ...getColumnSearchProps("seat"),
    },
    {
      title: "Airline",
      dataIndex: "airline",
      key: "airline",
      width: "30%",
      ...getColumnSearchProps("airline"),
      sorter: (a, b) => a.airline - b.airline,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div className="flex gap-4">
          <span
            className=" cursor-pointer"
            onClick={() => {
              setSelectedBookId(record.key);
              setOpen(true);
              setEditForm(true);
            }}
          >
            Edit
          </span>
          <Link to={""} className=" text-red-600">
            Delete
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
          <h4 className=" font-semibold">All Flight Class</h4>
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
        <ClassForm
          open={open}
          setOpen={setOpen}
          editForm={editForm}
          setEditForm={setEditForm}
          flightClass={true}
        />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default FlightClassPage;
