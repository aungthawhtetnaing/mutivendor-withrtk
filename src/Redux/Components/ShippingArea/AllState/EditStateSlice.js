import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editState = createAsyncThunk(
    'edit/editState',async({data,id})=>{
    return fetch(`http://192.168.2.105:9999/api/admin/shipping/state/`+id,{
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


const editStateSlice = createSlice({
    name:'edit',
    initialState:{
        error:false,
        edit:""
    },
    extraReducers :{ 
        [editState.fulfilled]:(state,action)=>{
            state.edit=[action.payload];
        }, 
    }
})

export default editStateSlice.reducer;