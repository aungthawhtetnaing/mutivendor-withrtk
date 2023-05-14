import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const addDivision = createAsyncThunk(
    'add/addDivision',async({data})=>{
    return fetch(`http://192.168.2.106:9999/api/admin/shipping/division`,{
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


const addDivisionSlice = createSlice({
    name:'add',
    initialState:{
        error:false,
        add:""
    },
    extraReducers :{ 
        [addDivision.fulfilled]:(state,action)=>{
            state.add=[action.payload];
        }, 
    }
})

export default addDivisionSlice.reducer;