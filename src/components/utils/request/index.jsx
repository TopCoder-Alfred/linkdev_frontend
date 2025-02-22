import axios from "axios";

const API_URL = import.meta.env.DEV
  ? "http://localhost:8000"
  : "https://backend.linkdevapp.com";
export default axios.create({
  baseURL: `${API_URL}`,
});
