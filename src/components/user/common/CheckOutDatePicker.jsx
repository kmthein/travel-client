import React, { useState } from "react";
import { formattedDate } from "../../../utils/utils";
import { FaCalendarAlt } from "react-icons/fa";
import { DatePicker } from "antd";
import moment from "moment";

const CheckOutDatePicker = ({ checkOutDateChange, checkInDate }) => {
  const disableCurrentAndPastDates = (current) => {
    // Can not select current or past dates
    return current && current <= moment(checkInDate).endOf("day");
  };

  return (
    <DatePicker
      placeholder="Check Out"
      disabledDate={disableCurrentAndPastDates}
      onChange={checkOutDateChange}
      suffixIcon={<FaCalendarAlt />}
    />
  );
};

export default CheckOutDatePicker;
