import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    allSubCat:[], 
}

export const subCategoryDetail = createAsyncThunk('allSubCat/subCategoryDetail',()=>{
   return axios
    .get('http://192.168.2.108:9999/api/admin/subcategory')
    .then((response)=>response.data.data)
})

const allSubCategorySlice = createSlice({
    name:'allSubCat',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(subCategoryDetail.fulfilled,(state,action)=>{
            state.allSubCat=action.payload
        })
    }
})

export default allSubCategorySlice.reducer
