import axios from "axios";

const api = axios.create({
  baseURL: process.env.SPOTIFY_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers.Authorization = token ? "Bearer " + token : "";
  }
  return config;
});

export default api;
