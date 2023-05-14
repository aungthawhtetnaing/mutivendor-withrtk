import styled from '@emotion/styled';
import { Avatar, FormControl, Grid, InputLabel, NativeSelect, Paper, Stack, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'



import { Box, Button, TextField } from '@mui/material'
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { editCategory } from '../../Redux/Components/Category/editCategorySlice';
import { subCategoryDetail } from '../../Redux/Components/SubCategory/allSubCategorySlice';
import { categoryDetail } from '../../Redux/Components/Category/allCategorySlice';
import { editSubCategory } from '../../Redux/Components/SubCategory/editSubCategorySlice';
import { addSubCategory } from '../../Redux/Components/SubCategory/addSubCategorySlice';
const AddSubCategory = () => {

  const [name,setName] = useState('');
  const [photoBase64, setPhotoBase64] = useState();
  const [selectedDivision, setSelectedDivision] = useState('');
  const {id} = useParams()

  console.log(id);

const allsubcategory=useSelector(state=>state.allSubCategory.allSubCat)
console.log("subCategory detal",allsubcategory);

useEffect(()=>{
    dispatch(subCategoryDetail())
},[])

  const subCategory = allsubcategory?.find(cat => {
    return cat.id == id;
  });

  console.log("Category id",subCategory);

  const allCategory=useSelector(state=>state.allCategory.allCat)

    console.log('all Category',allCategory);

    useEffect(()=>{
      dispatch(categoryDetail())
  },[])

  const Category = allCategory?.find(cat => {
    return cat.id == id;
  });

  console.log("allCategory id",Category);
  

  function getUsers() {
       
    setName(subCategory?.subcategory_name)
    setPhotoBase64(subCategory?.category_image)

}

const handleSubmit =(e) =>{
   e.preventDefault()
    // console.log(e);
    const data ={ 
      subcategory_name:name,
    category_id:selectedDivision==''? allCategory[0].id:selectedDivision,
    
     };
    dispatch(addSubCategory({data}));
   console.log(data);
  //  navigate('/path/to/redirect')
};




useEffect(()=>{
  getUsers();

},[subCategory])


// console.log(adminDetail?.photo);


    const dispatch=useDispatch()
 
    const handleChange = (e) => {
      setSelectedDivision(e.target.value);
    };
    console.log("selected value",selectedDivision);

    
  return (
    <div>
      <Grid sx={{marginBottom:'10px'}}>
      <Grid item xs={12}>
            <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Add SubCategory</Typography>
        </Grid>
        <Grid item xs={5}>
      
        <form onSubmit={handleSubmit} >
        <Box 
        display="flex"  
        flexDirection={"column"} 
        
        width="800px"
        height="500px"
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
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"20px" }}>Category Name</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
  <Box>
  <FormControl fullWidth>
    <InputLabel variant="contained" htmlFor="uncontrolled-native">
      
    </InputLabel>
    <NativeSelect
  //  defaultValue={subCategory?.category_id}
  inputProps={{
        name,
        id: 'uncontrolled-native',
      }}
      onChange={handleChange} 
    >
      {allCategory.map((allcat) => (
        <option key={allcat.id} value={allcat.id}>
          {allcat.category_name}
        </option>
      ))}
    </NativeSelect>
  </FormControl>
</Box>

  </Grid>

  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"20px" }}>SubCategory Name</Typography>
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

export default AddSubCategory