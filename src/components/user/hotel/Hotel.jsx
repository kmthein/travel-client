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
  Form,
  Radio,
} from "antd";
import { FaCalendarAlt, FaSearch, FaUser } from "react-icons/fa";
import beachImg from "../../../assets/img/hotel/beach_hotel_1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { getAllHotels, getAvailableHotels } from "../../../api/hotel";
import noImg from "../../../assets/img/common/no_img.jpg";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlan,
  selectHotel,
  selectState,
} from "../../../features/select/SelectSlice";
import {
  calculateDaysBetween,
  disablePastDates,
  formattedDate,
} from "../../../utils/utils";
import SelectStep from "../common/SelectStep";
import moment from "moment";
import { toast } from "react-toastify";

function Hotel() {
  const [allHotels, setAllHotels] = useState([]);
  const [input, setInput] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [daysBetween, setDaysBetween] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [rate, setRate] = useState("");

  const handleFilterHotel = (e) => {
    setRate(e.target.value);
    const r = e.target.value;
    const filter =
      r === ""
        ? allHotels
        : allHotels.filter((hotel) => Math.floor(hotel.rating) == r);
    setFilteredHotel(filter);
  };

  console.log(filteredHotel);

  const items = [
    {
      key: "1",
      label: <h2 className="font-bold text-lg">Rating</h2>,
      children: (
        <div className="flex flex-wrap flex-col gap-2">
          <Radio.Group
            onChange={handleFilterHotel}
            defaultValue={rate}
            value={rate}
          >
            <div className="flex flex-col mb-1">
              <Radio value={""}>default</Radio>
            </div>
            <div className="flex flex-col mb-1">
              <Radio value={"5"}>5 stars</Radio>
            </div>
            <div className="flex flex-col mb-1">
              <Radio value={"4"}>4 stars</Radio>
            </div>
            <div className="flex flex-col mb-1">
              <Radio value={"3"}>3 stars</Radio>
            </div>
            <div className="flex flex-col mb-1">
              <Radio value={"2"}>2 stars</Radio>
            </div>
            <div className="flex flex-col mb-1">
              <Radio value={"1"}>1 star</Radio>
            </div>
          </Radio.Group>
        </div>
      ),
    },
    // {
    //   key: "3",
    //   label: <h2 className="font-bold text-lg">Price</h2>,
    //   children: (
    //     <div className="flex flex-col gap-2">
    //       <div>
    //         <Checkbox>Maximum Price</Checkbox>
    //       </div>
    //       <div>
    //         <Checkbox>Minimum Price</Checkbox>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  const [form] = Form.useForm();

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const fetchAllHotels = async () => {
    const res = await getAllHotels();
    if (res.status == 200) {
      setFilteredHotel(res.data);
      if (id) {
        const filteredHotels = res.data.filter((hotel) => hotel.id == id);
        filteredHotels.map((hotel) => form.setFieldValue("hotel", hotel.name));
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

  const dispatch = useDispatch();

  const disabledCheckInDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };
  const disabledCheckOutDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };

  const searchHotelHandler = async (values) => {
    let totalPerson = values.guest;
    if (!values.guest) {
      totalPerson = 1;
    }
    dispatch(addPlan({ totalPerson }));
    setCheckInDate(formattedDate(values.checkin));
    setCheckOutDate(formattedDate(values.checkout));
    const totalNight = calculateDaysBetween(
      formattedDate(values.checkin),
      formattedDate(values.checkout)
    );
    setDaysBetween(totalNight);
    const formData = new FormData();
    formData.append("checkInDate", formattedDate(values.checkin));
    const res = await getAvailableHotels(formData);
    if (res.data.length > 0) {
      setAllHotels(res.data);
      setFilteredHotel(res.data);
    }
    setRate("");
    setDisabled(false);
  };

  const { hotelPlusFlight, hotelPlusBus } = useSelector(selectState);

  const { search } = useLocation();

  const disableCurrentAndPastDates = (current) => {
    // Can not select current or past dates
    return current && current <= moment(checkInDate).endOf("day");
  };

  return (
    <div className="p-8 w-[70%] mx-auto rounded-xl">
      <h2 className="text-lg font-semibold mb-10">
        Please choose check in and check out time to search available hotel
      </h2>
      {(hotelPlusFlight || hotelPlusBus) && (
        <div className="mb-10">
          <SelectStep />
        </div>
      )}
      <div>
        <Form
          layout="vertical"
          form={form}
          onFinish={searchHotelHandler}
          className="flex justify-between items-center bg-white p-4 py-0 rounded-lg shadow-md mb-8"
        >
          <Form.Item name="hotel" label="Hotel">
            <Input
              placeholder="Search Hotels"
              prefix={<FaSearch className="text-gray-400" />}
            />
          </Form.Item>
          <Form.Item
            name="checkin"
            label="Check In"
            rules={[{ required: true, message: "Select check in date!" }]}
          >
            <DatePicker
              placeholder="Check in"
              disabledDate={disablePastDates}
              onChange={(value) => setCheckInDate(formattedDate(value))}
              suffixIcon={<FaCalendarAlt />}
            />
          </Form.Item>
          <Form.Item
            name="checkout"
            label="Check Out"
            rules={[{ required: true, message: "Select check out date!" }]}
          >
            <DatePicker
              placeholder="Check Out"
              disabledDate={disableCurrentAndPastDates}
              suffixIcon={<FaCalendarAlt />}
            />
          </Form.Item>
          <Form.Item name="guest" label="Number of Guest">
            <Select
              defaultValue={1}
              suffixIcon={<FaUser />}
              name="guest"
              options={[
                { value: 1, label: "1 person" },
                { value: 2, label: "2 people" },
                { value: 3, label: "3 people" },
                { value: 4, label: "4 people" },
              ]}
            />
          </Form.Item>
          <Button
            htmlType="submit"
            className="bg-blue-500 text-white rounded-lg w-40 hover:bg-blue-600 transition"
          >
            Search
          </Button>
        </Form>
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
          <>
            {filteredHotel &&
              filteredHotel.map((hotel, index) => (
                <div
                  key={index}
                  className="flex gap-4 mb-6 p-4 border border-gray-300 rounded-lg shadow-sm"
                >
                  <div className="w-1/3">
                    <Image
                      src={
                        hotel?.imgUrlList.length > 0
                          ? hotel.imgUrlList[0]
                          : noImg
                      }
                      width="200px"
                      height="200px"
                      className="object-cover"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-lg font-bold">{hotel.name}</p>
                      {/* <p className="text-lg font-bold">USD 72</p> */}
                    </div>
                    <Rate
                      value={hotel.rating}
                      disabled
                      className="text-sm mb-2"
                    />
                    {/* <div className="flex items-center mb-4">
                    <FaLocationDot className="text-blue-400 mr-2" />
                    <p className="text-base font-semibold text-blue-400">
                      {hotel?.destination?.name}
                    </p>
                  </div> */}
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
                          disabled={disabled}
                          onClick={() => {
                            dispatch(
                              addPlan({
                                checkInDate,
                                checkOutDate,
                                hotel,
                                totalNight: daysBetween,
                              })
                            );
                            if (search == "?flightpackage") {
                              navigate(`/rooms?flightpackage`);
                            } else if (search == "?buspackage") {
                              navigate(`/rooms?buspackage`);
                            } else {
                              navigate(`/rooms?hotel=${hotel.id}`);
                              dispatch(selectHotel());
                            }
                          }}
                        >
                          Select Room
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </>
          <>
            {filteredHotel.length === 0 && (
              <h5 className="text-center">Hotel Not Available</h5>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
