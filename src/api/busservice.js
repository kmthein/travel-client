import { api } from "../config/axios";

export const createBusService = async (payload) => {
  try {
    const response = await api.post("/api/bus-services", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllBusServices = async () => {
  try {
    const response = await api.get("/api/bus-services");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBusById = async (id) => {
  try {
    const response = await api.get(`/api/bus-services/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateBusService = async (id, payload) => {
  console.log(id);
  try {
    const response = await api.put(`/api/bus-services/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
