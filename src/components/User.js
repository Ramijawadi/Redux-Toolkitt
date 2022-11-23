import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: " ", lastname: " ", phone: " " } },

  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
        state.value = { name: " ", lastname: " ", phone: " " } ;
      },
  },
});

export const { login ,logout } = userSlice.actions;
export default userSlice.reducer;
