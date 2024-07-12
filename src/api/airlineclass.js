import { api } from "../config/axios";

export const createAirlineClass = async (payload) => {
  try {
    const response = await api.post("/api/flight-class", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
