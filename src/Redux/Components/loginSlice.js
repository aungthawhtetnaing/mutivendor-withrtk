import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginAdmin = createAsyncThunk(
  "login/loginAdmin",
  async ({ email, password }) => {
    try {
      const response = await fetch(`http://192.168.2.105:9999/api/admin/login`, {
        method: "POST",
        headers: {
          Accept: "application/ecmascript",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
     
      const token=data.data.auth_token
      if (token !== undefined) {
        localStorage.setItem("token", token);
        localStorage.setItem("login", JSON.stringify(data)); // Store the entire login data
      }
      

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const loginAdminSlice = createSlice({
  name: "login",
  initialState: {
    error: false,
    token: localStorage.getItem("token") || null, // Retrieve token from localStorage
    login: JSON.parse(localStorage.getItem("login")) || [], // Retrieve login data from localStorage
  },
 
  extraReducers: {
    
    [loginAdmin.fulfilled]: (state, action) => {
      state.token = action.payload.data.auth_token;
      state.login = action.payload;
    },
    

  },
});


export default loginAdminSlice.reducer;
