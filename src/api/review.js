import { api } from "../config/axios";

const token = localStorage.getItem("token");
export const createReview = async (payload) => {
  try {
    const response = await api.post("/api/review", payload, {
      headers: {
        Authorization: `Beaer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
