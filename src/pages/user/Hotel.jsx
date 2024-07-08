import { useState } from "react";
import { Button, Input, Collapse, Checkbox, Image, Rate } from "antd";
import beachImg from "../../assets/beach_hotel_1.jpg";
import { FaLocationDot } from "react-icons/fa6";

import CustomFooter from "../../components/user/common/Footer";
import Heading from "../../components/user/common/Heading";
import HotelSearch from "../../components/user/common/HotelSearch";

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

  return (
    <div style={{ width: "90%", margin: "0 auto", border: "1px solid black" }}>
      <Heading />
      <HotelSearch />
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
      <CustomFooter />
    </div>
  );
}

export default Hotel;
