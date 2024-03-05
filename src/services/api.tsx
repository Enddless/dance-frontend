import axios, { AxiosInstance } from "axios";
import { addToken, deleteToken, getToken } from "./token";
import { APIRoute, AppRoute } from "../const/route";

export const API_URL = "http://localhost:8585";
// const baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://example.co.kr/';
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
      config.headers.Authorization = `Bearer ${token.token}`;
    }

    return config;
  });

  // Перехватчик для обработки ответов
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const currentToken = getToken().token;
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        !originalRequest._retry &&
        currentToken !== ""
      ) {
        await api
          .post(APIRoute.UpdateToken)
          .then((response) => {
            const token = response.data.token;
            originalRequest.headers.Authorization = `Bearer ${token}`;
            addToken({ token });
            return api(originalRequest);
          })
          .catch((error) => {
            if (error.response.status === 500) {
              deleteToken();
              window.location.href = `${AppRoute.Root}`
            }
          });

      }
      return Promise.reject(error);
    }
  );

  return api;
};
