import { api } from "../config/axios";

const token = localStorage.getItem("token");
export const saveAccommodation = async (payload) => {
  try {
    const response = await api.post("/api/accommodation", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
