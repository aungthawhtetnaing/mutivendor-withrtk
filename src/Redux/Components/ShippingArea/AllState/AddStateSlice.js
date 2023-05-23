import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const addState = createAsyncThunk(
    'add/addState',async({data})=>{
    return fetch(`http://192.168.2.105:9999/api/admin/shipping/state`,{
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


const addStateSlice = createSlice({
    name:'add',
    initialState:{
        error:false,
        add:""
    },
    extraReducers :{ 
        [addState.fulfilled]:(state,action)=>{
            state.add=[action.payload];
        }, 
    }
})

export default addStateSlice.reducer;