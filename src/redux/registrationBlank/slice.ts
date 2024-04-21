import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegistrationBlank } from "./type";

const initialState: RegistrationBlank = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

const registrationBlankSlice = createSlice({
  name: "registrationBlank",
  initialState,
  reducers: {
    changeBlank(state, action: PayloadAction<RegistrationBlank>) {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordRepeat = action.payload.passwordRepeat;
    },
  },
});

export const { changeBlank } = registrationBlankSlice.actions;

export default registrationBlankSlice.reducer;
