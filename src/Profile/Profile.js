import styled from '@emotion/styled';
import { Avatar, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { profileDetail } from '../Redux/Components/Profile/profileInfoSlice';
import PublicIcon from '@mui/icons-material/Public';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from 'react-router-dom';


import { Box, Button, TextField } from '@mui/material'
import Person2Icon from '@mui/icons-material/Person2';
import AttachEmailSharpIcon from '@mui/icons-material/AttachEmailSharp';
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';


import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { useState } from 'react';
import { Email } from '@mui/icons-material';
import { profileUpdate } from '../Redux/Components/Profile/profileUpdateSlice';
import { width } from '@mui/system';
const Profile = () => {
  const [img,setImg] = useState(null)

  const [name,setName] = useState('');
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [photo,setPhoto] = useState();
  const [photoBase64, setPhotoBase64] = useState();

  const adminDetail=useSelector(state=>state.profile.detail)
  console.log('admin Detail????',adminDetail);
  const navigate=useNavigate()
  useEffect(()=>{
    getUsers()
  },[adminDetail])
  console.log(name);

  // const imgPath='http://'+img
 

  function getUsers() {
       
    setName(adminDetail?.name)
    setFullName(adminDetail?.username)
    setEmail(adminDetail?.email)
    setPhone(adminDetail?.phone)
    setAddress(adminDetail?.address)
    setPhotoBase64(adminDetail?.photoBase64)

}
const put='put'
const handleSubmit =(e) =>{
   e.preventDefault()
    // console.log(e);
    const data ={ 
        name,
        // fullName,
        email,
        phone,
        address,
        photo: photo== undefined? null : photoBase64,
      _method:put };
    dispatch(profileUpdate({data,id}));
   
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
  setImg(adminDetail?.photo)
  dispatch(profileUpdate())
},[])


console.log(adminDetail?.photo);



   

    const id=useSelector(state=>state.login.login.data.id)
    console.log('ID Admin',id);

    const dispatch=useDispatch()
 
    useEffect(()=>{
        dispatch(profileDetail({id}))
    },[id])

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
  return (
    <div>
      <Grid sx={{marginBottom:'10px'}}>
        <Grid item xs={12}>
            <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Admin Profile</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Stack direction="row" spacing={2}>
                <Avatar 
                  src={photoBase64||adminDetail.photo}
                  sx={{ width: 80, height: 80,margin:"auto" }}
                   />
            </Stack>
            <Grid item xs={12} sx={{margin:"auto",marginBottom:"30px"}}>
            <Typography sx={{fontWeight:"bold"}}>{name}</Typography>
            <Typography>{email}</Typography>
            <Typography>{address}</Typography>
            </Grid>
            <hr/>
            <Grid item xs={12} >
              <Stack direction="row" alignItems="center" sx={{margin:"10px"}}>
              <PublicIcon sx={{marginLeft:"20px"}}/>
                <Typography>Website</Typography>
                <Typography sx={{marginLeft:"90px"}}>
                  <a href='https://codervent.com' style={{textDecoration:"none", color:"black"}}>
                    https://codervent.com
                  </a>
                </Typography>
              </Stack>
            </Grid>
            <hr/>
            <Grid item xs={12} >
            <Stack direction="row" alignItems="center" sx={{margin:"10px"}}>
              <FacebookIcon sx={{marginLeft:"20px"}}/>
                <Typography>Facebook</Typography>
                <Typography sx={{marginLeft:"90px"}}>codervent</Typography>
              </Stack>
            </Grid>
          </Item>
        </Grid>

        
        <Grid item xs={8}>
        <form onSubmit={handleSubmit} >
        <Box 
        display="flex"  
        flexDirection={"column"} 
        
        
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
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
     
      <Typography sx={{ color: 'rgba(2,0,36,1)' }}><br/>admin Name</Typography>
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
      
      <Typography sx={{ color: 'rgba(2,0,36,1)' }}><br/>Full Name</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
    <TextField
      name="fullName"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      required
      type={'text'}
      sx={{ width: '100%' }}
      variant="outlined"
      placeholder="Full Name"
      disabled
    />
  </Grid>

  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)' }}><br/>Email address</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
    <TextField
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      type={'email'}
      sx={{ width: '100%' }}
      variant="outlined"
      placeholder="Email"
    />
  </Grid>

  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
      
      <Typography sx={{ color: 'rgba(2,0,36,1)' }}><br/>Phone Number</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
    <TextField
      name="phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
      type={'number'}
      sx={{ width: '100%' }}
      variant="outlined"
      placeholder="Phone"
    />
  </Grid>

  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
    
      <Typography sx={{ color: 'rgba(2,0,36,1)' }}><br/> Address</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
    <TextField
      name="address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      required
      type={'text'}
      sx={{ width: '100%' }}
      variant="outlined"
      placeholder="Address"
    />
  </Grid>

  <Grid item xs={2}>
    <Stack direction="row" alignItems="center">
     
      <Typography sx={{ color: 'rgba(2,0,36,1)' }}> photo</Typography>
    </Stack>
  </Grid>
  <Grid item xs={10}>
  <input
      type="file"
      onChange={handlePhotoChange}
      accept="image/jpeg, image/jpg, image/png, image/webp, image/gif"

    />
     <br/>
    <img src={photoBase64||adminDetail.photo} alt='profile image' style={{borderRadius:"50%"}} width="100px" height="100px"/>
    
   
    
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

export default Profile