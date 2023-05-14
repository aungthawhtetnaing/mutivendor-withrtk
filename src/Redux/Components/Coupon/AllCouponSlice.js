import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    coupon:[], 
}

export const couponDetail = createAsyncThunk('coupon/couponDetail',()=>{
   return axios
    .get('http://192.168.2.106:9999/api/admin/coupon')
    .then((response)=>response.data.data)
})

const AllCouponSlice = createSlice({
    name:'coupon',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(couponDetail.fulfilled,(state,action)=>{
            state.coupon=action.payload
        })
    }
})

export default AllCouponSlice.reducer
