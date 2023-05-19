import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    vendor:[], 
}

export const vendorDetail = createAsyncThunk('vendor/vendorDetail',()=>{
   return axios
    .get('http://192.168.2.108:9999/api/admin/vendor/list')
    .then((response)=>response.data)
})

const AllVendorSlice = createSlice({
    name:'vendor',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(vendorDetail.fulfilled,(state,action)=>{
            state.vendor=action.payload
        })
    }
})

export default AllVendorSlice.reducer;
