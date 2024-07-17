import { Button, Select, DatePicker } from "antd";
import { useEffect, useState } from "react";
import { FaBus, FaCalendarAlt, FaPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { getAllDestinations } from "../../../api/destination";

const TransportTicketSearch = ({ handleFilter, isFlight }) => {
  const [ticketOption, setTicketOption] = useState("One Way");
  const [departurePlace, setDeparturePlace] = useState(null);
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [places, setPlaces] = useState([]);

  const disabledDepartureDate = (current) => {
    return current && current < new Date();
  };

  useEffect(() => {
    getAllPlaces();
  }, []);

  const getAllPlaces = async () => {
    try {
      let placesRes = await getAllDestinations();
      setPlaces(
        placesRes.data.map((res) => {
          return {
            value: res.id,
            label: res.name,
          };
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDepartureChange = (value) => {
    setDeparturePlace(value);
  };
  const filteredArrivalPlaces = departurePlace
    ? places.filter((place) => place.value !== departurePlace)
    : places;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        margin: "0 auto",
        border: "1px solid #cad2de",
        borderRadius: "20px",
        padding: "20px",
        justifyContent: "space-evenly",
        background: "#fff",
      }}
    >
      <Select
        defaultValue="One Way"
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
        ]}
      />
      <Select
        placeholder="Flying From"
        style={{
          width: "130px",
        }}
        variant="filled"
        showSearch={true}
        suffixIcon={isFlight ? <FaPlane /> : <FaBus />}
        onChange={(value) => handleDepartureChange(value)}
        options={places}
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
        options={filteredArrivalPlaces}
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
      <Button
        onClick={() => {
          console.log(ticketOption);
          console.log(departurePlace);
          console.log(destination);

          console.log(departureDate);
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

export default TransportTicketSearch;
