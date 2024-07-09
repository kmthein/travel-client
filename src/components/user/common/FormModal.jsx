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

const FormModal = () => {
  const { isModal } = useSelector(uiState);
  const [isSignin, setIsSignIn] = useState(false);
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

  const handleFinish = (values) => {
    console.log("Form values: ", values);
    dispatch(closeModal());
    form.resetFields();
  };

  return (
    <Modal
      width={800}
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
                  name="phone"
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
                  name="subscribe"
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
