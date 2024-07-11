import { Button, message, notification, Table } from "antd";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import DestinationForm from "../../components/admin/form/DestinationForm";
import { getAllDestinations } from "../../api/destination";
import noImg from "../../assets/img/common/no_img.jpg";

const DestinationPage = ({ getColumnSearchProps }) => {
  const [dataSource, setDataSource] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const getAllDestinationHandler = async () => {
    try {
      const response = await getAllDestinations();
      console.log(response.data);
      const modifiedData = response.data.map((d) => {
        return {
          key: d.id,
          name: d.name,
          country: d.country,
          highlight: d.highlight == "undefined" ? "-" : d.highlight,
          topPlaces: d.topPlace == "undefined" ? "-" : d.topPlace,
          ...d,
          image: d.image[0],
        };
      });
      setDataSource(modifiedData);
    } catch (error) {}
  };

  useEffect(() => {
    getAllDestinationHandler();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img
          src={record.image ? record.image.imgUrl : noImg}
          alt="image"
          style={{ width: "100%" }}
        />
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
              setSelectedId(record.key);
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

  const showModal = () => {
    setOpen(true);
  };

  const [api, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
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
          selectedId={selectedId}
          getAllDestinationHandler={getAllDestinationHandler}
        />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default DestinationPage;
