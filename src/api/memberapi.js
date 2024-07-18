import { api } from "../config/axios";

const token = localStorage.getItem("token");

export const getAllNormalUser = async () => {
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
