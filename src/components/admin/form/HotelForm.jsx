import {
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  Upload,
  notification,
} from "antd";
import React, { useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { createHotel, updateHotel, getHotelById } from "../../../api/hotelapi";
import TextArea from "antd/es/input/TextArea";
import { getAllDestinations } from "../../../api/destination";

const HotelForm = ({
  open,
  setOpen,
  editForm,
  setEditForm,
  selectedHotelId,
  getHotels,
  form,
  images,
  setImages,
  previewImg,
  setPreviewImg,
}) => {
  const [newImages, setNewImages] = useState([]);
  const [imgCount, setImgCount] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [deleteImgIds, setDeleteImgIds] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const getAllDestinationHandler = async () => {
    try {
      const response = await getAllDestinations();
      const modifiedData = response.data.map((d) => {
        return {
          value: d.id,
          label: d.name,
        };
      });
      setDestinations(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  const getOldHotelHandler = async () => {
    try {
      const response = await getHotelById(selectedHotelId);
      const { name, description, rating, destinationId } = response.data;
      form.setFieldValue("name", name);
      form.setFieldValue("rating", rating);
      form.setFieldValue("description", description);
      form.setFieldValue("destinationId", destinationId);

      const oldImages = response.data.imgUrlList.map((i) => {
        return i;
      });

      setPreviewImg((prev) => prev.concat(oldImages));
      setImages((prev) => prev.concat(oldImages));
    } catch (error) {}
  };

  const getLocationOption = async () => {
    const response = await getAllDestinations();
    const option = [];
    response.data.map((d) => {
      let location = {
        value: d.id,
        label: d.name,
      };
      option.push(location);
    });
    setLocationOption(option);
  };

  useEffect(() => {
    form.resetFields();
    setPreviewImg([]);
    setImages([]);
    getLocationOption();
    // setDeleteImgIds([]);
    getAllDestinationHandler();
    if (editForm) {
      getOldHotelHandler();
    }
  }, [editForm, selectedHotelId]);

  const onCreate = async (values) => {
    setConfirmLoading(true);
    const imgAry = [];
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    if (editForm && newImages && newImages.length > 0) {
      images.map((i) => imgAry.push(i));
      for (let i = 0; i < newImages.length; i++) {
        const selectedFile = newImages[i];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(selectedFile.name);

        const snapshot = await fileRef.put(selectedFile);
        const downloadURL = await snapshot.ref.getDownloadURL();
        imgAry.push(downloadURL);
        console.log(downloadURL);
      }
    } else if (!editForm && images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        const selectedFile = images[i];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(selectedFile.name);

        const snapshot = await fileRef.put(selectedFile);
        const downloadURL = await snapshot.ref.getDownloadURL();
        imgAry.push(downloadURL);
        console.log(downloadURL);
      }
    }
    formData.append("imgUrlList", imgAry);

    let response;
    if (editForm) {
      // if (deleteImgIds.length > 0) {
      //   formData.append("delete_ids", deleteImgIds);
      // }
      response = await updateHotel(selectedHotelId, formData);
    } else {
      response = await createHotel(formData);
    }

    setConfirmLoading(false);
    setOpen(false);
    form.resetFields();
    setEditForm(false);

    setConfirmLoading(false);
    form.resetFields();
    setOpen(false);

    getHotels();
  };

  const handleCancel = () => {
    setPreviewImg([]);
    setImages([]);
    setOpen(false);
    setEditForm(false);
    form.resetFields();
  };

  const deleteHandler = (img) => {
    // setDeleteImgIds((prev) => [...prev, img.id]);
    const indexToDelete = previewImg.findIndex((e) => e == img);
    if (indexToDelete != -1) {
      const updatedSelectedImg = [...images];
      updatedSelectedImg.splice(indexToDelete, 1);

      setImgCount((prev) => prev - 1);
      setImages(updatedSelectedImg);
      setPreviewImg(previewImg.filter((e) => e != img));
      URL.revokeObjectURL(img);
    }
  };

  const onChangeHandler = (e) => {
    const selectedImages = e.target.files;
    const selectedImagesArray = Array.from(selectedImages);
    if (editForm) {
      setNewImages((prev) => prev.concat(selectedImagesArray));
    } else {
      setImages((prev) => prev.concat(selectedImagesArray));
    }
    setImgCount((prev) => prev + selectedImagesArray.length);

    const previewImagesArray = selectedImagesArray.map((img) => {
      return URL.createObjectURL(img);
    });
    setPreviewImg((prev) => prev.concat(previewImagesArray));
  };

  return (
    <Modal
      open={open}
      onOk={() => {
        form.submit();
      }}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        form={form}
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
        clearOnDestroy
        onFinish={(values) => onCreate(values)}
      >
        <h1 className=" text-xl mb-3 font-medium">
          {editForm ? "Edit" : "Add New"} Hotel
        </h1>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of hotel!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input the description of hotel!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <div className="flex gap-2">
          <Form.Item
            name="rating"
            label="Rating"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please input the rating of hotel!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="destinationId"
            label="Location"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please select the location of hotel!",
              },
            ]}
          >
            <Select defaultValue={"Select One"} options={destinations} />
          </Form.Item>
        </div>
        <Form.Item name="img" label="Hotel Image">
          <div className=" flex gap-2 my-2">
            {previewImg &&
              previewImg.map((img, index) => (
                <div className=" h-20 relative" key={index}>
                  <img
                    src={img}
                    key={index}
                    className="w-full h-full object-contain rounded-md"
                  />
                  <FaTrashAlt
                    onClick={() => deleteHandler(img)}
                    className="z-50 absolute bottom-2 right-4 text-red-500 text-md cursor-pointer"
                  />
                </div>
              ))}
          </div>
          {
            <label htmlFor="upload">
              <div className=" border-[2px] border-dashed rounded-md w-full flex items-center h-[100px]">
                <FaPlus className="mx-auto text-xl cursor-pointer text-black/50 hover:text-black/70 hover:text-[1.3rem]" />
              </div>
            </label>
          }
          <input
            type="file"
            id="upload"
            name="files"
            multiple
            onChange={onChangeHandler}
            accept="image/png,image/jpg,image/jpeg"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default HotelForm;
