import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    allDiv:[], 
}

export const DivisionDetail = createAsyncThunk('division/DivisionDetail',()=>{
   return axios
    .get('http://192.168.2.108:9999/api/admin/shipping/division')
    .then((response)=>response.data.data)
})

const allDivisionSlice = createSlice({
    name:'division',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(DivisionDetail.fulfilled,(state,action)=>{
            state.allDiv=action.payload
        })
    }
})

export default allDivisionSlice.reducer
