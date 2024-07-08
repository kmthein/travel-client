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

const HotelSearch = () => {
  const [search, setSearch] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfGuest, setNumberOfGuest] = useState("1 passenger");

  const disabledCheckInDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };
  const disabledCheckOutDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };

  return (
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
          backgroundColor: "blue",
          borderRadius: "15px",
          border: "none",
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default HotelSearch;
