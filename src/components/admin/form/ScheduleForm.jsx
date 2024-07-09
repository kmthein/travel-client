import {
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  TimePicker,
  Upload,
  notification,
} from "antd";
import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const ScheduleForm = ({ open, setOpen, editForm, setEditForm, isFlight }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const onCreate = async (values) => {
    setConfirmLoading(true);
    console.log(values);
    const { departTime, arriveTime, date } = values;
    const formattedDate = date.format("YYYY-MM-DD");
    const formattedDepartureTime = departTime.format("HH:mm:ss");
    const formattedArriveTime = arriveTime.format("HH:mm:ss");
    console.log(formattedDate);
    console.log(formattedDepartureTime);
    console.log(formattedArriveTime);
    setConfirmLoading(false);
    // form.resetFields();
    // setOpen(false);
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

  const [value, setValue] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };

  const dateOnChange = () => {};

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
          {isFlight ? "Flight Schedule" : "Bus Schedule"}
        </h1>
        {isFlight ? (
          <Form.Item
            name="airline"
            label="Airline"
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
            name="bus"
            label="Bus"
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
            name="departTime"
            label="Departure Time"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please select the departure time!",
              },
            ]}
          >
            <TimePicker
              value={value}
              onChange={onChange}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="arriveTime"
            label="Arrival Time"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please select the arrival time!",
              },
            ]}
          >
            <TimePicker
              value={value}
              onChange={onChange}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </div>
        <div className="flex gap-2">
          <Form.Item
            name="from"
            label="Departure Place"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please select the departure place!",
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
          <Form.Item
            name="to"
            label="Arrival Place"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please select the arrival place!",
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
        </div>

        <div className="flex gap-2">
          <Form.Item
            name="date"
            label="Date"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please select the schedule date!",
              },
            ]}
          >
            <DatePicker onChange={dateOnChange} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="distance"
            label="Distance"
            className="w-[50%]"
            rules={[
              {
                required: true,
                message: "Please input the distance between two places!",
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

export default ScheduleForm;
