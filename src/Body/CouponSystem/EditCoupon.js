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
import { editSlider } from '../../Redux/Components/SliderManage/editSliderSlice';
import { editBanner } from '../../Redux/Components/BannerManage/EditBannerSlice';
import { detailBanner } from '../../Redux/Components/BannerManage/AllBannerSlice';
import { couponDetail } from '../../Redux/Components/Coupon/AllCouponSlice';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { editCoupon } from '../../Redux/Components/Coupon/EditCouponSlice';






const Editcoupon = () => {
  const [img,setImg] = useState(null)

  const [name,setName] = useState('');
  const [shortName,setShortName] = useState('');
  const [photo,setPhoto] = useState();
  const [photoBase64, setPhotoBase64] = useState();
  const [selectedDate, setSelectedDate] = useState(null);


  const {id} = useParams()

  console.log(id);

  const Coupon=useSelector(state=>state.allCoupon.coupon)
  console.log("Coupon",Coupon);
  
  useEffect(()=>{
      dispatch(couponDetail())
  },[])


const DetailCoupon = Coupon?.find(ban => {
  return ban.id == id;
});

console.log("Banner id",DetailCoupon);
  // const brandDetail=useSelector(state=>state.profile.detail)
  // console.log('admin Detail????',brandDetail);
  // const navigate=useNavigate()
  // useEffect(()=>{
  //   getUsers()
  // },[adminDetail])
  // console.log(name);

  // const imgPath='http://'+img
 

  function getUsers() {
       
    setName(DetailCoupon?.coupon_name)
    setShortName(DetailCoupon?.coupon_discount)
    // setPhotoBase64(Banner?.banner_image)

}
const put='put'
const handleSubmit =(e) =>{
   e.preventDefault()
    // console.log(e);
    const data ={ 
   coupon_name:name,
   coupon_discount:shortName,
   coupon_validity: formattedDate,
       _method:put 
     };
    dispatch(editCoupon({data,id}));
   console.log(data);
  //  navigate('/path/to/redirect')
};



const handleDateChange = (event) => {
  setSelectedDate(event.target.value);
};

const dateObj = new Date(selectedDate);
const formattedDate = dateObj.toLocaleDateString('en-US');
console.log('Date??',formattedDate);
useEffect(()=>{
  getUsers();
  // setImg(adminDetail?.photo)
  // dispatch(profileUpdate())
},[Coupon])


// console.log(adminDetail?.photo);


    const dispatch=useDispatch()
 
    // useEffect(()=>{
    //     dispatch(profileDetail({id}))
    // },[id])

    
  return (
    <div>
      <Grid sx={{marginBottom:'10px'}}>
      <Grid item xs={12}>
            <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Edit Coupon</Typography>
        </Grid>
        <Grid item xs={5}>
      
        <form onSubmit={handleSubmit} >
        <Box 
        display="flex"  
        flexDirection={"column"} 
        
        width="800px"
        height="600px"
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
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"20px" }}>Coupon Name</Typography>
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
      placeholder="Coupon Name"
      
    />
  </Grid>




  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"20px" }}>Discount</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
    <TextField
      name="name"
      value={shortName}
      onChange={(e) => setShortName(e.target.value)}
      required
      type={'number'}
      sx={{ width: '100%' }}
      variant="outlined"
      placeholder="Coupon Url"
      
    />
  </Grid>

  

  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)',marginTop:"40px" }}>Banner photo</Typography>
    </Stack>
  </Grid>
  <Grid  item xs={10}>
  <label htmlFor="date-picker" ></label>
      <input
        type="date"
        id="date-picker"
        name="date-picker"
        value={selectedDate}
        onChange={handleDateChange}
        style={{ width: '500px', height: '50px',fontSize: '16px' }}
        dateFormat="MM/dd/yyyy"
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

export default Editcoupon