import axios, { AxiosInstance, AxiosResponse } from "axios";

const api = (token = ""): AxiosInstance => {
  const apiConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  apiConfig.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      console.error(
        "API Error:",
        error.response?.data?.message || error.message
      );
      return Promise.reject(error);
    }
  );

  return apiConfig; // ✅ Return the Axios instance directly
};

export default api;
