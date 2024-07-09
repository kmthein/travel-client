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

const ClassForm = ({ open, setOpen, editForm, setEditForm, flightClass }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const onCreate = async (values) => {
    setConfirmLoading(true);
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

  const allAirlines = [
    {
      value: 1,
      label: "Myanmar National Airlines",
    },
    {
      value: 2,
      label: "Air Bagan Airlines",
    },
  ];

  const allBus = [
    {
      value: 1,
      label: "GI Group Express",
    },
    {
      value: 2,
      label: "High Boss Express",
    },
  ];

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
          {flightClass ? "Flight Class" : "Bus Class"}
        </h1>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of class!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {flightClass ? (
          <Form.Item
            name="airlineId"
            label="Airline Name"
            rules={[
              {
                required: true,
                message: "Please select the airline!",
              },
            ]}
          >
            <Select
              // defaultValue={oldBook ? oldBook?.author?.name : "Select One"}
              defaultValue={"Select One"}
              style={{
                width: "100%",
              }}
              options={allAirlines}
            />
          </Form.Item>
        ) : (
          <Form.Item
            name="busId"
            label="Bus Name"
            rules={[
              {
                required: true,
                message: "Please select the bus!",
              },
            ]}
          >
            <Select
              // defaultValue={oldBook ? oldBook?.author?.name : "Select One"}
              defaultValue={"Select One"}
              style={{
                width: "100%",
              }}
              options={allBus}
            />
          </Form.Item>
        )}
        <div className="flex gap-2">
          <Form.Item
            name="price"
            label="Price"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please input the price of class!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="seat"
            label="Total Seats"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please input the count of seats!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default ClassForm;
