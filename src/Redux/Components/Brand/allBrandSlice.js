import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    brand:[], 
}

export const allBrandData = createAsyncThunk('brand/allBrandData',()=>{
   return axios
    .get('http://192.168.2.105:9999/api/admin/brand')
    .then((response)=>response.data)
})

const allBrandSlice = createSlice({
    name:'brand',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(allBrandData.fulfilled,(state,action)=>{
            state.brand=action.payload
        })
    }
})

export default allBrandSlice.reducer
