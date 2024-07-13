import { api } from "../config/axios";

export const createHotel = async (payload) => {
  try {
    const response = await api.post("/api/hotels", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllHotel = async () => {
  try {
    const response = await api.get("/api/hotels");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getHotelById = async (id) => {
  try {
    const response = await api.get(`/api/hotels/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateHotel = async (id, payload) => {
  try {
    const response = await api.put(`/api/hotels/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteHotelById = async (id) => {
  try {
    const response = await api.delete(`/api/hotels/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
