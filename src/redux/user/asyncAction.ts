import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CurrentUser } from "./type";
// Университет
export const fetchUser = createAsyncThunk<CurrentUser, string>(
  "filterData/fetchUserStatus",
  async (id) => {
    const url = `http://localhost:3000/api/universities/`;
    const response = (
      await axios.get(url, {
        params: { id },
      })
    ).data;
    const { data } = response;
    return data;
  }
);
