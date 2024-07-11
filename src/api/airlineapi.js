import { api } from "../config/axios";

export const createAirline = async (payload) => {
  try {
    const response = await api.post("/api/airlines", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllAirline = async () => {
  try {
    const response = await api.get("/api/airlines");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAirlineById = async (id) => {
  try {
    const response = await api.get(`/api/airlines/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateAirline = async (id, payload) => {
  console.log(id);
  try {
    const response = await api.put(`/api/airlines/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
