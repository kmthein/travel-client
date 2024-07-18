import { api } from "../config/axios";

export const createBusClass = async (payload) => {
  try {
    const response = await api.post("/api/bus-class", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllBusClass = async () => {
  try {
    const response = await api.get("/api/bus-class");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBusClassById = async (id) => {
  try {
    const response = await api.get(`/api/bus-class/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateBusClass = async (id, payload) => {
  try {
    const response = await api.put(`/api/bus-class/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getAllBusClassBybus = async (busId) => {
  try {
    const response = await api.get(`/api/bus-class/${busId}/class`);
    return response;
  } catch (error) {
    return error.response;
  }
};
