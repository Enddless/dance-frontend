import axios, { AxiosInstance } from "axios";
import { deleteToken, getToken } from "./token";
import { updateToken } from "./thunk/auth";

export const API_URL = "http://localhost:8585";
export const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
    responseType: "json",
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        // config.headers["x-token"] = token;
        config.headers.Authorization = `Bearer ${token.token}`;
      }

      return config;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await updateToken();
          const token = getToken();
          originalRequest.headers.Authorization = `Bearer ${token.token}`;
          return api(originalRequest);
        } catch (error) {
          deleteToken();
          window.location.reload();
        }
      }
      return Promise.reject(error);
    }

  );

  return api;
};
