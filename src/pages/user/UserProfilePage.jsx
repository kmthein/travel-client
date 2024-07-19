import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Form, Avatar, Upload, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { userState } from "../../features/user/UserSlice";
import { updateUser, getTravelPlanByUserId } from "../../api/userapi";
import { FaBed, FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("profile");
  const { user, token } = useSelector(userState);
  const [editMode, setEditMode] = useState(false);
  const [userId, setUserId] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [data, setData] = useState(null);
  const [travelPlan, setTravelPlan] = useState(false);
  const [flightPlan, setFlightPlan] = useState(false);
  const [hotelPlan, setHotelPlan] = useState(false);
  const [busPlan, setBusPlan] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        username: user.username,
        email: user.email,
        contactNumber: user.contactNumber,
        address: user.address,
      });
    }
  }, [user, form]);

  useEffect(() => {
    setUserId(user.id);
    async function fetchData() {
      const response = await getTravelPlanByUserId(user.id, token);
      if (response.data[0] != null) {
        setTravelPlan(true);
      }
      setData(response.data[0]);
      if (data.busClassDTO !== null) {
        setBusPlan(true);
      }
      if (data.flightClassDTO !== null) {
        setFlightPlan(true);
      }
      if (data.accommodationDTO != null) {
        setHotelPlan(true);
      }
      console.log(data);
    }
    fetchData();
  }, [tab]);

  const handleSave = async (values) => {
    setConfirmLoading(true);
    console.log(values);
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }

    let response = await updateUser(userId, formData, token);

    setConfirmLoading(false);
    setEditMode(false);

    console.log(values);
  };

  return (
    <div className="w-[70%] mx-auto py-10 min-h-screen">
      <div className="flex mb-6 ">
        <Button
          className="text-2xl font-semibold mb-6 p-5 mr-5"
          onClick={() => setTab("profile")}
        >
          <h2>Profile</h2>
        </Button>
        <Button
          className="text-2xl font-semibold mb-6 p-5"
          onClick={() => setTab("history")}
        >
          <h2>Travel Plans</h2>
        </Button>
      </div>

      {tab == "profile" && (
        <div className="flex space-x-10">
          <div className="flex flex-col gap-3 items-center">
            <Avatar
              size={100}
              src={user?.image[0]?.imgUrl || <UploadOutlined />}
            />
            <Upload>
              <Button icon={<UploadOutlined />}>Change Avatar</Button>
            </Upload>
          </div>
          <div className="flex-1">
            <Form form={form} layout="vertical" onFinish={handleSave}>
              <Form.Item name="username" label="Name">
                <Input disabled={!editMode} />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input disabled={!editMode} />
              </Form.Item>
              <Form.Item name="contactNumber" label="Phone">
                <Input disabled={!editMode} />
              </Form.Item>
              <Form.Item name="address" label="Address">
                <Input disabled={!editMode} />
              </Form.Item>
              {editMode ? (
                <div className="flex space-x-4">
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                  <Button onClick={() => setEditMode(false)}>Cancel</Button>
                </div>
              ) : (
                <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
              )}
            </Form>
          </div>
        </div>
      )}
      {tab == "history" && travelPlan && (
        <div className="mt-10">
          <details>
            <summary className="flex justify-between text-xl font-bold mb-3 hover:text-blue-400 hover:cursor-pointer">
              <div>
                <p>Start Date</p>
                <p className="text-lg font-semibold">{data.startDate}</p>
              </div>
              <div>
                <p>End Date</p>
                <p className="text-lg font-semibold">{data.endDate}</p>
              </div>
              <div>
                <p>Total Amount</p>
                <p className="text-lg font-semibold">{data.totalPrice} Kyats</p>
              </div>
            </summary>
            <hr className="mb-10" />

            <ul className="list-disc pl-6">
              <li className="mb-10">
                {busPlan == true ? (
                  <div>
                    <p className="text-xl font-bold m-2">Your Bus Plans</p>
                    <div className="flex p-6 border border-gray-300 rounded-2xl">
                      <Image
                        src={data.busClassDTO.busServiceImgUrl}
                        width="200px"
                        height="150px"
                        className="p-3 object-cover"
                      />
                      <div className="w-[50%] m-3 ml-20">
                        <div className="flex justify-between ">
                          <div className="flex justify-evenly items-center ">
                            <div className="mr-5">
                              <p className="text-xl font-bold mr-5 mb-3">
                                {data.busScheduleDTO.departurePlaceName}
                              </p>
                              <p className="text-lg  mr-5 ">
                                {data.busScheduleDTO.departureTime}
                              </p>
                            </div>
                            <FaLongArrowAltRight className="size-8 inline mr-10" />
                            <div>
                              <p className="text-xl font-bold mr-5 mb-3">
                                {data.busScheduleDTO.arrivalPlaceName}
                              </p>
                              <p className="text-lg  mr-5 ">
                                {data.busScheduleDTO.arrivalTime}
                              </p>
                            </div>
                          </div>
                          <p className="text-xl font-semibold ">
                            {`${data.busClassDTO.price} Kyats`}
                          </p>
                        </div>
                        <div className="flex">
                          <p className="text-lg  my-3 font-semibold">
                            {data.busScheduleDTO.departureDate}
                          </p>
                          <p className="text-lg text-green-600 my-3 font-semibold">
                            &nbsp;&#40;{data.status}&#41;
                          </p>
                        </div>
                        <p className="text-xl mx-auto my-3 font-bold text-blue-600">
                          {data.busClassDTO.busServiceName}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xl font-bold m-2">No Bus Plans</p>
                )}
              </li>
              <li className="mb-10">
                {flightPlan == true ? (
                  <div>
                    <p className="text-xl font-bold m-2">Your Flight Plans</p>
                    <div className="flex p-6 border border-gray-300 rounded-2xl">
                      <Image
                        src={data.flightClassDTO.airlineImgUrl}
                        width="200px"
                        height="150px"
                        className="p-3 object-cover"
                      />
                      <div className="w-[50%] m-3 ml-20">
                        <div className="flex justify-between ">
                          <div className="flex justify-evenly items-center ">
                            <div className="mr-5">
                              <p className="text-xl font-bold mr-5 mb-3">
                                {data.flightScheduleDTO.departurePlaceName}
                              </p>
                              <p className="text-lg  mr-5 ">
                                {data.flightScheduleDTO.departureTime}
                              </p>
                            </div>
                            <FaLongArrowAltRight className="size-8 inline mr-10" />
                            <div>
                              <p className="text-xl font-bold mr-5 mb-3">
                                {data.flightScheduleDTO.arrivalPlaceName}
                              </p>
                              <p className="text-lg  mr-5 ">
                                {data.flightScheduleDTO.arrivalTime}
                              </p>
                            </div>
                          </div>
                          <p className="text-xl font-semibold ">
                            {`${data.flightClassDTO.price} Kyats`}
                          </p>
                        </div>
                        <div className="flex">
                          <p className="text-lg  my-3 font-semibold">
                            {data.flightScheduleDTO.departureDate}
                          </p>
                          <p className="text-lg text-green-600 my-3 font-semibold">
                            &nbsp;&#40;{data.status}&#41;
                          </p>
                        </div>
                        <p className="text-xl mx-auto my-3 font-bold text-blue-600">
                          {data.flightClassDTO.airlineName}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xl font-bold m-2">No Flight Plans</p>
                )}
              </li>
              <li className="mb-10">
                {hotelPlan == true ? (
                  <div>
                    <p className="text-xl font-bold m-2">
                      Your Accommodation Plan
                    </p>
                    <div className="p-6 border border-gray-300 rounded-2xl ">
                      <div>
                        <div className="flex ">
                          <Image
                            src={data.accommodationDTO.hotelImgUrl}
                            width="200px"
                            height="150px"
                            className="p-3 "
                          />
                          <div className="w-[50%] m-5 ml-10">
                            <div className="flex justify-between ">
                              <p className="text-xl font-bold text-blue-600 ml-2">
                                {data.accommodationDTO.hotelName}
                              </p>
                              <p className="text-xl font-semibold ">
                                {data.accommodationDTO.totalPrice} Kyats
                              </p>
                            </div>
                            <div className="flex items-center text-xl m-2">
                              <FaCalendarAlt />
                              <p className="ml-2">
                                {data.accommodationDTO.checkInDate} -{" "}
                                {data.accommodationDTO.checkOutDate} &#40;2
                                nights&#41;
                                <span className="text-lg text-green-600 my-3 font-semibold">
                                  &nbsp;&#40;{data.status}&#41;
                                </span>
                              </p>
                            </div>
                            <div className="flex items-center text-xl m-2">
                              <FaBed />
                              <p className="ml-2">
                                1 x {data.accommodationDTO.roomName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xl font-bold m-2">
                    No Accommodation Plans
                  </p>
                )}
              </li>
            </ul>
          </details>
        </div>
      )}
      {tab == "history" && !travelPlan && (
        <p className="text-xl font-semibold">No Travel History</p>
      )}
    </div>
  );
};

export default UserProfilePage;
