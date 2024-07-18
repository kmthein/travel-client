import { api } from "../config/axios";

const token = localStorage.getItem("token");
export const saveTravelPlan = async (payload) => {
  try {
    const response = await api.post("/api/travel-plan", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllTravelPlan = async () => {
  try {
    const response = await api.get("/api/travel-plan", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
