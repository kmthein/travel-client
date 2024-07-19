import { api } from "../config/axios";

const token = localStorage.getItem("token");

export const getTravelsByMonth = async (payload) => {
  try {
    const response = await api.post("/api/travel-plan/travel-month", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getMemberByMonth = async (payload) => {
  try {
    const response = await api.post("/api/travel-plan/member-month", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getIncomeByMonth = async (payload) => {
  try {
    const response = await api.post("/api/travel-plan/income-month", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTopHotelsCount = async () => {
  try {
    const response = await api.get("/api/travel-plan/top-hotels", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTravelByPercentage = async () => {
  try {
    const response = await api.get("/api/travel-plan/percentage", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

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
