import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Form, Avatar, Upload, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { loginUser, userState } from "../../features/user/UserSlice";
import { updateUser, getTravelPlanByUserId } from "../../api/userapi";
import { FaBed, FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import noImg from "../../assets/img/common/no_img.jpg";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
  const [allPlans, setAllPlans] = useState([]);

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
      setAllPlans(response.data);
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
    }
    fetchData();
  }, [tab]);

  const [fileList, setFileList] = useState([]);

  const navigate = useNavigate();

  const handleSave = async (values) => {
    setConfirmLoading(true);
    const formData = new FormData();
    for (const key in values) {
      if (key !== "image") {
        formData.append(key, values[key]);
      }
    }
    const { image: images } = values;
    const imgAry = [];
    if (images) {
      for (let i = 0; i < images.length; i++) {
        const selectedFile = images[i].originFileObj;
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(selectedFile.name);
        const snapshot = await fileRef.put(selectedFile);
        const downloadURL = await snapshot.ref.getDownloadURL();
        imgAry.push(downloadURL);
        console.log(downloadURL);
      }
      formData.append("image", imgAry);
    }
    formData.append("role", "USER");
    let response = await updateUser(userId, formData, token);
    console.log(response);
    if (response.status == 200) {
      dispatch(loginUser({ user: response.data, token }));
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("User profile updated");
      navigate("/");
    }
    setConfirmLoading(false);
    setEditMode(false);
    setFileList([]);
    form.resetFields("image");
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const beforeUpload = (file) => {
    handleUpload(file);
    return false; // Prevent default behavior of Upload component
  };

  return (
    <div className="w-[70%] mx-auto py-10 min-h-screen">
      <div className="flex mb-6 ">
        <Button
          className={`text-lg rounded-full font-semibold mb-6 p-5 mr-5 duration-150 ${
            tab == "profile" && "text-blue-400 border-blue-400"
          }`}
          onClick={() => setTab("profile")}
        >
          <h2>Profile</h2>
        </Button>
        <Button
          className={`text-lg rounded-full font-semibold mb-6 p-5 duration-150 ${
            tab !== "profile" && "text-blue-400 border-blue-400"
          }`}
          onClick={() => setTab("history")}
        >
          <h2>Travel Plans</h2>
        </Button>
      </div>

      {tab == "profile" && (
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <div className="flex space-x-10">
            <div className="w-[30%] gap-3">
              <Avatar
                size={100}
                src={user?.image.length > 0 ? user?.image[0]?.imgUrl : noImg}
                className=" ml-5 mb-5"
              />
              <Form.Item
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="Upload your profile picture"
              >
                <Upload
                  name="image"
                  listType="picture"
                  maxCount={1}
                  beforeUpload={beforeUpload}
                  fileList={fileList}
                  onChange={({ fileList }) => setFileList(fileList)}
                >
                  <Button
                    icon={<UploadOutlined />}
                    className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    Click to Upload
                  </Button>
                </Upload>
              </Form.Item>
            </div>
            <div className="flex-1">
              <Form.Item name="username" label="Name">
                <Input disabled={!editMode} />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input readOnly disabled />
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
            </div>
          </div>
        </Form>
      )}
      {tab == "history" && travelPlan && (
        <div className="mt-10">
          {allPlans &&
            allPlans.length > 0 &&
            allPlans.map((data, i) => (
              <details className="mb-10" key={i}>
                <summary className="flex justify-between text-lg font-semibold mb-3 hover:text-blue-400 hover:cursor-pointer">
                  <div>
                    <p>Start Date</p>
                    <p className="text-lg font-semibold">{data.startDate}</p>
                  </div>
                  <div>
                    <p>End Date</p>
                    <p className="text-lg font-semibold">
                      {data.endDate || "-"}
                    </p>
                  </div>
                  <div>
                    <p>Total Amount</p>
                    <p className="text-lg font-semibold">
                      {data.totalPrice} Kyats
                    </p>
                  </div>
                </summary>
                <hr className="mb-10" />

                <ul className="list-disc pl-6">
                  <li className="mb-10">
                    {data.busClassDTO && data.busScheduleDTO ? (
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
                    {data.flightClassDTO && data.flightScheduleDTO ? (
                      <div>
                        <p className="text-xl font-bold m-2">
                          Your Flight Plans
                        </p>
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
                    {data.accommodationDTO ? (
                      <div>
                        <p className="text-xl font-bold m-2">
                          Your Accommodation Plan
                        </p>
                        <div className="p-6 border border-gray-300 rounded-2xl ">
                          <div>
                            <div className="flex ">
                              <Image
                                src={data?.accommodationDTO?.hotelImgUrl}
                                width="200px"
                                height="150px"
                                className="p-3 "
                              />
                              <div className="w-[50%] m-5 ml-10">
                                <div className="flex justify-between ">
                                  <p className="text-xl font-bold text-blue-600 ml-2">
                                    {data?.accommodationDTO?.hotelName}
                                  </p>
                                  <p className="text-xl font-semibold ">
                                    {data?.accommodationDTO?.totalPrice} Kyats
                                  </p>
                                </div>
                                <div className="flex items-center text-xl m-2">
                                  <FaCalendarAlt />
                                  <p className="ml-2">
                                    {data?.accommodationDTO?.checkInDate} -{" "}
                                    {data?.accommodationDTO?.checkOutDate}{" "}
                                    &#40;2 nights&#41;
                                    <span className="text-lg text-green-600 my-3 font-semibold">
                                      &nbsp;&#40;{data.status}&#41;
                                    </span>
                                  </p>
                                </div>
                                <div className="flex items-center text-xl m-2">
                                  <FaBed />
                                  <p className="ml-2">
                                    1 x {data?.accommodationDTO?.roomName}
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
            ))}
        </div>
      )}
      {tab == "history" && !travelPlan && (
        <p className="text-xl font-semibold">No Travel History</p>
      )}
    </div>
  );
};

export default UserProfilePage;
