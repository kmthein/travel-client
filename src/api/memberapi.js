import { api } from "../config/axios";

export const getAllNormalUser = async (token) => {
  try {
    const response = await api.get("/api/user/normal-user", {
      headers: {
        Authorization: `Bearer ` + token,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
