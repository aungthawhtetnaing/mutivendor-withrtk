import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";

export const registerAdmin = createAsyncThunk(
    'register/registerAdmin',async({data})=>{
        // console.log(data);
    return fetch(`http://192.168.2.106:9999/api/admin/register`,{
        method :'POST',
        headers :{
            Accept : "application/json",
            "content-type" : "application/json",
        },
        body:JSON.stringify({
            name:data.name,
            username:data.username,
            email:data.email,
            password:data.password
        })
    })
    .then((result)=>{result.json()
        .then((res)=>{ console.log(res.message);
          if(res.message==='create success'){
            alert('Registration Success.Please Login')
           
          }else{
            alert('Email has already exit')
          }
          console.log(data);
        //   console.log();
                        })
                    })
})

const registerAdminSlice = createSlice({
    name:'register',
    initialState:{
        error:false
    },
    extraReducers :{
        [registerAdmin.fulfilled]:(state,action)=>{ 
            state.register=action.payload;
        },
    }
})

export default registerAdminSlice.reducer;