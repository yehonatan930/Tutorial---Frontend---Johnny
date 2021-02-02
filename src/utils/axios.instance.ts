import axios, { AxiosRequestConfig } from "axios";

// When developing, points to localhost.
let baseURL = true ? "http://localhost:5216/" : "/backend";

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};

const AxiosInstance = axios.create(axiosConfig);

export default AxiosInstance;
