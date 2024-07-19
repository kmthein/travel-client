import React, { useEffect, useState } from "react";
import { Button, Checkbox, Collapse, Input, Radio } from "antd";
import { CiSearch } from "react-icons/ci";
import DestinationCard from "./DestinationCard";
import {
  getAllDestinations,
  searchDestinationByKeyword,
} from "../../../api/destination";
import { toast } from "react-toastify";
import { CgClose } from "react-icons/cg";

export const getUniqueCountries = (destinations) => {
  const countryAry = [];
  destinations.forEach((d) => {
    if (!countryAry.includes(d.country)) {
      countryAry.push(d.country);
    }
  });
  return countryAry;
};

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  const [filteredDestinations, setFilteredDestinations] = useState(null);

  const [countries, setCountries] = useState([]);

  const [selectCountry, setSelectCountry] = useState("All");

  const handleFilterCountry = (e) => {
    if (e.target.value == "All") {
      setFilteredDestinations(null);
      setSelectCountry(e.target.value);
      return;
    }
    setSelectCountry(e.target.value);
    const filterByCountry = destinations.filter(
      (d) => d.country == e.target.value
    );
    setFilteredDestinations(filterByCountry);
  };

  const items = [
    {
      key: "1",
      label: <h2 className="font-bold text-lg">Country</h2>,
      children: (
        <Radio.Group onChange={handleFilterCountry} value={selectCountry}>
          <div className="flex flex-col mb-1">
            <Radio value={"All"}>{"All"}</Radio>
          </div>
          {countries &&
            countries.length > 0 &&
            countries.map((country) => (
              <div className="flex flex-col mb-1">
                <Radio value={country}>{country}</Radio>
              </div>
            ))}
        </Radio.Group>
      ),
    },
    // {
    //   key: "2",
    //   label: <h2 className="font-bold text-lg">Rating</h2>,
    //   children: (
    //     <div className="flex flex-wrap flex-col gap-2">
    //       <Checkbox>5 Stars +</Checkbox>
    //       <Checkbox>4 Stars +</Checkbox>
    //       <Checkbox>3 Stars +</Checkbox>
    //       <Checkbox>2 Stars +</Checkbox>
    //       <Checkbox>1 Star +</Checkbox>
    //     </div>
    //   ),
    // },
  ];

  const getAllDestinationHandler = async () => {
    const res = await getAllDestinations();
    if (res.status == 200) {
      setDestinations(res.data);
      const uniqueCountries = getUniqueCountries(res.data);
      setCountries(uniqueCountries);
    }
  };

  useEffect(() => {
    getAllDestinationHandler();
  }, []);

  const [keyword, setKeyword] = useState("");

  const searchSubmit = async () => {
    if (keyword.length > 0 || keyword != "") {
      const res = await searchDestinationByKeyword({ keyword });
      console.log(res);
      if (res.status == 200) {
        setDestinations(res.data);
        const uniqueCountries = getUniqueCountries(res.data);
        setCountries(uniqueCountries);
      }
    } else {
      toast.error("Please input a keyword !");
    }
  };

  return (
    <>
      <div className="border border-gray-300 rounded-lg p-4 flex items-center gap-4 bg-white shadow">
        <CiSearch size={32} className="text-gray-600" />
        <Input
          className="border-none focus:ring-0 flex-1"
          placeholder="Search By Destination"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {keyword != "" && (
          <p
            className="text-sm flex items-center text-[#d43b3b] gap-[2px] cursor-pointer"
            onClick={() => {
              setKeyword("");
              getAllDestinationHandler();
            }}
          >
            <CgClose />
            <span>Reset</span>
          </p>
        )}
        <Button type="primary" onClick={searchSubmit} className="rounded-lg">
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
          <h2 className="text-2xl font-bold mb-4">All Places</h2>
          <div className="flex flex-wrap gap-[20px]">
            {!filteredDestinations &&
              destinations &&
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
            {filteredDestinations &&
              filteredDestinations.length > 0 &&
              filteredDestinations.map((destination) => (
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
