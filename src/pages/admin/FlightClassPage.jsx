import { Button, Form, Table } from "antd";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import ClassForm from "../../components/admin/form/ClassForm";
import { getAllAirlineClass } from "../../api/airlineclass";

const FlightClassPage = ({ getColumnSearchProps }) => {
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
              setSelectedFlightClass(record.id);
              setOpen(true);
              setEditForm(true);
            }}
          >
            Edit
          </span>
          {/* <Link to={""} className=" text-red-600">
            Delete
          </Link> */}
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedFlightClass, setSelectedFlightClass] = useState(null);
  const showModal = () => {
    setOpen(true);
  };
  const getAirLineClass = async () => {
    let res = await getAllAirlineClass();
    let modifiedData = res.data.map((item) => {
      return {
        id: item.id,
        key: item.id,
        name: item.name,
        price: item.price,
        seat: item.validSeat,
        airline: item.airline.name,
      };
    });
    setData(modifiedData);
  };
  useEffect(() => {
    getAirLineClass();
  }, [open]);
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
          selectedFlightClass={selectedFlightClass}
          getAirLineClass={getAirLineClass}
        />
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default FlightClassPage;
