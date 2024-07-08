import { useState } from "react";
import {
  DatePicker,
  Select,
  Button,
  Input,
  Collapse,
  Checkbox,
  Image,
} from "antd";
import { FaCalendarAlt, FaSearch, FaUser } from "react-icons/fa";
import beachImg from "../../assets/beach_hotel_1.jpg";

function Hotel() {
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

  // works when >= 5.6.0, recommended ✅
  const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

  const items = [
    {
      key: "1",
      label: "Property Type",
      children: (
        <div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Hotel</p>
          </div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Resort</p>
          </div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Guesthouse</p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Rating",
      children: (
        <div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">4 Stars +</p>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Price",
      children: (
        <div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Maximum Price</p>
          </div>
          <div>
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <p className="ml-4 inline-block">Minimum Price</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: "90%", margin: "0 auto", border: "1px solid black" }}>
      <div className="flex justify-between p-10 ">
        <div className="text-2xl font-bold ">
          Travel<span className="text-blue-600">Trax</span>
        </div>
        <nav>
          <ul
            className="flex font-mono text-lg justify-between font-bold "
            style={{ width: "700px" }}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Stays</a>
            </li>
            <li>
              <a href="#">Flights</a>
            </li>
            <li>
              <a href="#">Flight + Hotel</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
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

            borderRadius: "15px",
            border: "none",
          }}
        >
          Search
        </Button>
      </div>
      <div className="flex justify-between m-10">
        <div
          style={{
            width: "20%",
            margin: "0 auto",
          }}
        >
          <h3 className=" m-4 font-bold">Your Filters</h3>
          <Collapse
            items={items}
            expandIconPosition="end"
            ghost
            defaultActiveKey={[1, 2, 3]}
          />
        </div>
        <div>
          <div
            style={{
              width: "70%",
              margin: "10px auto",
              padding: "10px",
              border: "1px solid #cad2de",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "30%",
                padding: "5px",
                margin: "5px",
              }}
            >
              <Image src={beachImg} />
            </div>
            <div
              style={{
                width: "70%",
                backgroundColor: "#2b5bcc",
                padding: "5px",
                margin: "5px",
              }}
            >
              Content
            </div>
          </div>
          <div
            style={{
              width: "70%",
              margin: "10px auto",
              padding: "10px",
              border: "1px solid #cad2de",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "30%",
                padding: "5px",
                margin: "5px",
              }}
            >
              <Image src={beachImg} />
            </div>
            <div
              style={{
                width: "70%",
                backgroundColor: "#2b5bcc",
                padding: "5px",
                margin: "5px",
              }}
            >
              <h3>Content</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
