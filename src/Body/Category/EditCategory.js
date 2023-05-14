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
import { editBrand } from '../../Redux/Components/Brand/editBrandSlice';
import { editCategory } from '../../Redux/Components/Category/editCategorySlice';
import { categoryDetail } from '../../Redux/Components/Category/allCategorySlice';
const EditCategory = () => {
  const [img,setImg] = useState(null)

  const [name,setName] = useState('');
  const [photo,setPhoto] = useState();
  const [photoBase64, setPhotoBase64] = useState();

  const {id} = useParams()

  console.log(id);

  const allCategory=useSelector(state=>state.allCategory.allCat)
  console.log('all Category',allCategory);
  useEffect(()=>{
    dispatch(categoryDetail())
  },[])

  const category = allCategory?.find(cat => {
    return cat.id == id;
  });

  console.log("Category id",category);

  // const brandDetail=useSelector(state=>state.profile.detail)
  // console.log('admin Detail????',brandDetail);
  // const navigate=useNavigate()
  // useEffect(()=>{
  //   getUsers()
  // },[adminDetail])
  // console.log(name);

  // const imgPath='http://'+img
 

  function getUsers() {
       
    setName(category?.category_name)
    setPhotoBase64(category?.category_image)

}
const put='put'
const handleSubmit =(e) =>{
   e.preventDefault()
    // console.log(e);
    const data ={ 
    category_name:name,
         category_image: photo== undefined? null : photoBase64,
       _method:put 
     };
    dispatch(editCategory({data,id}));
   console.log(data);
  //  navigate('/path/to/redirect')
};


const handlePhotoChange = (e) => {
  const file = e.target.files[0];
  setPhoto(file);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setPhotoBase64(reader.result);
  }
}
// console.log('photo??',photoBase64);


useEffect(()=>{
  getUsers();
  // setImg(adminDetail?.photo)
  // dispatch(profileUpdate())
},[allCategory])


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
            {/* <Typography
           
            fontWeight='bold'
            padding={1}
            textAlign="center"
            sx={{verticalAlign:"middle",display:"inline-flex"}}
            ><ManageAccountsSharpIcon sx={{fontSize:50}} /></Typography> */}

<Grid container spacing={2} sx={{margin: '10px'}}>
  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"20px" }}>Brand Name</Typography>
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

  

  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"40px" }}>Brand photo</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
  <input
      type="file"
      onChange={handlePhotoChange}
      accept="image/jpeg, image/jpg, image/png, image/webp, image/gif"

    />
     <br/>
    <img src={photoBase64||category?.category_image} alt='profile image'  width="100px" height="100px"/>
    {/* ||adminDetail.photo */}
   
    
    {/* {img &&(
        <Box
        sx={{
          height:"25vh",
          width:"100%",
          backgroundImage:`url(http://${img})`,
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat"

      }}
EditCategory
        />
    )} */}
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

export default EditCategory