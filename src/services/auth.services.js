import axios from "./axios";
import TokenServices from "./token.services";
import { TOKEN_REFRESH, LOGIN } from "./endpoints";
/**
 * @param {{email : string, password: string}} body
 * @returns {Promise<{}>} user object
 */
const login = async (body) => {
  try {
    const response = await axios.post(LOGIN, JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { access_token, refresh_token, user } = response.data;
    TokenServices.setTokens({ access_token, refresh_token });

    return user;
  } catch (error) {
    console.log("login", error);
    throw error;
  }
};

/**
 * @returns {Promise<{access_token: string, refress_token: string}>} {access_token, refresh_token}
 */
const refreshToken = async () => {
  //   const controller = new AbortController();
  try {
    const refreshToken = TokenServices.getRefreshToken();
    const response = await axios.post(
      TOKEN_REFRESH,
      JSON.stringify(refreshToken)
      //   { signal: controller.signal }
    );
    const { access_token, refresh_token } = response.data;
    TokenServices.setAccessToken(access_token);
    TokenServices.setRefreshToken(refresh_token);

    return { access_token, refresh_token };
  } catch (error) {
    console.log("refresh error");
    throw error;
  }
  //   controller.abort();
};

const AuthServices = {
  login,
  refreshToken,
};

export default AuthServices;
