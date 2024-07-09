import { useState } from "react";
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
import { FaLocationDot } from "react-icons/fa6";
import beachImg from "../../../assets/img/hotel/beach_hotel_1.jpg";

function Hotel() {
  const items = [
    {
      key: "1",
      label: "Property Type",
      children: (
        <div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Hotel</p>
          </div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Resort</p>
          </div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Guesthouse</p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Rating",
      children: (
        <div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">4 Stars +</p>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Price",
      children: (
        <div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Maximum Price</p>
          </div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Minimum Price</p>
          </div>
        </div>
      ),
    },
  ];

  const disabledCheckInDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };
  const disabledCheckOutDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };

  return (
    <div style={{ width: "90%", margin: "0 auto", border: "1px solid black" }}>
      <div
        style={{
          display: "flex",
          width: "1100px",
          margin: "20px auto",
          border: "1px solid #cad2de",
          borderRadius: "20px",
          padding: "10px",

          justifyContent: "space-evenly",
        }}
      >
        <Input
          placeholder="Search Hotels"
          style={{
            width: "400px",
          }}
          prefix={<FaSearch style={{ color: "#cad2de" }} />}
          variant="borderless"
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={() => console.log(search)}
        />
        <DatePicker
          placeholder="Check in"
          suffixIcon={<FaCalendarAlt />}
          style={{
            width: "130px",
          }}
          variant="filled"
          disabledDate={disabledCheckInDate}
          onChange={(value) => setCheckInDate(value.$d)}
        />

        <DatePicker
          placeholder="Check out"
          suffixIcon={<FaCalendarAlt />}
          style={{
            width: "130px",
          }}
          variant="filled"
          disabledDate={disabledCheckOutDate}
          onChange={(value) => setCheckOutDate(value.$d)}
        />

        <Select
          defaultValue={1}
          style={{
            width: "130px",
          }}
          variant="filled"
          suffixIcon={<FaUser />}
          onChange={(value) => setNumberOfGuest(value)}
          options={[
            {
              value: 1,
              label: "1 passenger",
            },
            {
              value: 2,
              label: "2 passengers",
            },
            {
              value: 3,
              label: "3 passengers",
            },
            {
              value: 4,
              label: "4 passengers",
            },
          ]}
        />
        <Button
          onClick={() => {
            console.log(search);
            console.log(checkInDate);
            console.log(checkOutDate);
            console.log(numberOfGuest);
          }}
          style={{
            width: "150px",
            color: "white",

            borderRadius: "15px",
            border: "none",
          }}
        >
          Search
        </Button>
      </div>
      <div className="flex justify-between m-10">
        <div
          name="side"
          style={{
            width: "20%",
            margin: "0 auto",
          }}
        >
          <h3 className=" m-4 font-bold">Your Filters</h3>
          <Collapse
            items={items}
            expandIconPosition="end"
            ghost
            defaultActiveKey={[1, 2, 3]}
          />
        </div>
        <div name="main" style={{ width: "70%" }}>
          <div
            style={{
              margin: "10px auto",
              padding: "10px",
              border: "1px solid #cad2de",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "30%",
                padding: "5px",
                margin: "5px",
              }}
            >
              <Image src={beachImg} width="200px" height="200px" />
            </div>
            <div
              style={{
                width: "70%",
                padding: "5px",
                margin: "5px",
              }}
            >
              <div className="flex justify-between">
                <p className="text-lg font-bold">
                  Ngwe Saung Yacht Club and Resort
                </p>
                <p className="text-lg font-bold">USD 72</p>
              </div>
              <Rate value={5} className="text-sm" />
              <div className="flex items-center mb-5">
                <FaLocationDot className="size-4 mr-2 text-blue-400" />
                <p className="text-base font-semibold text-blue-400">
                  Beach front, Ngwe Saung Beach
                </p>
              </div>
              <p className="mb-5">This property offers:</p>
              <div>
                <Button className="mr-2">Breakfast</Button>
                <Button className="mr-2">Sea View</Button>
                <Button className="mr-2">Free Wifi</Button>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "10px auto",
              padding: "10px",
              border: "1px solid #cad2de",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "30%",
                padding: "5px",
                margin: "5px",
              }}
            >
              <Image src={beachImg} width="200px" height="200px" />
            </div>
            <div
              style={{
                width: "70%",
                padding: "5px",
                margin: "5px",
              }}
            >
              <div className="flex justify-between">
                <p className="text-lg font-bold">
                  Ngwe Saung Yacht Club and Resort
                </p>
                <p className="text-lg font-bold">USD 72</p>
              </div>
              <Rate value={5} className="text-sm" />
              <div className="flex items-center mb-5">
                <FaLocationDot className="size-4 mr-2 text-blue-400" />
                <p className="text-base font-semibold text-blue-400">
                  Beach front, Ngwe Saung Beach
                </p>
              </div>
              <p className="mb-5">This property offers:</p>
              <div>
                <Button className="mr-2">Breakfast</Button>
                <Button className="mr-2">Sea View</Button>
                <Button className="mr-2">Free Wifi</Button>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "10px auto",
              padding: "10px",
              border: "1px solid #cad2de",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "30%",
                padding: "5px",
                margin: "5px",
              }}
            >
              <Image src={beachImg} width="200px" height="200px" />
            </div>
            <div
              style={{
                width: "70%",
                padding: "5px",
                margin: "5px",
              }}
            >
              <div className="flex justify-between">
                <p className="text-lg font-bold">
                  Ngwe Saung Yacht Club and Resort
                </p>
                <p className="text-lg font-bold">USD 72</p>
              </div>
              <Rate value={5} className="text-sm" />
              <div className="flex items-center mb-5">
                <FaLocationDot className="size-4 mr-2 text-blue-400" />
                <p className="text-base font-semibold text-blue-400">
                  Beach front, Ngwe Saung Beach
                </p>
              </div>
              <p className="mb-5">This property offers:</p>
              <div>
                <Button className="mr-2">Breakfast</Button>
                <Button className="mr-2">Sea View</Button>
                <Button className="mr-2">Free Wifi</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
