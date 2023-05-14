import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const profileUpdate = createAsyncThunk(
    'update/profileUpdate',async({data,id})=>{
    return fetch(`http://192.168.2.106:9999/api/admin/profile/detail/`+id,{
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


const profileUpdateSlice = createSlice({
    name:'update',
    initialState:{
        error:false,
        name:""
    },
    extraReducers :{ 
        [profileUpdate.fulfilled]:(state,action)=>{
            state.post=[action.payload];
        }, 
    }
})

export default profileUpdateSlice.reducer;