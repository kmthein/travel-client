import { Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import "firebase/compat/storage";
import { getAllAirline } from "../../../api/airlineapi";
import { getAllBusServices } from "../../../api/busservice";
import { createAirlineClass } from "../../../api/airlineclass";

const ClassForm = ({ open, setOpen, editForm, setEditForm, flightClass }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [transport, setTransport] = useState([]);
  const [form] = Form.useForm();

  const onCreate = async (values) => {
    const formData = new FormData();
    if (!editForm) {
      if (flightClass) {
        formData.append("name", values.name);
        formData.append("price", values.price);
        formData.append("validSeat", values.validSeat);
        formData.append("airlineId", values.airlineId);
        createAirlineClass(formData);
      }
    }
    setConfirmLoading(true);
    setConfirmLoading(false);
    form.resetFields();
    setOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
    setEditForm(false);
  };
  useEffect(() => {
    getTransportName();
  }, []);
  const getTransportName = async () => {
    let response;
    try {
      if (flightClass) {
        response = await getAllAirline();
      } else {
        response = await getAllBusServices();
      }
      setTransport(
        response.data.map((res) => {
          return {
            value: res.id,
            label: res.name,
          };
        })
      );
    } catch (error) {
      console.log(error.message);
    }
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
              options={transport}
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
              defaultValue={"Select One"}
              style={{
                width: "100%",
              }}
              options={transport}
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
