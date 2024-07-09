import { Button, Table } from "antd";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import DestinationForm from "../../components/admin/form/DestinationForm";

const DestinationPage = ({ getColumnSearchProps }) => {
  const dataSource = [
    {
      key: "1",
      name: "Yangon",
      country: "Myanmar",
      highlight: "Sunset Viewing",
      topPlaces: "Shwedagon Pagoda, Sule Pagoda",
    },
    {
      key: "2",
      name: "Bagan",
      country: "Myanmar",
      highlight: "Hot Air Balloon Rides, Cycling Tours, Sunset Viewing",
      topPlaces: "Ananda Temple, Shwezigon Pagoda, Dhammayangyi Temple",
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      width: "20%",
      ...getColumnSearchProps("country"),
    },
    {
      title: "Highlights",
      dataIndex: "highlight",
      key: "highlight",
      width: "30%",
      ...getColumnSearchProps("highlight"),
    },
    {
      title: "Top Places",
      dataIndex: "topPlaces",
      key: "topPlaces",
      width: "30%",
      ...getColumnSearchProps("topPlaces"),
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
          <h4 className=" font-semibold">All Destinations</h4>
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
        <DestinationForm
          open={open}
          setOpen={setOpen}
          editForm={editForm}
          setEditForm={setEditForm}
        />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default DestinationPage;
