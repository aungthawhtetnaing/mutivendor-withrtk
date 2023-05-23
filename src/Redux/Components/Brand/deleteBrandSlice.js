import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"



export const deleBrand = createAsyncThunk('brand/allBrandData',({id})=>{
   return  fetch(`http://192.168.2.105:9999/api/admin/brand/${id}`,{
    method:'DELETE'

}).then((result)=>{
    result.json().then((resp)=>{
    console.log(resp);
   
    // const list = todoUser.filter((todo) => todo.id != resp?.data?.id)
    // setTodoUser(list);
    })
})

})

