import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import BaseForm from "../../components/admin/form/BaseForm";
import { getAllBusServices } from "../../api/busservice";

const BusServicePage = ({ getColumnSearchProps }) => {
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img
          src={record.image ? record.image.imgUrl : ""}
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
              setSelectedBusId(record.id);
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
  const [selectedBusId, setSelectedBusId] = useState(null);
  useEffect(() => {
    getAllBus();
  }, [open]);
  const showModal = () => {
    setOpen(true);
  };
  const getAllBus = async () => {
    try {
      let res = await getAllBusServices();
      const modifiedData = res.data.map((d) => {
        return {
          ...d,
          key: d.id,
          image: d.image[0],
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
          <h4 className=" font-semibold">All Bus Services</h4>
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
          busForm={true}
          setEditForm={setEditForm}
          getAllBus={getAllBus}
          selectedBusId={selectedBusId}
        />
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default BusServicePage;
