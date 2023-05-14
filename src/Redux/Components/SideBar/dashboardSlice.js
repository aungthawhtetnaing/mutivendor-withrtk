import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    dashboard:[], 
}

export const dashboardAdmin = createAsyncThunk('dashboard/dashboardAdmin',()=>{
   return axios
    .get('http://192.168.2.106:9999/api/admin/dashboard')
    .then((response)=>response.data)
})

const dashboardAdminSlice = createSlice({
    name:'dashboard',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(dashboardAdmin.fulfilled,(state,action)=>{
            state.dashboard=action.payload
        })
    }
})

export default dashboardAdminSlice.reducer
