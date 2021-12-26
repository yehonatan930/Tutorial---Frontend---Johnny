import axios, { AxiosRequestConfig } from "axios";

// When developing, points to localhost.
let baseURL = true ? process.env.REACT_APP_BASE_URL: "/backend";

const axiosConfig: AxiosRequestConfig = {
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": [
      process.env.REACT_APP_BASE_URL,
      process.env.REACT_APP_REDIRECT_URI,
    ].join(','),
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
  withCredentials:true
};

const AxiosInstance = axios.create(axiosConfig);

export default AxiosInstance;
