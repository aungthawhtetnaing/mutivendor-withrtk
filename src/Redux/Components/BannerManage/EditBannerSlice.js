import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editBanner = createAsyncThunk(
    'edit/editBanner',async({data,id})=>{
    return fetch(`http://192.168.2.106:9999/api/admin/banner/`+id,{
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


const editBannerSlice = createSlice({
    name:'edit',
    initialState:{
        error:false,
        edit:""
    },
    extraReducers :{ 
        [editBanner.fulfilled]:(state,action)=>{
            state.edit=[action.payload];
        }, 
    }
})

export default editBannerSlice.reducer;