import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { FaCity } from "react-icons/fa";
import { searchDestinationByKeyword } from "../../../api/destination";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Destinationbox = () => {
  const [keyword, setKeyword] = useState("");

  const searchSubmit = async () => {
    
    // if (keyword.length > 0 || keyword != "") {
    //   const res = await searchDestinationByKeyword({ keyword });
    //   setKeyword("");
    // } else {
    //   toast.error("Please input a keyword !");
    // }
  }

  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="flex items-center gap-2">
        <FaCity className="text-black" size={32} />
        <Input placeholder="Search by destination" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="p-3" />
        <Button type="primary" size="large" onClick={searchSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Destinationbox;
