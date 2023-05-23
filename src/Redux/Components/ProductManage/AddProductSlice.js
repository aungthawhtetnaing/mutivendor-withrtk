import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const addProduct = createAsyncThunk(
    'add/addProduct',async({data})=>{
    return fetch(`http://192.168.2.105:9999/api/admin/product`,{
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


const addProductSlice = createSlice({
    name:'add',
    initialState:{
        error:false,
        add:""
    },
    extraReducers :{ 
        [addProduct.fulfilled]:(state,action)=>{
            state.add=[action.payload];
        }, 
    }
})

export default addProductSlice.reducer;