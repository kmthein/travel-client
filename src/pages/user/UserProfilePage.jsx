import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Form, Avatar, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { userState } from "../../features/user/UserSlice";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(userState);
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      });
    }
  }, [user, form]);

  const handleSave = (values) => {
    // dispatch(updateUserProfile(values));
    // setEditMode(false);
  };

  return (
    <div className="w-[70%] mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="flex space-x-10">
        <div>
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
            <Form.Item name="name" label="Name">
              <Input disabled={!editMode} />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input disabled={!editMode} />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
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
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Your Travel Plans</h2>
        <ul className="list-disc pl-6">
          <li>
            <Link to="/your-travel-plans/flight">Flight Plans</Link>
          </li>
          <li>
            <Link to="/your-travel-plans/hotel">Hotel Plans</Link>
          </li>
          <li>
            <Link to="/your-travel-plans/bus">Bus Plans</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfilePage;
