import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    state:[], 
}

export const stateDetail = createAsyncThunk('state/stateDetail',()=>{
   return axios
    .get('http://192.168.2.108:9999/api/admin/shipping/state')
    .then((response)=>(response.data.data))
})

const AllStateSlice = createSlice({
    name:'state',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(stateDetail.fulfilled,(state,action)=>{
            state.state=action.payload
        })
    }
})

export default AllStateSlice.reducer
