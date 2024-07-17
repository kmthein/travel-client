import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import ScheduleForm from "../../components/admin/form/ScheduleForm";
import { getAllAirline } from "../../api/airlineapi";
import { getAllFlightSchedule } from "../../api/flightschedule";

const FlightSchedulePage = ({ getColumnSearchProps }) => {
  const columns = [
    {
      title: "Airline",
      dataIndex: "airline",
      key: "airline",
      width: "25%",
      ...getColumnSearchProps("airline"),
    },
    {
      title: "Departure Time",
      dataIndex: "departTime",
      key: "departTime",
      width: "15%",
      ...getColumnSearchProps("departTime"),
    },
    {
      title: "Arrival Time",
      dataIndex: "arriveTime",
      key: "arriveTime",
      width: "15%",
      ...getColumnSearchProps("arriveTime"),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "15%",
      ...getColumnSearchProps("date"),
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      width: "10%",
      ...getColumnSearchProps("from"),
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
      width: "10%",
      ...getColumnSearchProps("to"),
    },
    {
      title: "Distance",
      dataIndex: "distance",
      key: "distance",
      width: "10%",
      ...getColumnSearchProps("distance"),
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
              setSelectedFlightSchedule(record.key);
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
  const [selectedFlightSchedule, setSelectedFlightSchedule] = useState(null);
  const showModal = () => {
    setOpen(true);
  };
  useEffect(() => {
    getFlightSchedule();
  }, [open]);
  const getFlightSchedule = async () => {
    let res = await getAllFlightSchedule();
    console.log(res.data);
    let modifiedData = res.data.map((item) => {
      return {
        key: item.id,
        airline: item.airLine.name,
        departTime: item.departureTime,
        arriveTime: item.arrivalTime,
        date: item.date,
        from: item.departurePlace.name,
        to: item.arrivalPlace.name,
        distance: item.distance,
      };
    });
    setData(modifiedData);
  };
  return (
    <>
      <div>
        <div className="flex justify-between my-4">
          <h4 className=" font-semibold">All Flight Schedule</h4>
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
        <ScheduleForm
          open={open}
          setOpen={setOpen}
          editForm={editForm}
          setEditForm={setEditForm}
          isFlight={true}
          selectedFlightSchedule={selectedFlightSchedule}
        />
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default FlightSchedulePage;
