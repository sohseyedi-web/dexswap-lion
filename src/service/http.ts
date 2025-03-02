import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_ADDRESS;

const app = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-Key": import.meta.env.VITE_API_KEY,
    "Content-Type": "application/json",
  },
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
  patch: app.patch,
};

export default http;
