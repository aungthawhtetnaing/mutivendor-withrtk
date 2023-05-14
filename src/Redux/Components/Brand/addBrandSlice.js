import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const addbrand = createAsyncThunk(
    'add/addbrand',async({data})=>{
    return fetch(`http://192.168.2.106:9999/api/admin/brand/`,{
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


const addBrandSlice = createSlice({
    name:'add',
    initialState:{
        error:false,
        add:""
    },
    extraReducers :{ 
        [addbrand.fulfilled]:(state,action)=>{
            state.add=[action.payload];
        }, 
    }
})

export default addBrandSlice.reducer;