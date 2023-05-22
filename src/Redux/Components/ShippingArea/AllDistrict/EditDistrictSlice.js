import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editDistrict = createAsyncThunk(
    'edit/editDistrict',async({data,id})=>{
    return fetch(`http://192.168.2.108:9999/api/admin/shipping/district/`+id,{
        method :'POST',
        headers :{
            Accept : "application/json",
            "content-type" : "application/json",
        },
        body:JSON.stringify(data)
    })
    .then((result)=>{result.json()
            .then((res)=>{ console.log(res);
              console.log(id);
              console.log(data);
                            })
                        })
})


const editDistrictSlice = createSlice({
    name:'edit',
    initialState:{
        error:false,
        edit:""
    },
    extraReducers :{ 
        [editDistrict.fulfilled]:(state,action)=>{
            state.edit=[action.payload];
        }, 
    }
})

export default editDistrictSlice.reducer;