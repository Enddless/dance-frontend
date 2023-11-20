import axios from "axios";

export const API_URL = "http://localhost:8585";

// создаем базовый экземпляр axios
const instance = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    "Accept": "*",
    "Content-Type": "application/json",
  },
});

export default instance;
