import { api } from "../config/axios";

export const getAllDestinations = async () => {
  try {
    const response = await api.get("/api/destination");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getDes = async () => {
  try {
    const response = await api.get("/api/destination/all");
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

export const searchDestinationByKeyword = async ({ keyword }) => {
  try {
    const response = await api.get(`/api/destination/search=${keyword}`);
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

export const updateDestination = async ({ id, data }) => {
  try {
    const response = await api.put(`/api/destination/${id}`, data);
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
