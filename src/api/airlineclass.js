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

export const getAllAirlineClass = async () => {
  try {
    const response = await api.get("/api/flight-class");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAirlineClassById = async (id) => {
  try {
    const response = await api.get(`/api/flight-class/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateAirlineClass = async (id, payload) => {
  try {
    const response = await api.put(`/api/flight-class/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllFlightClassByAirline = async (airlineId) => {
  try {
    const response = await api.get(`/api/flight-class/${airlineId}/class`);
    return response;
  } catch (error) {
    return error.response;
  }
};
