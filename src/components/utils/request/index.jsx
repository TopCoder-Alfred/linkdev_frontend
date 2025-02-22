import axios from "axios";

const API_URL = import.meta.env.DEV
  ? "http://localhost:8000"
  : "https://linkdev-backend.onrender.com";
export default axios.create({
  baseURL: `${API_URL}`,
});
