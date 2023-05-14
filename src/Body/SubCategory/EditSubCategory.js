import styled from '@emotion/styled';
import { Avatar, FormControl, Grid, InputLabel, NativeSelect, Paper, Stack, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'



import { Box, Button, TextField } from '@mui/material'
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DivisionDetail } from '../../Redux/Components/ShippingArea/AllDivision/AllDivisionSlice';
import { DistrictDetail } from '../../Redux/Components/ShippingArea/AllDistrict/AllDistrictSlice';
import { editDistrict } from '../../Redux/Components/ShippingArea/AllDistrict/EditDistrictSlice';
import { subCategoryDetail } from '../../Redux/Components/SubCategory/allSubCategorySlice';
import { categoryDetail } from '../../Redux/Components/Category/allCategorySlice';
import { editSubCategory } from '../../Redux/Components/SubCategory/editSubCategorySlice';

const EditSubCategory = () => {
  
  const [name,setName] = useState('');
  const [districtName,setDistrictName] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [divisionId, setDivisionid] = useState('');
  const {id} = useParams()

  
  const allCategory=useSelector(state=>state.allCategory.allCat)

  console.log('all Category',allCategory);

  useEffect(()=>{
      dispatch(categoryDetail())
  },[])


  

  const allsubcategory=useSelector(state=>state.allSubCategory.allSubCat)
  console.log("subCategory detal",allsubcategory);
  
  useEffect(()=>{
      dispatch(subCategoryDetail())
  },[])


const District = allsubcategory?.find(Dist => {
  return Dist.id == id;
});



console.log("District id id",District);







  console.log(id);
  function getUsers() {
       
    setDistrictName(District?.subcategory_name)
    // setName(District?.division)
    // setDivisionid(District?.division_id)

}
// console.log(name);
const put='put'
const handleSubmit =(e) =>{
   e.preventDefault()
    // console.log(e);
    const data ={ 
    category_id:selectedDivision==""?District?.category_id:selectedDivision,
      subcategory_name:districtName,
       _method:put 
     };
    dispatch(editSubCategory({data,id}));
   console.log(data);
};


useEffect(()=>{
  getUsers();
},[allsubcategory])


    const dispatch=useDispatch()
    const handleChange = (e) => {
      setSelectedDivision(e.target.value);
    };
    console.log("selected value",selectedDivision);
    
  return (
    <div>
      <Grid sx={{marginBottom:'10px'}}>
      <Grid item xs={12}>
            <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Edit District</Typography>
        </Grid>
        <Grid item xs={5}>
      
        <form onSubmit={handleSubmit} >
        <Box 
        display="flex"  
        flexDirection={"column"} 
        
        width="800px"
        height="350px"
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
           

<Grid container spacing={2} sx={{margin: '10px'}}>
  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"20px" }}>Division Name</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
  <Box>
  <FormControl fullWidth>
    <InputLabel variant="contained" htmlFor="uncontrolled-native">
      
    </InputLabel>
    <NativeSelect
  defaultValue={District?.category_id}
  inputProps={{
        name,
        id: 'uncontrolled-native',
      }}
      onChange={handleChange} 
    >
      {allCategory.map((divi) => (
        <option key={divi.id} value={divi.id}>
          {divi.category_name}
        </option>
      ))}
    </NativeSelect>
  </FormControl>
</Box>

  </Grid>


  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"20px" }}>District Name</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
    <TextField
      name="name"
      value={districtName}
      onChange={(e) => setDistrictName(e.target.value)}
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

export default EditSubCategory