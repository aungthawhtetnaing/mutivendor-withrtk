import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editDivision = createAsyncThunk(
    'edit/editDivision',async({data,id})=>{
    return fetch(`http://192.168.2.108:9999/api/admin/shipping/division/`+id,{
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


const editDivisionSlice = createSlice({
    name:'edit',
    initialState:{
        error:false,
        edit:""
    },
    extraReducers :{ 
        [editDivision.fulfilled]:(state,action)=>{
            state.edit=[action.payload];
        }, 
    }
})

export default editDivisionSlice.reducer;