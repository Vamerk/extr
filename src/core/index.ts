import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

instance.interceptors.request.use(
  async (request) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (error.response.status === 401 && accessToken && refreshToken) {
      try {
        const { accessToken: newAccessToken } = (
          await instance.post("auth/refresh", {
            refreshToken,
          })
        ).data;

        localStorage.setItem("accessToken", newAccessToken);

        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance.request(error.config);
      } catch {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
