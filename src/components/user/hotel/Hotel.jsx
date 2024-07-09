import React, { useState } from "react";
import {
  DatePicker,
  Select,
  Button,
  Input,
  Collapse,
  Checkbox,
  Image,
  Rate,
} from "antd";
import { FaCalendarAlt, FaSearch, FaUser } from "react-icons/fa";
import beachImg from "../../../assets/img/hotel/beach_hotel_1.jpg";
import { FaLocationDot } from "react-icons/fa6";

function Hotel() {
  const [search, setSearch] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfGuest, setNumberOfGuest] = useState(1);

  const items = [
    {
      key: "1",
      label: <h2 className="font-bold text-lg">Property Type</h2>,
      children: (
        <div className="flex flex-col gap-2">
          <div>
            <Checkbox>Hotel</Checkbox>
          </div>
          <div>
            <Checkbox>Resort</Checkbox>
          </div>
          <div>
            <Checkbox>Guesthouse</Checkbox>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: <h2 className="font-bold text-lg">Rating</h2>,
      children: (
        <div>
          <div>
            <Checkbox>5 Stars +</Checkbox>
            <Checkbox>4 Stars +</Checkbox>
            <Checkbox>3 Stars +</Checkbox>
            <Checkbox>2 Stars +</Checkbox>
            <Checkbox>1 Star +</Checkbox>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: <h2 className="font-bold text-lg">Price</h2>,
      children: (
        <div className="flex flex-col gap-2">
          <div>
            <Checkbox>Maximum Price</Checkbox>
          </div>
          <div>
            <Checkbox>Minimum Price</Checkbox>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 w-[70%] mx-auto  rounded-xl">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-8">
        <Input
          placeholder="Search Hotels"
          className="w-96"
          prefix={<FaSearch className="text-gray-400" />}
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={() => console.log(search)}
        />
        <DatePicker
          placeholder="Check in"
          suffixIcon={<FaCalendarAlt />}
          className="w-32"
          onChange={(value) => setCheckInDate(value ? value.toDate() : null)}
        />
        <DatePicker
          placeholder="Check out"
          suffixIcon={<FaCalendarAlt />}
          className="w-32"
          onChange={(value) => setCheckOutDate(value ? value.toDate() : null)}
        />
        <Select
          defaultValue={1}
          className="w-32"
          suffixIcon={<FaUser />}
          onChange={(value) => setNumberOfGuest(value)}
          options={[
            { value: 1, label: "1 passenger" },
            { value: 2, label: "2 passengers" },
            { value: 3, label: "3 passengers" },
            { value: 4, label: "4 passengers" },
          ]}
        />
        <Button
          onClick={() => {
            console.log(search);
            console.log(checkInDate);
            console.log(checkOutDate);
            console.log(numberOfGuest);
          }}
          className="bg-blue-500 text-white rounded-lg w-40 hover:bg-blue-600 transition"
        >
          Search
        </Button>
      </div>
      <div className="flex gap-8 mb-10">
        <div className="w-1/5">
          <h3 className="mb-4 text-lg font-bold">Your Filters</h3>
          <Collapse
            items={items}
            expandIconPosition="end"
            ghost
            defaultActiveKey={["1", "2", "3"]}
          />
        </div>
        <div className="w-4/5">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex gap-4 mb-6 p-4 border border-gray-300 rounded-lg shadow-sm"
            >
              <div className="w-1/3">
                <Image src={beachImg} width="200px" height="200px" />
              </div>
              <div className="w-2/3">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-lg font-bold">
                    Ngwe Saung Yacht Club and Resort
                  </p>
                  <p className="text-lg font-bold">USD 72</p>
                </div>
                <Rate value={5} className="text-sm mb-2" />
                <div className="flex items-center mb-4">
                  <FaLocationDot className="text-blue-400 mr-2" />
                  <p className="text-base font-semibold text-blue-400">
                    Beach front, Ngwe Saung Beach
                  </p>
                </div>
                <p className="mb-4">This property offers:</p>
                <div className="flex gap-2">
                  <Button className="bg-green-500 text-white rounded-lg">
                    Breakfast
                  </Button>
                  <Button className="bg-green-500 text-white rounded-lg">
                    Sea View
                  </Button>
                  <Button className="bg-green-500 text-white rounded-lg">
                    Free Wifi
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotel;
