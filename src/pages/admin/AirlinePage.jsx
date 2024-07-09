import { Button, Table } from "antd";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import BaseForm from "../../components/admin/form/BaseForm";

const AirlinePage = ({ getColumnSearchProps }) => {
  const dataSource = [
    {
      key: "1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-3b0bf.appspot.com/o/mai.png?alt=media&token=80606e77-7a5a-40ea-a036-84d99014851c",
      name: "Myanmar Airways International",
    },
    {
      key: "2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-3b0bf.appspot.com/o/ngwesaung2.png?alt=media&token=94433001-e67c-40f4-8909-0ab108086406",
      name: "Myanmar National Airlines",
    },
  ];

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img
          src={record.image}
          alt="image"
          style={{ width: "40%", objectFit: "contain" }}
        />
      ),
      width: "15%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "40%",
      ...getColumnSearchProps("name"),
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
          <h4 className=" font-semibold">All Airlines</h4>
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
        <BaseForm
          open={open}
          setOpen={setOpen}
          editForm={editForm}
          airlineForm={true}
          setEditForm={setEditForm}
        />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
export default AirlinePage;
