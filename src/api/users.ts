import axios from "../core/";

export const get = async (id: number) => {
  const { data } = await axios.get(`/users/${id}`);
  
  return data;
};
