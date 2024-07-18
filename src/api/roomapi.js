import { api } from "../config/axios";

export const createRoom = async (payload) => {
  try {
    const response = await api.post("/api/room", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllRoomByHotelId = async (hotelId) => {
  try {
    const response = await api.get(`/api/hotels/${hotelId}/room`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getRoomById = async (id) => {
  try {
    const response = await api.get(`/api/room/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateRoom = async (id, payload) => {
  try {
    const response = await api.put(`/api/room/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteRoomById = async (id) => {
  try {
    const response = await api.delete(`/api/room/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
