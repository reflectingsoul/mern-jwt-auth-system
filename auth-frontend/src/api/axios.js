import axios from "axios";

const api = axios.create({
  baseURL: "baseURL: "https://mern-jwt-auth-system.onrender.com/api""
});

export default api;
