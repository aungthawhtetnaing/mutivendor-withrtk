import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editThambnail = createAsyncThunk(
    'thambnail/editThambnail',async({data1,id})=>{
    return fetch(`http://192.168.2.105:9999/api/admin/update/product/thambnail/${id}`,{
        method :'POST',
        headers :{
            Accept : "application/json",
            "content-type" : "application/json",
        },
        body:JSON.stringify(data1)
    })
    .then((result)=>{result.json()
            .then((res)=>{ console.log(res);
            //   console.log(id);
              console.log(data1);
                            })
                        })
})


const allThambnailSlice = createSlice({
    name:'thambnail',
    initialState:{
        error:false,
        thambnail:""
    },
    extraReducers :{ 
        [editThambnail.fulfilled]:(state,action)=>{
            state.thambnail=[action.payload];
        }, 
    }
})

export default allThambnailSlice.reducer;