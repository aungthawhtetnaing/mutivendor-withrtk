import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editMuti = createAsyncThunk(
    'muti/editMuti',async({data2,id})=>{
    return fetch(`http://192.168.2.105:9999/api/admin/update/product/multiImage/${id}`,{
        method :'POST',
        headers :{
            Accept : "application/json",
            "content-type" : "application/json",
        },
        body:JSON.stringify(data2)
    })
    .then((result)=>{result.json()
            .then((res)=>{ console.log(res);
            //   console.log(id);
              console.log(data2);
                            })
                        })
})


const MutiImgSlice = createSlice({
    name:'muti',
    initialState:{
        error:false,
        thambnail:""
    },
    extraReducers :{ 
        [editMuti.fulfilled]:(state,action)=>{
            state.muti=[action.payload];
        }, 
    }
})

export default MutiImgSlice.reducer;