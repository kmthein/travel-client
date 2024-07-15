import { DatePicker, Form, Input, Modal, Select, TimePicker } from "antd";
import React, { useEffect, useState } from "react";

import "firebase/compat/storage";
import { getAllAirline } from "../../../api/airlineapi";
import { getAllBusServices } from "../../../api/busservice";
import { getAllDestinations } from "../../../api/destination";
import {
  createFlightSchedule,
  getAllFlightSchedule,
  getFlightScheduleById,
  updateFlightSchedule,
} from "../../../api/flightschedule";
import moment from "moment/moment";
import {
  createBusSchedule,
  getBusScheduleById,
  updateBusSchedule,
} from "../../../api/busschedule";

const ScheduleForm = ({
  open,
  setOpen,
  editForm,
  setEditForm,
  isFlight,
  selectedFlightSchedule,
  selectedBusSchedule,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  console.log(selectedBusSchedule);
  const [form] = Form.useForm();
  useEffect(() => {
    handleEdit(isFlight ? selectedFlightSchedule : selectedBusSchedule);
  }, [editForm]);
  const onCreate = async (values) => {
    const formData = new FormData();
    setConfirmLoading(true);
    const { departTime, arriveTime, date } = values;
    const formattedDate = date.format("YYYY-MM-DD");
    const formattedDepartureTime = departTime.format("HH:mm:ss");
    const formattedArriveTime = arriveTime.format("HH:mm:ss");
    formData.append("departureId", values.from);
    formData.append("arrivalId", values.to);
    formData.append("distance", values.distance);
    formData.append("date", formattedDate);
    formData.append("departureTime", formattedDepartureTime);
    formData.append("arrivalTime", formattedArriveTime);
    if (isFlight) {
      formData.append("airlineId", values.airline);
      if (!editForm) {
        createFlightSchedule(formData);
      } else {
        updateFlightSchedule(selectedFlightSchedule, formData);
      }
    }
    if (!isFlight && !editForm) {
      formData.append("busId", values.bus);
      createBusSchedule(formData);
    } else {
      formData.append("busId", values.bus);
      updateBusSchedule(selectedBusSchedule, formData);
    }
    getAllFlightSchedule();
    setConfirmLoading(false);
    form.resetFields();
    setOpen(false);
  };
  const handleEdit = async (id) => {
    try {
      if (isFlight) {
        let res = await getFlightScheduleById(id);
        const {
          airLine,
          departureTime,
          arrivalTime,
          departurePlace,
          arrivalPlace,
          date,
          distance,
        } = res.data;
        form.setFieldsValue({
          airline: airLine.id,
          departTime: moment(departureTime, "HH:mm:ss"),
          arriveTime: moment(arrivalTime, "HH:mm:ss"),
          from: departurePlace.id,
          to: arrivalPlace.id,
          date: moment(date, "YYYY-MM-DD"),
          distance: distance,
        });
      } else {
        let res = await getBusScheduleById(id);
        const {
          busService,
          departureTime,
          arrivalTime,
          departurePlace,
          arrivalPlace,
          date,
          distance,
        } = res.data;
        form.setFieldsValue({
          bus: busService.id,
          departTime: moment(departureTime, "HH:mm:ss"),
          arriveTime: moment(arrivalTime, "HH:mm:ss"),
          from: departurePlace.id,
          to: arrivalPlace.id,
          date: moment(date, "YYYY-MM-DD"),
          distance: distance,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
    setEditForm(false);
  };

  const [value, setValue] = useState(null);
  const [transport, setTransport] = useState([]);
  const [places, setPlaces] = useState([]);
  const [departurePlace, setDeparturePlace] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };
  useEffect(() => {
    getTransportName();
  }, []);
  const getTransportName = async () => {
    let transportRes;
    let placesRes;
    try {
      placesRes = await getAllDestinations();
      setPlaces(
        placesRes.data.map((res) => {
          return {
            value: res.id,
            label: res.name,
          };
        })
      );
      if (isFlight) {
        transportRes = await getAllAirline();
      } else {
        transportRes = await getAllBusServices();
      }

      setTransport(
        transportRes.data.map((res) => {
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
  const handleDepartureChange = (value) => {
    setDeparturePlace(value);
    form.setFieldsValue({ to: undefined });
  };

  const filteredArrivalPlaces = departurePlace
    ? places.filter((place) => place.value !== departurePlace)
    : places;

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
              defaultValue={"Select One"}
              style={{
                width: "100%",
              }}
              options={transport}
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
              defaultValue={"Select One"}
              style={{
                width: "100%",
              }}
              options={places}
              onChange={handleDepartureChange}
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
              defaultValue={"Select One"}
              style={{
                width: "100%",
              }}
              options={filteredArrivalPlaces}
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
