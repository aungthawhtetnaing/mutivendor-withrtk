
import { Avatar, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Box, Button, TextField } from '@mui/material'
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { addDivision } from '../../../Redux/Components/ShippingArea/AllDivision/AddDivisionSlice';



const AddDivision = () => {

  const [name,setName] = useState('');
  const dispatch=useDispatch()
const handleSubmit =(e) =>{
   e.preventDefault()
    // console.log(e);
    const data ={ 
    division_name:name,
     };
    dispatch(addDivision({data}));
   console.log(data);
  
};

  return (
    <div>
      <Grid sx={{marginBottom:'10px'}}>
      <Grid item xs={12}>
            <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Add Division</Typography>
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
      placeholder="Division Name" 
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
               Add
            </Button> 
            </span>
        </Box>
        </form>
        </Grid>
    </Grid>
    </div>
  )
}

export default AddDivision