import React, { useEffect, useState } from "react";
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
import { getAllHotels } from "../../../api/hotel";
import noImg from "../../../assets/img/common/no_img.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveHotel } from "../../../features/select/SelectSlice";

function Hotel() {
  const [allHotels, setAllHotels] = useState([]);
  const [input, setInput] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const [filteredHotel, setFilteredHotel] = useState([]);

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  console.log(id);

  const fetchAllHotels = async () => {
    const res = await getAllHotels();
    console.log(res.data);
    if (res.status == 200) {
      if (id) {
        const filteredHotels = res.data.filter((hotel) => hotel.id == id);
        filteredHotels.map((hotel) => setInput(hotel.name));
        setFilteredHotel(filteredHotels);
        return;
      }
      setAllHotels(res.data);
    }
  };

  useEffect(() => {
    fetchAllHotels();
  }, []);

  const navigate = useNavigate();

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

  const dispatch = useDispatch();

  const disabledCheckInDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };
  const disabledCheckOutDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };

  console.log(input);

  const searchHotelHandler = async () => {
    console.log(input);
    console.log(checkInDate);
    console.log(checkOutDate);
    console.log(numberOfGuest);
    const res = await getAllHotels();
    let filteredHotels;
    let validHotel;
    if (id) {
      filteredHotels = filteredHotel.map((hotel) => ({
        ...hotel,
        roomList: hotel.roomList.filter((room) => room.validRoom > 0),
      }));
      validHotel = filteredHotels.filter((hotel) => hotel.roomList.length > 0);
    } else {
      filteredHotels = allHotels.map((hotel) => ({
        ...hotel,
        roomList: hotel.roomList.filter((room) => room.validRoom > 0),
      }));
      validHotel = filteredHotels.filter((hotel) => hotel.roomList.length > 0);
    }
    if (validHotel.length > 0) {
      setNotFound(true);
    }
    setFilteredHotel(validHotel);
  };

  console.log(filteredHotel);
  console.log(allHotels);

  return (
    <div className="p-8 w-[70%] mx-auto  rounded-xl">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-8">
        <Input
          placeholder="Search Hotels"
          className="w-96"
          value={input}
          prefix={<FaSearch className="text-gray-400" />}
          onChange={(e) => setInput(e.target.value)}
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
            { value: 1, label: "1 person" },
            { value: 2, label: "2 people" },
            { value: 3, label: "3 people" },
            { value: 4, label: "4 people" },
          ]}
        />
        <Button
          onClick={searchHotelHandler}
          className="bg-blue-500 text-white rounded-lg w-40 hover:bg-blue-600 transition"
        >
          Search
        </Button>
      </div>
      <div className="flex gap-8 mb-10">
        <div className="w-1/5">
          <h3 className="mb-4 text-lg font-bold">Your Filters</h3>
          <Collapse
            className="bg-blue-50/50"
            items={items}
            expandIconPosition="end"
            ghost
            defaultActiveKey={["1", "2", "3"]}
          />
        </div>
        <div className="w-4/5">
          <h2 className="text-2xl font-bold mb-4">All Hotels</h2>
          {filteredHotel &&
            filteredHotel.length > 0 &&
            filteredHotel.map((hotel, index) => (
              <div
                key={index}
                className="flex gap-4 mb-6 p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <div className="w-1/3">
                  <Image
                    src={
                      hotel?.imgUrlList.length > 0 ? hotel.imgUrlList[0] : noImg
                    }
                    width="200px"
                    height="200px"
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-bold">{hotel.name}</p>
                    <p className="text-lg font-bold">USD 72</p>
                  </div>
                  <Rate
                    value={hotel.rating}
                    disabled
                    className="text-sm mb-2"
                  />
                  <div className="flex items-center mb-4">
                    <FaLocationDot className="text-blue-400 mr-2" />
                    <p className="text-base font-semibold text-blue-400">
                      {hotel?.destination?.name}
                    </p>
                  </div>
                  <p className="mb-4">This property offers:</p>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button className="rounded-lg">Breakfast</Button>
                      <Button className="rounded-lg">Sea View</Button>
                      <Button className="rounded-lg">Free Wifi</Button>
                    </div>
                    <div>
                      <Button
                        className="bg-blue-500 text-white p-3"
                        onClick={() => {
                          dispatch(saveHotel(hotel));
                          navigate(`/rooms?hotel=${hotel.id}`);
                        }}
                      >
                        Select Room
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {filteredHotel?.length == 0 && allHotels &&
            allHotels.length > 0 &&
            allHotels.map((hotel, index) => (
              <div
                key={index}
                className="flex gap-4 mb-6 p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <div className="w-1/3">
                  <Image
                    src={
                      hotel?.imgUrlList.length > 0 ? hotel.imgUrlList[0] : noImg
                    }
                    width="200px"
                    height="200px"
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-bold">{hotel.name}</p>
                    <p className="text-lg font-bold">USD 72</p>
                  </div>
                  <Rate
                    value={hotel.rating}
                    disabled
                    className="text-sm mb-2"
                  />
                  <div className="flex items-center mb-4">
                    <FaLocationDot className="text-blue-400 mr-2" />
                    <p className="text-base font-semibold text-blue-400">
                      {hotel?.destination?.name}
                    </p>
                  </div>
                  <p className="mb-4">This property offers:</p>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button className="rounded-lg">Breakfast</Button>
                      <Button className="rounded-lg">Sea View</Button>
                      <Button className="rounded-lg">Free Wifi</Button>
                    </div>
                    <div>
                      <Button
                        className="bg-blue-500 text-white p-3"
                        onClick={() => navigate("/rooms")}
                      >
                        Select Room
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredHotel.length == 0 && <h5>Hotel Not Available</h5>}
        </div>
      </div>
    </div>
  );
}

export default Hotel;
