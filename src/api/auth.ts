import axios from "../core/";
import {
  ILogin,
  IRegisterDelegate,
  IRegisterStudent,
  TResponse,
} from "./interface/auth";

export const login = async (val: ILogin): Promise<TResponse> => {
  const { data } = await axios.post("/auth/login", val);

  return data;
};

export const registerStudent = async (
  val: IRegisterStudent
): Promise<TResponse> => {
  const { data } = await axios.post("/auth/register/student", val);

  return data;
};

export const registerDelegate = async (
  val: IRegisterDelegate
): Promise<TResponse> => {
  const { data } = await axios.post("/auth/register/delegate", val);

  return data;
};
