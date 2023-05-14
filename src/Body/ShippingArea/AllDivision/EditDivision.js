import styled from '@emotion/styled';
import { Avatar, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'



import { Box, Button, TextField } from '@mui/material'


import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { editDivision } from '../../../Redux/Components/ShippingArea/AllDivision/EditDivisionSlice';
import { DivisionDetail } from '../../../Redux/Components/ShippingArea/AllDivision/AllDivisionSlice';
// import { editBrand } from '../../Redux/Components/Brand/editBrandSlice';


const EditDivision = () => {
  const [img,setImg] = useState(null)

  const [name,setName] = useState('');
  const [photo,setPhoto] = useState();
  const [photoBase64, setPhotoBase64] = useState();

  const {id} = useParams()

  console.log(id);

const AllDivision=useSelector(state=>state.allDivision.allDiv)
console.log("Division",AllDivision);

useEffect(()=>{
    dispatch(DivisionDetail())
},[])


const Division = AllDivision?.find(div => {
  return div.id == id;
});

console.log("Brand id",Division);

  // const brandDetail=useSelector(state=>state.profile.detail)
  // console.log('admin Detail????',brandDetail);
  // const navigate=useNavigate()
  // useEffect(()=>{
  //   getUsers()
  // },[adminDetail])
  // console.log(name);

  // const imgPath='http://'+img
 

  function getUsers() {
    setName(Division?.division_name)
}
const put='put'
const handleSubmit =(e) =>{
   e.preventDefault()
    // console.log(e);
    const data ={ 
    division_name:name,
       _method:put 
     };
    dispatch(editDivision({data,id}));
   console.log(data);
  //  navigate('/path/to/redirect')
};



// console.log('photo??',photoBase64);


useEffect(()=>{
  getUsers();
  // setImg(adminDetail?.photo)
  // dispatch(profileUpdate())
},[AllDivision])


// console.log(adminDetail?.photo);


    const dispatch=useDispatch()
 
    // useEffect(()=>{
    //     dispatch(profileDetail({id}))
    // },[id])

    
  return (
    <div>
      <Grid sx={{marginBottom:'10px'}}>
      <Grid item xs={12}>
            <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Edit Brand</Typography>
        </Grid>
        <Grid item xs={5}>
      
        <form onSubmit={handleSubmit} >
        <Box 
        display="flex"  
        flexDirection={"column"} 
        
        width="800px"
        height="300px"
        alignItems="center"
        lineHeight="100px"
        justifyContent={"center"}
        margin="auto"
        marginTop="50px"
        padding={2}
        borderRadius={3}
        boxShadow={"8px 5px 15px #ccc"}
        sx={{
            ":hover":{
                boxShadow:'10px 10px 20px #ccc'
            },
            
        }}
        >
            {/* <Typography
           
            fontWeight='bold'
            padding={1}
            textAlign="center"
            sx={{verticalAlign:"middle",display:"inline-flex"}}
            ><ManageAccountsSharpIcon sx={{fontSize:50}} /></Typography> */}

<Grid container spacing={2} sx={{margin: '10px'}}>
  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"20px" }}>Division Name</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
    <TextField
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      type={'text'}
      sx={{ width: '100%' }}
      variant="outlined"
      placeholder="Name"
      
    />
  </Grid>

  
  
  

</Grid>



            <span>
           
            &nbsp;  &nbsp;
            <Button
            type='submit'
            endIcon={<PersonOutlineSharpIcon style={{color:"green"}}/>}
               style={{color:'black'}}
               color="inherit"
                sx={{marginTop:3, borderRadius:2,background:'inherit'}} 
                variant='contained'>
               Update
            </Button> 
            </span>
        </Box>
        </form>
        </Grid>
    </Grid>
    </div>
  )
}

export default EditDivision