import axios from "axios";
import TokenServices from "./token.services";
import AuthServices from "./auth.services";

const BASE_URL = "https://coolowo.com";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const authAxios = axios.create({
  baseURL: BASE_URL,
});

authAxios.interceptors.request.use(
  (config) => {
    const token = TokenServices.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;
    const unauthorized = error?.response?.status === 401;
    const retried = prevRequest?._retry;
    if (unauthorized && !retried) {
      prevRequest._retry = true;
      const response = await AuthServices.refreshToken();
      const { access_token, refresh_token } = response;
      TokenServices.setAccessToken(access_token);
      TokenServices.setRefreshToken(refresh_token);
      prevRequest.headers.Authorization = `Bearer ${access_token}`;
      return authAxios(prevRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
