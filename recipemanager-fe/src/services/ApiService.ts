import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN } from "../config/constants/Cookies";
import CookieUtility from "../utils/CookieUtility";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = CookieUtility.get(ACCESS_TOKEN);
    if (token) {
      // Make sure config and config.headers aren't undefined to not anger the
      // typescript gods.
      if (config && config.headers && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * This should be used to make requests instead of directly with axios.
 *
 * Makes global request configurations possible. E.g. authorization headers are
 * automatically set to the token in localStorage.
 */
const ApiService = {
  async get(url: string, config?: AxiosRequestConfig) {
    try {
      return await axiosInstance
      .get(url, config);
    } catch (reason) {
      return Promise.reject(reason);
    }
  },
  async post(url: string, data: unknown) {
    try {
      return await axiosInstance
      .post(url, data);
    } catch (reason) {
      return Promise.reject(reason);
    }
  },
  async update(url: string, data: unknown) {
    try {
      return await axiosInstance
      .put(url, data);
    } catch (reason) {
      return Promise.reject(reason);
    }
  },
  async delete(url: string, config?: AxiosRequestConfig) {
    try {
      return await axiosInstance
      .delete(url, config);
    } catch (reason) {
      return Promise.reject(reason);
    }
  },
};
export default ApiService;