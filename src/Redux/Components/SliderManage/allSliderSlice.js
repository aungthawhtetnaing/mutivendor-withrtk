import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    slide:[], 
}

export const slideDetail = createAsyncThunk('slide/slideDetail',()=>{
   return axios
    .get('http://192.168.2.105:9999/api/admin/slider')
    .then((response)=>response.data)
})

const allSlideSlice = createSlice({
    name:'slide',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(slideDetail.fulfilled,(state,action)=>{
            state.slide=action.payload
        })
    }
})

export default allSlideSlice.reducer
