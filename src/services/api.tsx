import axios, { AxiosInstance} from "axios";
import { getToken } from "./token";

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

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      // config.headers["x-token"] = token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return api;
};

// создаем базовый экземпляр axios
// const instance = axios.create({
//   baseURL: API_URL,
//   responseType: "json",
//   headers: {
//     Accept: "*",
//     "Content-Type": "application/json",
//   },
// });

// export default instance;
