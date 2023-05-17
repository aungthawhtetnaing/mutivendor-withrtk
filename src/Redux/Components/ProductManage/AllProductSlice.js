import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    product:[], 
}

export const productDetail = createAsyncThunk('product/productDetail',()=>{
   return axios
    .get('http://192.168.2.108:9999/api/admin/product')
    .then((response)=>response.data.data)
})

const AllProductSlice = createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(productDetail.fulfilled,(state,action)=>{
            state.product=action.payload
        })
    }
})

export default AllProductSlice.reducer;
