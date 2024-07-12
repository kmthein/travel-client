import { Button, Table } from "antd";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import HotelForm from "../../components/admin/form/HotelForm";

const HotelPage = ({ getColumnSearchProps }) => {
  const dataSource = [
    {
      key: "1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-3b0bf.appspot.com/o/ngwesaung1.png?alt=media&token=53cc4e2e-b1a3-4856-b71f-f651e0130942",
      name: "Ngwe Saung Yacht Club & Resort",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ut eos quasi, corrupti nostrum vitae voluptate quaerat quibusdam...",
      location: "Ngwe Saung",
      rating: 4.0,
    },
    {
      key: "2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-3b0bf.appspot.com/o/ngwesaung2.png?alt=media&token=94433001-e67c-40f4-8909-0ab108086406",
      name: "Eskala Hotels & Resorts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ut eos quasi, corrupti nostrum vitae voluptate quaerat quibusdam...",
      location: "Ngwe Saung",
      rating: 4.5,
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
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "40%",
      ...getColumnSearchProps("description"),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      width: "10%",
      ...getColumnSearchProps("rating"),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: "30%",
      ...getColumnSearchProps("location"),
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
          <h4 className=" font-semibold">All Hotels</h4>
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
        <HotelForm
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

export default HotelPage;
