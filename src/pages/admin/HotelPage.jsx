import { Button, Table, Form } from "antd";
import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import HotelForm from "../../components/admin/form/HotelForm";
import {
  getAllHotel,
  createHotel,
  updateHotel,
  deleteHotelById,
} from "../../api/hotelapi";

const HotelPage = ({ getColumnSearchProps }) => {
  // const dataSource = [
  //   {
  //     key: "1",
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/travel-3b0bf.appspot.com/o/ngwesaung1.png?alt=media&token=53cc4e2e-b1a3-4856-b71f-f651e0130942",
  //     name: "Ngwe Saung Yacht Club & Resort",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ut eos quasi, corrupti nostrum vitae voluptate quaerat quibusdam...",
  //     location: "Ngwe Saung",
  //     rating: 4.0,
  //   },
  //   {
  //     key: "2",
  //     image:
  //       "https://firebasestorage.googleapis.com/v0/b/travel-3b0bf.appspot.com/o/ngwesaung2.png?alt=media&token=94433001-e67c-40f4-8909-0ab108086406",
  //     name: "Eskala Hotels & Resorts",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ut eos quasi, corrupti nostrum vitae voluptate quaerat quibusdam...",
  //     location: "Ngwe Saung",
  //     rating: 4.5,
  //   },
  // ];

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
              setSelectedHotelId(record.key);
              setOpen(true);
              setEditForm(true);
            }}
          >
            Edit
          </span>
          <Link
            to={""}
            className=" text-red-600"
            onClick={() => deleteHotel(record.key)}
          >
            Delete
          </Link>
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
