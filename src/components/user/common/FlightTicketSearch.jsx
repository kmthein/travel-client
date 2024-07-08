import { Button, Select, DatePicker } from "antd";
import { useState } from "react";
import { FaCalendarAlt, FaPlane } from "react-icons/fa";
import { FaLocationDot, FaUser } from "react-icons/fa6";

const BusTicketSearch = () => {
  const [ticketOption, setTicketOption] = useState("Round Trip");
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [numberOfPassenger, setNumberOfPassenger] = useState(1);

  const disabledDepartureDate = (current) => {
    // Can not select days before today and today
    return current && current < new Date();
  };
  const disabledReturnDate = (current) => {
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
      <Select
        defaultValue="Round Trip"
        style={{
          width: "130px",
        }}
        variant="filled"
        dropdownStyle={{
          backgroundColor: "lightblue",
        }}
        onChange={(value) => setTicketOption(value)}
        options={[
          {
            value: "One Way",
            label: "One Way",
          },
          {
            value: "Round Trip",
            label: "Round Trip",
          },
        ]}
      />
      <Select
        placeholder="Flying From"
        style={{
          width: "130px",
        }}
        variant="filled"
        showSearch={true}
        suffixIcon={<FaPlane />}
        onChange={(value) => setFrom(value)}
        options={[
          {
            value: "Yangon",
            label: "Yangon",
          },
          {
            value: "Mandalay",
            label: "Mandalay",
          },
          {
            value: "Taung Gyi",
            label: "Taung Gyi",
          },
          {
            value: "Naw Pyi Taw",
            label: "Naw Pyi Taw",
          },
        ]}
      />
      <Select
        placeholder="Destination"
        style={{
          width: "130px",
        }}
        variant="filled"
        showSearch={true}
        suffixIcon={<FaLocationDot />}
        onChange={(value) => setDestination(value)}
        options={[
          {
            value: "Yangon",
            label: "Yangon",
          },
          {
            value: "Mandalay",
            label: "Mandalay",
          },
          {
            value: "Taung Gyi",
            label: "Taung Gyi",
          },
          {
            value: "Naw Pyi Taw",
            label: "Naw Pyi Taw",
          },
        ]}
      />
      <DatePicker
        placeholder="Departure"
        suffixIcon={<FaCalendarAlt />}
        style={{
          width: "130px",
        }}
        variant="filled"
        disabledDate={disabledDepartureDate}
        onChange={(value) => setDepartureDate(value.$d)}
      />
      {ticketOption === "Round Trip" && (
        <DatePicker
          placeholder="Return"
          suffixIcon={<FaCalendarAlt />}
          style={{
            width: "130px",
          }}
          variant="filled"
          disabledDate={disabledReturnDate}
          onChange={(value) => setReturnDate(value.$d)}
        />
      )}
      <Select
        defaultValue={1}
        style={{
          width: "130px",
        }}
        variant="filled"
        suffixIcon={<FaUser />}
        onChange={(value) => setNumberOfPassenger(value)}
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
          console.log(ticketOption);
          console.log(from);
          console.log(destination);
          console.log(departureDate);
          console.log(returnDate);
          console.log(numberOfPassenger);
        }}
        style={{
          width: "150px",
          color: "white",
          backgroundColor: "#2b5bcc",
          borderRadius: "15px",
          border: "none",
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default BusTicketSearch;
