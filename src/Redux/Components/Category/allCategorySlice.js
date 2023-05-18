import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    allCat:[], 
}

export const categoryDetail = createAsyncThunk('category/categoryDetail',()=>{
   return axios
    .get('http://192.168.2.108:9999/api/admin/category')
    .then((response)=>response.data.data)
})

const allCategorySlice = createSlice({
    name:'category',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(categoryDetail.fulfilled,(state,action)=>{
            state.allCat=action.payload
        })
    }
})

export default allCategorySlice.reducer
