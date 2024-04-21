import axios from "../core/";

export const get = async () => {
  const { data } = await axios.get("/cities/");

  return data.data.cities;
};
