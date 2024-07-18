import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Upload,
} from "antd";
import { closeModal, uiState } from "../../../features/ui/UiSlice";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { login, register } from "../../../api/auth";
import { toast } from "react-toastify";
import { loginUser } from "../../../features/user/UserSlice";

const FormModal = () => {
  const { isModal } = useSelector(uiState);
  const [isSignin, setIsSignIn] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    setIsSignIn(!isSignin);
    form.resetFields();
  };

  const handleOk = () => {
    form.submit();
    form.resetFields();
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleFinish = async (values) => {
    setConfirmLoading(true);
    console.log("Form values: ", values);
    const {
      image: images,
      dob,
      username,
      email,
      password,
      contactNumber,
      emailReceive,
      address,
    } = values;
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
    }
    const formData = new FormData();
    let res;
    if (!isSignin) {
      const formattedDate = dob.format("YYYY-MM-DD");
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("contactNumber", contactNumber);
      formData.append("emailReceive", emailReceive);
      formData.append("address", address);
      formData.append("role", "USER");
      formData.append("imgUrl", imgAry);
      formData.append("dob", formattedDate);
      res = await register(formData);
      console.log(res);
      if (res.status == 409) {
        toast.error("Email already existed !");
      } else if (res.status == 201) {
        toast.success("User registration successful !");
        setIsSignIn(true);
        form.resetFields();
        dispatch(closeModal());
      }
    } else {
      formData.append("email", email);
      formData.append("password", password);
      res = await login(formData);
      console.log(res);
      if (res.data.statusCodeValue == 401 || res.status == 403) {
        toast.error("Incorrect email or password");
        form.setFieldValue("password", "");
      } else if (res.status == 200) { 
        toast.success("Login successful");
        const { userDetails, token } = res.data;
        dispatch(loginUser({ user: userDetails, token }));
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userDetails));
        form.resetFields();
        dispatch(closeModal());
      }
    }
    setConfirmLoading(false);
  };

  return (
    <Modal
      width={isSignin ? 500 : 800}
      confirmLoading={confirmLoading}
      title={
        <>
          <h2 className="text-4xl font-extrabold text-center mb-3 text-gray-900">
            Travel<span className="text-blue-400">Trax</span>
          </h2>
          {!isSignin && (
            <p className="text-lg font-medium text-center text-gray-700">
              Sign up for your account
            </p>
          )}
        </>
      }
      open={isModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className="rounded-lg shadow-xl p-8"
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        className="space-y-6"
      >
        {!isSignin ? (
          <div>
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                  ]}
                >
                  <Input
                    type="email"
                    className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input.Password className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="contactNumber"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="dob"
                  label="Date Of Birth"
                  rules={[
                    { required: true, message: "Please input your DOB!" },
                  ]}
                >
                  <DatePicker className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                >
                  <TextArea className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="image"
                  label="Profile Picture"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e?.fileList
                  }
                  extra="Upload your profile picture"
                >
                  <Upload
                    name="image"
                    listType="picture"
                    maxCount={1}
                    beforeUpload={() => false}
                  >
                    <Button
                      icon={<UploadOutlined />}
                      className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    >
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="emailReceive"
                  valuePropName="checked"
                  initialValue={false}
                >
                  <Checkbox className="text-gray-700">
                    I’d love to get travel tips, destination guides, and
                    exclusive deals!
                  </Checkbox>
                </Form.Item>
              </Col>
            </Row>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 text-white"
            >
              Register
            </Button>
          </div>
        ) : (
          <>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                type="email"
                className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 text-white"
            >
              Sign In
            </Button>
          </>
        )}
      </Form>
      <div className="mt-6 text-center">
        {!isSignin ? (
          <p className="text-gray-700">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={handleSignIn}
            >
              Sign In
            </span>
          </p>
        ) : (
          <p className="text-gray-700">
            Don’t have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={handleSignIn}
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
    </Modal>
  );
};

export default FormModal;
