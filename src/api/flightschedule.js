import { api } from "../config/axios";

export const createFlightSchedule = async (payload) => {
  try {
    const response = await api.post("/api/flight-schedule", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllFlightSchedule = async () => {
  try {
    const response = await api.get("/api/flight-schedule");
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getAllAvailableFlight = async () => {
  try {
    const res = await api.get("/api/flight-schedule/available-flight");
    return res;
  } catch (err) {
    return err.response;
  }
};

export const getFlightScheduleById = async (id) => {
  try {
    const response = await api.get(`/api/flight-schedule/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateFlightSchedule = async (id, payload) => {
  try {
    const response = await api.put(`/api/flight-schedule/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getUserFlightSchedule = async (payload) => {
  try {
    const response = await api.post(`/api/flight-schedule/findFlight`, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};
