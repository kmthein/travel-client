import { Button, Table, Form } from "antd";
import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import HotelForm from "../../components/admin/form/HotelForm";
import RoomPage from "./RoomPage";
import {
  getAllHotel,
  createHotel,
  updateHotel,
  deleteHotelById,
} from "../../api/hotelapi";
import noImg from "../../assets/img/common/no_img.jpg";

const HotelPage = ({ getColumnSearchProps }) => {
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img
          src={record.image ? record.image : noImg}
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
      render: (text, record) => (
        <div className="flex gap-4">
          <Link
            to={`/admin/room/${record.key}`}
            // className=" text-red-600"
            onClick={() => setSelectedHotelId(record.key)}
          >
            {record.name}
          </Link>
        </div>
      ),
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
      width: "10%",
      ...getColumnSearchProps("location"),
    },
    {
      title: "Action",
      dataIndex: "",
      width: "25%",
      key: "x",
      render: (text, record) => (
        <div className="flex gap-4">
          <span
            className=" cursor-pointer"
            onClick={() => {
              setSelectedHotelId(record.key);
              setOpen(true);
              setEditForm(true);
            }}
          >
            Edit
          </span>
          {/* <Link
            to={""}
            className=" text-red-600"
            onClick={() => deleteHotel(record.key)}
          >
            Delete
          </Link> */}
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [images, setImages] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };
  const getHotels = async () => {
    try {
      let res = await getAllHotel();
      const modifiedData = res.data.map((d) => {
        return {
          ...d,
          key: d.id,
          description: `${d.description.slice(0, 200)}${
            d.description.length > 200 && "..."
          }`,
          image: d.imgUrlList[0],
        };
      });
      setData(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  const createHotel = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHotel = async (id) => {
    try {
      let res = await deleteHotelById(id);
      getHotels();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHotels();
  }, [open]);
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
              form.resetFields();
              setPreviewImg([]);
              setImages([]);
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
          selectedHotelId={selectedHotelId}
          getHotels={getHotels}
          form={form}
          images={images}
          setImages={setImages}
          previewImg={previewImg}
          setPreviewImg={setPreviewImg}
        />
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default HotelPage;
