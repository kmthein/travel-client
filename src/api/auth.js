import { api } from "../config/axios";

export const register = async (payload) => {
  try {
    const response = await api.post(`/api/register`, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const login = async (payload) => {
    try {
      const response = await api.post(`/api/login`, payload);
      return response;
    } catch (error) {
      return error.response;
    }
  };
  