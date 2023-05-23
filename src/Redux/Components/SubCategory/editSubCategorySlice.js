import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const editSubCategory = createAsyncThunk(
    'edit/editSubCategory',async({data,id})=>{
    return fetch(`http://192.168.2.105:9999/api/admin/subcategory/`+id,{
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


const editSubCategorySlice = createSlice({
    name:'edit',
    initialState:{
        error:false,
        edit:""
    },
    extraReducers :{ 
        [editSubCategory.fulfilled]:(state,action)=>{
            state.edit=[action.payload];
        }, 
    }
})

export default editSubCategorySlice.reducer;