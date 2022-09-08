import axios, { AxiosRequestConfig } from "axios";

// When developing, points to localhost.
const baseURL = process.env.REACT_APP_BASE_URL || "/backend";
const clientURL = process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000";

const axiosConfig: AxiosRequestConfig = {
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": clientURL,
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods",
  },
};

const AxiosInstance = axios.create(axiosConfig);

export default AxiosInstance;
