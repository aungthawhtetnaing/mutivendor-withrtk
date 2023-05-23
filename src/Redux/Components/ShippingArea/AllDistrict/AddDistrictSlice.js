import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const addDistrict = createAsyncThunk(
    'add/addDistrict',async({data})=>{
    return fetch(`http://192.168.2.105:9999/api/admin/shipping/district`,{
        method :'POST',
        headers :{
            Accept : "application/json",
            "content-type" : "application/json",
        },
        body:JSON.stringify(data)
    })
    .then((result)=>{result.json()
            .then((res)=>{ console.log(res);
            //   console.log(id);
              console.log(data);
                            })
                        })
})


const addDistrictSlice = createSlice({
    name:'add',
    initialState:{
        error:false,
        add:""
    },
    extraReducers :{ 
        [addDistrict.fulfilled]:(state,action)=>{
            state.add=[action.payload];
        }, 
    }
})

export default addDistrictSlice.reducer;