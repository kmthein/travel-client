import { api } from "../config/axios";

export const getAllHotels = async () => {
  try {
    const response = await api.get("/api/hotels/all");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAvailableHotels = async (payload) => {
  try {
    const response = await api.post("/api/hotels/all", payload);
    return response;
  } catch (error) {
    return error.response;
  }
};
import { api } from "../config/axios";

export const getAllHotels = async () => {
  try {
    const response = await api.get("/api/hotels/all");
    return response;
  } catch (error) {
    return error.response;
  }
};
