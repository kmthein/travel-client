import { api } from "../config/axios";

export const updateUser = async (id, payload, token) => {
  try {
    const response = await api.put(`/api/user/edit/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTravelPlanByUserId = async (id, token) => {
  try {
    const response = await api.get(`/api/user/${id}/travel-plan`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
