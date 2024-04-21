import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "./type";

const initialState: CurrentUser = {
  firstname: "",
  lastname: "",
  email: "",
  id: "",
  type: "",
  group_id: 0,
  created_at: "",
  university: {
    id: 0,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<CurrentUser>) {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.id = parseInt(action.payload.id);
      state.type = action.payload.type;
      state.group_id = action.payload.group_id;
      state.created_at = action.payload.created_at;

      if (action.payload.university?.id) {
        state.university.id = action.payload.university.id;
      }
    },
  },
  extraReducers(builder) {},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
