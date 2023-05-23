import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editSlider = createAsyncThunk(
    'edit/editSlider',async({data,id})=>{
    return fetch(`http://192.168.2.105:9999/api/admin/slider/`+id,{
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


const editSliderSlice = createSlice({
    name:'edit',
    initialState:{
        error:false,
        edit:""
    },
    extraReducers :{ 
        [editSlider.fulfilled]:(state,action)=>{
            state.edit=[action.payload];
        }, 
    }
})

export default editSliderSlice.reducer;