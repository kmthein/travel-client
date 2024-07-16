import { api } from "../config/axios";

export const getAllHotels = async () => {
  try {
    const response = await api.get("/api/hotels/all");
    return response;
  } catch (error) {
    return error.response;
  }
};
