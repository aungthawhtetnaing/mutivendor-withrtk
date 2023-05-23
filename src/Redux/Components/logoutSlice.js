import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const logoutAdmin = createAsyncThunk(
  "auth/logoutAdmin",
  async ({ id }) => {
    const response = await fetch(
      `http://192.168.2.105:9999/api/admin/logout`,
      {
        method: "POST",
        headers: {
          Accept: "application/ecmascript",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          admin_id: id,
        }),
      }
    );
    const data = await response.json();
    return data;
  }
);

const logoutAdminSlice = createSlice({
  name: "auth",
  initialState: {
    error: false,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.token = null;
        localStorage.removeItem("token"); // clear token from local storage
        localStorage.removeItem("login"); 
        window.location.href = "/login"; // redirect to login page
      })
      .addCase(logoutAdmin.rejected, (state) => {
        state.error = true;
      });
  },
});

export default logoutAdminSlice.reducer;
