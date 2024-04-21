import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterData from "./filterData/slice";
import registrationBlankSlice from "./registrationBlank/slice";
import userSlice from "./user/slice";

const store = configureStore({
  reducer: {
    registrationBlank: registrationBlankSlice,
    filterData,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
