import { api } from "../config/axios";

export const createBusSchedule = async (payload) => {
  try {
    const response = await api.post("/api/bus-schedule", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllBusSchedule = async () => {
  try {
    const response = await api.get("/api/bus-schedule");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBusScheduleById = async (id) => {
  try {
    const response = await api.get(`/api/bus-schedule/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateBusSchedule = async (id, payload) => {
  try {
    const response = await api.put(`/api/bus-schedule/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
