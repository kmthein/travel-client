import { Button, Table, Form } from "antd";
import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import RoomForm from "../../components/admin/form/RoomForm";
import {
  getAllRoomByHotelId,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoomById,
} from "../../api/roomapi";
import {
  getAllHotel,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotelById,
} from "../../api/hotelapi";

const RoomPage = ({ getColumnSearchProps }) => {
  const [data, setData] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [images, setImages] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const [hotelName, setHotelName] = useState("Hotel");

  const [form] = Form.useForm();

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
      title: "Room Type",
      dataIndex: "roomType",
      key: "roomType",
      width: "20%",
      ...getColumnSearchProps("roomType"),
    },
    {
      title: "Valid Room",
      dataIndex: "validRoom",
      key: "validRoom",
      width: "40%",
      ...getColumnSearchProps("validRoom"),
    },
    {
      title: " Room Price",
      dataIndex: "roomPrice",
      key: "roomPrice",
      width: "10%",
      ...getColumnSearchProps("roomPrice"),
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
              setSelectedRoomId(record.key);
              setOpen(true);
              setEditForm(true);
            }}
          >
            Edit
          </span>
          <Link
            to={""}
            className=" text-red-600"
            onClick={() => deleteRoom(record.key)}
          >
            Delete
          </Link>
        </div>
      ),
    },
  ];

  const showModal = () => {
    setOpen(true);
  };
  const getRooms = async () => {
    try {
      if (selectedHotelId === null) return;
      let res = await getAllRoomByHotelId(selectedHotelId);
      console.log(res);
      const modifiedData = res.data.map((d) => {
        return {
          ...d,
          key: d.id,
          image: d.imgUrlList[0],
        };
      });
      setData(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async (id) => {
    try {
      let res = await deleteRoomById(id);
      getRooms();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const hotelId = useParams().id;

  useEffect(() => {
    setSelectedHotelId(hotelId);
  }, []);

  const getHotel = async () => {
    if (selectedHotelId !== null) {
      const res = await getHotelById(selectedHotelId);
      setHotelName(res.data.name);
    }
  };

  useEffect(() => {
    getHotel();
    getRooms();
  }, [selectedHotelId]);
  return (
    <>
      <div>
        <div className="flex justify-between my-4">
          <h4 className=" font-semibold">{hotelName}</h4>
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
        <RoomForm
          open={open}
          setOpen={setOpen}
          editForm={editForm}
          setEditForm={setEditForm}
          selectedHotelId={selectedHotelId}
          selectedRoomId={selectedRoomId}
          setSelectedRoomId={setSelectedRoomId}
          getRooms={getRooms}
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

export default RoomPage;
