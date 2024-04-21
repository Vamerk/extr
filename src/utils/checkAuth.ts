import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import * as Api from "../api";
import axios from "../core";
import { setUser } from "../redux/user/slice";

type DecodedToken = {
  exp: number;
  iat: number;
  userID: number;
  userType: string;
};

export const checkAuth = async (redirect = false) => {
  const dispatch = useDispatch();
  const access_token = localStorage.getItem("access_token");

  if (redirect) {
    if (!access_token) {
      return (window.location.href = "/auth/register/student");
    }

    axios.defaults.headers.Authorization = "Bearer " + access_token;

    try {
      const decodedToken: DecodedToken = jwtDecode(access_token);

      const { data } = await Api.users.get(decodedToken.userID);

      if (data === null) {
        return (window.location.href = "/auth/register/student");
      }

      return dispatch(setUser(data));
    } catch (error) {
      return (window.location.href = "/auth/register/student");
    }
  }

  if (access_token) {
    axios.defaults.headers.Authorization = "Bearer " + access_token;

    try {
      const decodedToken: DecodedToken = jwtDecode(access_token);

      const { data } = await Api.users.get(decodedToken.userID);

      if (data !== null) {
        return dispatch(setUser(data));
      }
    } catch (error) {}
  }
};
