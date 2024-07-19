import moment from "moment/moment";

export const calculateDaysBetween = (checkIn, checkOut) => {
  const date1 = new Date(checkIn);
  const date2 = new Date(checkOut);

  if (date1 > date2) {
    alert("Check-out date must be after check-in date.");
    return;
  }

  const timeDifference = date2 - date1;
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference;
};

export const formattedDate = (date) => {
  return date.format("YYYY-MM-DD");
};

export const disablePastDates = (current) => {
  // Can not select dates before today
  return current && current < moment().startOf("day");
};
