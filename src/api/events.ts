import axios from "../core";

export const create = async (val) => {
  const { data } = await axios.post("/events/", val);

  return data;
};
