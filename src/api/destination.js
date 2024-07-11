import { api } from "../config/axios";

export const getAllDestinations = async () => {
  try {
    const response = await api.get("/api/destination");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getDestinationById = async ({ id }) => {
  try {
    const response = await api.get(`/api/destination/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const createDestination = async (payload) => {
  try {
    const response = await api.post("/api/destination", payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteDestination = async ({ id }) => {
  try {
    const response = await api.delete(`/api/destination/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
