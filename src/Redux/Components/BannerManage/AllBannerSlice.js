import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    banner:[], 
}

export const detailBanner = createAsyncThunk('banner/detailBanner',()=>{
   return axios
    .get('http://192.168.2.106:9999/api/admin/banner')
    .then((response)=>response.data.data)
})

const allBannerSlice = createSlice({
    name:'banner',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(detailBanner.fulfilled,(state,action)=>{
            state.banner=action.payload
        })
    }
})

export default allBannerSlice.reducer
