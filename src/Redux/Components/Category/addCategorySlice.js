import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const addCategory = createAsyncThunk(
    'add/addCategory',async({data})=>{
    return fetch(`http://192.168.2.106:9999/api/admin/category`,{
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


const addCategorySlice = createSlice({
    name:'add',
    initialState:{
        error:false,
        add:""
    },
    extraReducers :{ 
        [addCategory.fulfilled]:(state,action)=>{
            state.add=[action.payload];
        }, 
    }
})

export default addCategorySlice.reducer;