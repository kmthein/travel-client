import { Button, Select, DatePicker } from "antd";
import { useState } from "react";
import { FaCalendarAlt, FaBus } from "react-icons/fa";
import { FaLocationDot, FaUser } from "react-icons/fa6";

const BusAndHotelSearch = () => {
  const [ticketOption, setTicketOption] = useState("Round Trip");
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [numberOfPassenger, setNumberOfPassenger] = useState(1);
  const [numberOfRoom, setNumberOfRoom] = useState(1);

  const disabledDepartureDate = (current) => {
    return current && current < new Date().setHours(0, 0, 0, 0);
  };
  const disabledReturnDate = (current) => {
    return current && current < new Date().setHours(0, 0, 0, 0);
  };

  return (
    <div
      style={{
        width: "1100px",
        margin: "20px auto",
        border: "1px solid #cad2de",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          borderBottom: "1px solid #cad2de",
          padding: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <Select
          defaultValue="Round Trip"
          style={{ width: "130px" }}
          onChange={(value) => setTicketOption(value)}
          options={[
            { value: "One Way", label: "One Way" },
            { value: "Round Trip", label: "Round Trip" },
          ]}
        />
        <Select
          placeholder="Start From"
          style={{ width: "130px" }}
          showSearch
          suffixIcon={<FaBus />}
          onChange={(value) => setFrom(value)}
          options={[
            { value: "Yangon", label: "Yangon" },
            { value: "Mandalay", label: "Mandalay" },
            { value: "Taung Gyi", label: "Taung Gyi" },
            { value: "Naw Pyi Taw", label: "Naw Pyi Taw" },
          ]}
        />
        <Select
          placeholder="Destination"
          style={{ width: "130px" }}
          showSearch
          suffixIcon={<FaLocationDot />}
          onChange={(value) => setDestination(value)}
          options={[
            { value: "Yangon", label: "Yangon" },
            { value: "Mandalay", label: "Mandalay" },
            { value: "Taung Gyi", label: "Taung Gyi" },
            { value: "Naw Pyi Taw", label: "Naw Pyi Taw" },
          ]}
        />
        <DatePicker
          placeholder="Departure"
          suffixIcon={<FaCalendarAlt />}
          style={{ width: "130px" }}
          disabledDate={disabledDepartureDate}
          onChange={(value) => setDepartureDate(value ? value.toDate() : null)}
        />
        {ticketOption === "Round Trip" && (
          <DatePicker
            placeholder="Return"
            suffixIcon={<FaCalendarAlt />}
            style={{ width: "130px" }}
            disabledDate={disabledReturnDate}
            onChange={(value) => setReturnDate(value ? value.toDate() : null)}
          />
        )}
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          padding: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <Select
          defaultValue={1}
          style={{ width: "130px" }}
          suffixIcon={<FaUser />}
          onChange={(value) => setNumberOfPassenger(value)}
          options={[
            { value: 1, label: "1 passenger" },
            { value: 2, label: "2 passengers" },
            { value: 3, label: "3 passengers" },
            { value: 4, label: "4 passengers" },
          ]}
        />
        <Select
          defaultValue={1}
          style={{ width: "130px" }}
          suffixIcon={<FaUser />}
          onChange={(value) => setNumberOfRoom(value)}
          options={[
            { value: 1, label: "1 room" },
            { value: 2, label: "2 rooms" },
            { value: 3, label: "3 rooms" },
            { value: 4, label: "4 rooms" },
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
            console.log(numberOfRoom);
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
    </div>
  );
};

export default BusAndHotelSearch;
