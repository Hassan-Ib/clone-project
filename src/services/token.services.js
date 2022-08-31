import { setItem, getItem, removeItem } from "../utils/LocalStorage";

const ACCESS_TOKEN_KEY = "access-token";
const REFRESH_TOKEN_KEY = "refresh-token";

const setAccessToken = (token) => setItem(ACCESS_TOKEN_KEY, token);

const getAccessToken = () => getItem(ACCESS_TOKEN_KEY);

const removeAccessToken = () => removeItem(ACCESS_TOKEN_KEY);

const setRefreshToken = (token) => setItem(REFRESH_TOKEN_KEY, token);

const getRefreshToken = () => getItem(REFRESH_TOKEN_KEY);

const removeRefreshToken = () => removeItem(REFRESH_TOKEN_KEY);

const setTokens = ({ access_token, refresh_token }) => {
  setAccessToken(access_token);
  setRefreshToken(refresh_token);
};
const removeTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};

const TokenServices = {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  removeTokens,
  setTokens,
};

export default TokenServices;
