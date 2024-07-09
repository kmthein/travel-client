import { Button, Checkbox, Collapse, Input } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";
import NgweSaung from "../../assets/img/destination/ngwesaung.png";
import InLeLake from "../../assets/img/destination/inlelake.png";

import DestinationCard from "../../components/user/destination/DestinationCard";

const items = [
  {
    key: "1",
    label: <h2 className="font-bold text-lg">Country</h2>,
    children: (
      <div className="space-y-2 flex flex-col">
        <Checkbox onChange={(e) => console.log(e.target.checked)}>
          Myanmar
        </Checkbox>
        <Checkbox onChange={(e) => console.log(e.target.checked)}>
          Thailand
        </Checkbox>
        <Checkbox onChange={(e) => console.log(e.target.checked)}>
          Vietnam
        </Checkbox>
      </div>
    ),
  },
  {
    key: "2",
    label: <h2 className="font-bold text-lg">Rating</h2>,
    children: (
      <div className="space-y-2">
        <div className="flex flex-col gap-2">
          <Checkbox onChange={(e) => console.log(e.target.checked)}>
            5 Stars +
          </Checkbox>
          <Checkbox onChange={(e) => console.log(e.target.checked)}>
            4 Stars +
          </Checkbox>
          <Checkbox onChange={(e) => console.log(e.target.checked)}>
            3 Stars +
          </Checkbox>
          <Checkbox onChange={(e) => console.log(e.target.checked)}>
            2 Stars +
          </Checkbox>
          <Checkbox onChange={(e) => console.log(e.target.checked)}>
            1 Star +
          </Checkbox>
        </div>
      </div>
    ),
  },
];

const Destinationpage = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 p-4">
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
      <div className="flex justify-between mt-10 space-x-10">
        <div className="w-[30%] mr-[90px]">
          <h3 className="mb-4 font-bold text-xl">Your Filters</h3>
          <Collapse
            items={items}
            expandIconPosition="end"
            ghost
            defaultActiveKey={["1", "2"]}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">All Destinations</h2>
          <div className="flex flex-wrap gap-10">
            <DestinationCard
              img={InLeLake}
              name="InLe Lake"
              hotel={3}
              bus={2}
              flight={1}
            />
            <DestinationCard
              img={NgweSaung}
              name="NgweSaung"
              hotel={5}
              bus={6}
              flight={1}
            />
            <DestinationCard
              img={NgweSaung}
              name="NgweSaung"
              hotel={5}
              bus={6}
              flight={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinationpage;
