import axios, { AxiosInstance } from "axios";
import { addToken, getToken } from "./token";
import { APIRoute } from "../const/route";

export const API_URL = "http://localhost:8585";
export const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
    responseType: "json",
    withCredentials: true,
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
    },
  });
  // Перехватчик для обработки исходящих запросов
  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      // config.headers["x-token"] = token;
      config.headers.Authorization = `Bearer ${token.token}`;
    }

    return config;
  });

  // Перехватчик для обработки ответов
  api.interceptors.response.use(
    (response) => {
      // Modify the response data here (e.g., parse, transform)

      return response;
    },
    async function (error) {
      // Handle response errors here
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        // const access_token = await refreshToken();

        const access_token = await api.post(
          APIRoute.UpdateToken

          // {
          //   credentials: "include",
          //   withCredentials: true,
          //   Cookie: `session=${Cookies.get("Set-Cookie")}`,
          // }
        );
        const token = access_token.data.token;
        originalRequest.headers.Authorization = `Bearer ${token}`;
        addToken({ token });
        return api(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return api;
};
