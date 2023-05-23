import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {  
    addDist:[], 
}

export const DistrictDetail = createAsyncThunk('addDist/DistrictDetail',()=>{
   return axios
    .get('http://192.168.2.105:9999/api/admin/shipping/district')
    .then((response)=>(response.data.data))
})

const allDistrictSlice = createSlice({
    name:'addDist',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(DistrictDetail.fulfilled,(state,action)=>{
            state.addDist=action.payload
        })
    }
})

export default allDistrictSlice.reducer
