import { Button, DatePicker, Input, Select, Space } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
const { RangePicker } = DatePicker;
const HotelBox = () => {
  return (
    <div className="flex flex-col p-5 md:flex-row items-center gap-4  bg-white rounded-lg">
      <div className="flex items-center flex-1 gap-2">
        <CiSearch size={32} className="text-gray-700" />
        <Input placeholder="Where do you want to go?" className="p-3" />
      </div>
      <div className="flex items-center gap-3">
        <Space direction="vertical" size={12}>
          <RangePicker
            className="bg-gray-100 text-gray-700 rounded-md border-0"
            placeholder={["Check-in", "Check-out"]}
            style={{ width: "100%" }}
          />
        </Space>
      </div>
      <div className="flex items-center gap-3">
        <MdPerson size={24} className="text-gray-700" />
        <Select
          placeholder="Person"
          style={{
            width: "130px",
          }}
          variant="filled"
          showSearch={true}
          defaultValue={"1"}
          onChange={(value) => setFrom(value)}
          options={[
            {
              value: "1",
              label: "1 Person",
            },
            {
              value: "2",
              label: "2 People",
            },
            {
              value: "3",
              label: "3 People",
            },
            {
              value: "4",
              label: "4 People",
            },
            {
              value: "5",
              label: "5 People",
            },
          ]}
        />
      </div>
      <Button
        type="primary"
        size="large"
        className="mt-4 md:mt-0 transition-transform transform hover:scale-105 hover:shadow-md"
      >
        Search
      </Button>
    </div>
  );
};

export default HotelBox;
