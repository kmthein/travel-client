import React, { useEffect, useState } from "react";
import { getAllTravelPlan } from "../../api/travelplan";
import { Button, Table } from "antd";
import { CSVLink } from "react-csv";

const TravelListPage = ({ getColumnSearchProps }) => {
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      ...getColumnSearchProps("username"),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      ...getColumnSearchProps("startDate"),
    },
    {
      title: "Arrival Place",
      dataIndex: "arrivalPlace",
      key: "arrivalPlace",
      ...getColumnSearchProps("arrivalPlace"),
    },
    {
      title: "Departure Place",
      dataIndex: "departurePlace",
      key: "departurePlace",
      ...getColumnSearchProps("departurePlace"),
    },
    {
      title: "Hotel Name",
      dataIndex: "hotelName",
      key: "hotelName",
      ...getColumnSearchProps("hotelName"),
    },
    {
      title: "Airline Name",
      dataIndex: "airlineName",
      key: "airlineName",
      ...getColumnSearchProps("airlineName"),
    },
    {
      title: "Airline Class",
      dataIndex: "airlineClass",
      key: "airlineClass",
      ...getColumnSearchProps("airlineClass"),
    },
    {
      title: "Bus Name",
      dataIndex: "busName",
      key: "busName",
      ...getColumnSearchProps("busName"),
    },
    {
      title: "Bus Class",
      dataIndex: "busClass",
      key: "busClass",
      ...getColumnSearchProps("busClass"),
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      ...getColumnSearchProps("totalPrice"),
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllPlan();
  }, []);
  console.log(data);
  const getAllPlan = async () => {
    try {
      const res = await getAllTravelPlan();
      let modifiedData = res.data.map((item) => {
        return {
          ...item,
          key: item.id,
          departurePlace:
            item.departurePlace === null ? "-" : item.departurePlace,
          hotelName: item.hotelName === null ? "-" : item.hotelName,
          airlineClass: item.airlineClass === null ? "-" : item.airlineClass,
          airlineName: item.airlineName === null ? "-" : item.airlineName,
          busClass: item.busClass === null ? "-" : item.busClass,
          busName: item.busName === null ? "-" : item.busName,
          totalPrice: item.totalPrice === null ? "-" : item.totalPrice,
        };
      });
      setData(modifiedData);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(data);
  return (
    <>
      <div>
        <div className="flex justify-between my-4">
          <h4 className=" font-semibold">Travel Lists</h4>
          <CSVLink data={data} filename="travel_plan.csv">
            <Button>Export As CSV</Button>
          </CSVLink>
        </div>
        <Table dataSource={data} columns={columns} />
      </div>
    </>
  );
};

export default TravelListPage;
