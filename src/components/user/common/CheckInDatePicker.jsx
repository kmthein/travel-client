import React, { useState } from "react";
import { formattedDate } from "../../../utils/utils";
import { FaCalendarAlt } from "react-icons/fa";
import { DatePicker } from "antd";
import moment from "moment";

const CheckInDatePicker = ({ checkInDateChange }) => {
  const disablePastDates = (current) => {
    // Can not select dates before today
    return current && current < moment().startOf("day");
  };

  return (
    <DatePicker
      placeholder="Check in"
      disabledDate={disablePastDates}
      onChange={checkInDateChange}
      suffixIcon={<FaCalendarAlt />}
    />
  );
};

export default CheckInDatePicker;
