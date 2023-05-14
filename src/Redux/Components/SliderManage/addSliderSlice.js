import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const addSlide = createAsyncThunk(
    'add/addSlide',async({data})=>{
    return fetch(`http://192.168.2.106:9999/api/admin/slider`,{
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


const addSlideSlice = createSlice({
    name:'add',
    initialState:{
        error:false,
        add:""
    },
    extraReducers :{ 
        [addSlide.fulfilled]:(state,action)=>{
            state.add=[action.payload];
        }, 
    }
})

export default addSlideSlice.reducer;