import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {   
    detail:[], 
}

export const profileDetail = createAsyncThunk('detail/profileDetail',async({id})=>{
   return axios
   .get(`http://192.168.2.105:9999/api/admin/detail/${id}`)
   .then((response)=>response.data.data) 
})

const profileDetailSlice= createSlice({
    name:'detail',
    initialState,
    extraReducers:{
        [profileDetail.pending]:(state)=>{
          state.loading = true;
          state.error = '';
        },
        [profileDetail.fulfilled]:(state,action)=>{
          state.loading = false;
          state.detail = action.payload;
        },
        [profileDetail.rejected]:(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        },
      }
})

export default profileDetailSlice.reducer