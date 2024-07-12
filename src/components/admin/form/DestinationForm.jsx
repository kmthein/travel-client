import {
  Form,
  Input,
  message,
  Modal,
  Radio,
  Select,
  Space,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import {
  createDestination,
  getDestinationById,
  updateDestination,
} from "../../../api/destination";

const DestinationForm = ({
  open,
  setOpen,
  editForm,
  setEditForm,
  selectedId,
  getAllDestinationHandler,
}) => {
  const [previewImg, setPreviewImg] = useState([]);
  const [images, setImages] = useState([]);
  const [savedImages, setSavedImages] = useState([]);
  const [imgCount, setImgCount] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [deleteImgIds, setDeleteImgIds] = useState([]);

  const [form] = Form.useForm();

  const getOldDestinationHandler = async () => {
    try {
      const response = await getDestinationById({ id: selectedId });
      const { name, country, description, highlight, topPlace } = response.data;
      form.setFieldValue("name", name);
      form.setFieldValue("country", country);
      form.setFieldValue("description", description);
      form.setFieldValue(
        "highlight",
        highlight == "undefined" ? "-" : highlight
      );
      form.setFieldValue("topPlace", topPlace == "undefined" ? "-" : topPlace);
      const oldImages = response.data.image.map((i) => {
        return i;
      });
      setPreviewImg([...oldImages]);
    } catch (error) {}
  };

  useEffect(() => {
    form.resetFields();
    setPreviewImg([]);
    setImages([]);
    setDeleteImgIds([]);
    getOldDestinationHandler();
  }, [editForm, selectedId]);

  const onCreate = async (values) => {
    setConfirmLoading(true);
    const imgAry = [];
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        const selectedFile = images[i];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(selectedFile.name);

        const snapshot = await fileRef.put(selectedFile);
        const downloadURL = await snapshot.ref.getDownloadURL();
        imgAry.push(downloadURL);
      }
      formData.append("img_urls", imgAry);
    }
    let response;
    if (editForm) {
      if (deleteImgIds.length > 0) {
        formData.append("delete_ids", deleteImgIds);
      }
      response = await updateDestination({ id: selectedId, data: formData });
    } else {
      response = await createDestination(formData);
    }
    setConfirmLoading(false);
    setOpen(false);
    form.resetFields();
    setEditForm(false);
    getAllDestinationHandler();
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
    setEditForm(false);
  };

  const deleteHandler = (img) => {
    setDeleteImgIds((prev) => [...prev, img.id]);
    console.log(img);
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
    setImages(selectedImagesArray);

    setImgCount((prev) => prev + selectedImagesArray.length);

    const previewImagesArray = selectedImagesArray.map((img) => {
      return { imgUrl: URL.createObjectURL(img) };
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
          {editForm ? "Edit" : "Add New"} Destination
        </h1>
        <div className="flex gap-2">
          <Form.Item
            name="name"
            label="Name"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please input the name of destination!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please input the country of destination!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please select the description of destination!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="highlight" label="Highlight">
          <Input />
        </Form.Item>
        <Form.Item name="topPlace" label="Top Places">
          <Input />
        </Form.Item>
        <Form.Item label="Destination Image">
          <div className=" flex gap-2 my-2">
            {previewImg &&
              previewImg.map((img, index) => (
                <div className=" h-20 relative" key={index}>
                  <img
                    src={img.imgUrl}
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

export default DestinationForm;
