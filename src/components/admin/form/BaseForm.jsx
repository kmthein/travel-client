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
import React, { useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const BaseForm = ({
  open,
  setOpen,
  editForm,
  setEditForm,
  airlineForm,
  busForm,
}) => {
  const [previewImg, setPreviewImg] = useState([]);
  const [images, setImages] = useState([]);
  const [savedImages, setSavedImages] = useState([]);
  const [imgCount, setImgCount] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const onCreate = async (values) => {
    setConfirmLoading(true);
    for (let i = 0; i < images.length; i++) {
      const selectedFile = images[i];
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);

      const snapshot = await fileRef.put(selectedFile);
      const downloadURL = await snapshot.ref.getDownloadURL();
      console.log(downloadURL);
    }
    await console.log("All image uploaded");
    setConfirmLoading(false);
    form.resetFields();
    setOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
    setEditForm(false);
  };

  const deleteHandler = (img) => {
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
          {editForm ? "Edit" : "Add New"}{" "}
          {airlineForm ? "Airline" : "Bus Service"}
        </h1>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: airlineForm
                ? "Please input the name of airline!"
                : "Please input the name of bus service!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="img" label={airlineForm ? "Airline Logo" : "Bus Logo"}>
          <div className=" flex gap-2 my-2">
            {previewImg &&
              previewImg.map((img, index) => (
                <div className=" h-40 relative" key={index}>
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
          {previewImg.length < 1 && (
            <label htmlFor="upload">
              <div className=" border-[2px] border-dashed rounded-md w-full flex items-center h-[100px]">
                <FaPlus className="mx-auto text-xl cursor-pointer text-black/50 hover:text-black/70 hover:text-[1.3rem]" />
              </div>
            </label>
          )}
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

export default BaseForm;
