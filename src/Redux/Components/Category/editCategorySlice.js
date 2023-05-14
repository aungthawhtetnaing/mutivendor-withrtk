import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editCategory = createAsyncThunk(
    'edit/editCategory',async({data,id})=>{
    return fetch(`http://192.168.2.106:9999/api/admin/category/`+id,{
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


const editCategorySlice = createSlice({
    name:'edit',
    initialState:{
        error:false,
        edit:""
    },
    extraReducers :{ 
        [editCategory.fulfilled]:(state,action)=>{
            state.edit=[action.payload];
        }, 
    }
})

export default editCategorySlice.reducer;