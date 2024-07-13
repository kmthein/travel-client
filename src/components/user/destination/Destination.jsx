import React, { useEffect, useState } from "react";
import { Button, Checkbox, Collapse, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import NgweSaung from "../../../assets/img/destination/ngwesaung.png";
import InLeLake from "../../../assets/img/destination/inlelake.png";
import DestinationCard from "./DestinationCard";
import { getAllDestinations } from "../../../api/destination";

const items = [
  {
    key: "1",
    label: <h2 className="font-bold text-lg">Country</h2>,
    children: (
      <div className="space-y-2 flex flex-col">
        <Checkbox>Myanmar</Checkbox>
        <Checkbox>Thailand</Checkbox>
        <Checkbox>Vietnam</Checkbox>
      </div>
    ),
  },
  {
    key: "2",
    label: <h2 className="font-bold text-lg">Rating</h2>,
    children: (
      <div className="flex flex-wrap flex-col gap-2">
        <Checkbox>5 Stars +</Checkbox>
        <Checkbox>4 Stars +</Checkbox>
        <Checkbox>3 Stars +</Checkbox>
        <Checkbox>2 Stars +</Checkbox>
        <Checkbox>1 Star +</Checkbox>
      </div>
    ),
  },
];

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  const getAllDestinationHandler = async () => {
    const res = await getAllDestinations();
    if (res.status == 200) {
      setDestinations(res.data);
    }
  };

  console.log(destinations);

  useEffect(() => {
    getAllDestinationHandler();
  }, []);

  return (
    <>
      <div className="border border-gray-300 rounded-lg p-4 flex items-center gap-4 bg-white shadow">
        <CiSearch size={32} className="text-gray-600" />
        <Input
          className="border-none focus:ring-0 flex-1"
          placeholder="Search By Destination"
        />
        <Button type="primary" className="rounded-lg">
          Search
        </Button>
      </div>
      <div className="flex flex-wrap justify-between mt-10 space-x-3 ">
        <div className="w-1/5  p-3 rounded-lg">
          <h3 className="mb-4 font-bold text-xl">Your Filters</h3>
          <Collapse
            items={items}
            className="bg-blue-50/50"
            expandIconPosition="end"
            ghost
            defaultActiveKey={["1", "2"]}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">All Destinations</h2>
          <div className="flex flex-wrap gap-[20px]">
            {destinations &&
              destinations.length > 0 &&
              destinations.map((destination) => (
                <DestinationCard
                  img={destination?.image[0]?.imgUrl}
                  name={destination?.name}
                  description={destination?.description}
                  hotel={destination?.hotelList?.length || "0"}
                  bus={destination?.busArriveTo?.length || "0"}
                  flight={destination?.flightArriveTo?.length || "0"}
                  key={destination?.id}
                  id={destination?.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
