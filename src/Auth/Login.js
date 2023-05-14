import React from "react";
import { useState } from "react";
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CottageIcon from '@mui/icons-material/Cottage';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import DirectionsCarSharpIcon from '@mui/icons-material/DirectionsCarSharp';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import { useForm } from 'react-hook-form'
import { EmailOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../Redux/Components/loginSlice";
import { Link } from "react-router-dom";
const Login = ({onLogin}) => {
    const [isSignup,setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
      } = useForm();
    // const navigate=useNavigate()
    const dispatch = useDispatch()
   
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const { token } = useSelector(state => state.login);

    const onSubmit = (data) => {
        console.log(data);
        dispatch(loginAdmin({email: data.email, password: data.password}))
       onLogin(token)
    }

    // const login=useSelector(state=>state.login)
    // console.log(login);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    color={"#3C2441"}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover":{
                            boxShadow:'10px 10px 20px #ccc'
                        }
                    }}
                >
                    <img src='https://www.content.shi.com/SHIcom/ContentAttachmentImages/SharedResources/Microsites/AWS/Aws-081921-aws-marketplace.jpg' height={100}  style={{marginRight:'auto'}}/>
                    <Typography color="primary" paddingBottom={2} style={{ display: 'flex', justifyContent: 'center' ,fontWeight:"bold" }}>
                        <PeopleOutlineSharpIcon color="primary"/>
                        Admin login
                    </Typography>
 
                        <TextField 
                        fullWidth
                        variant='outlined' 
                        placeholder='Email'
                        type="text"
                        InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <EmailOutlined color="primary"/>
                                        </IconButton>
                                    </InputAdornment>
                                    ),
                                    }}
                        className={`form-control ${errors.email && "invalid"}`}
                        {...register("email", { required: "Email is Required" ,
                        pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                        }})}
                        onKeyUp={() => {
                        trigger("email");
                        }}
                        />
                        {errors.email && (
                            <small style={{color:"red",marginRight:"auto"}}>{errors.email.message}</small>
                        )}
                        <br/>
                            
                            
            
                        <TextField 
                            fullWidth
                            variant='outlined' 
                            placeholder='Password'
                            type={showPassword ? 'text' : 'password'} // use the showPassword state to toggle password visibility
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                    <LockOpenIcon color="primary"/>
                                    </IconButton>
                                </InputAdornment>
                                ),
                                endAdornment: ( // add the InputAdornment with the eye icon to toggle password visibility
                                <InputAdornment position="end">
                                    <IconButton
                                    onClick={togglePasswordVisibility}
                                   
                                    aria-label="toggle password visibility"
                                    >
                                    {showPassword ? <Visibility color="primary" sx={{fontSize:"20px",}}/> : <VisibilityOff color="primary"  sx={{fontSize:"20px"}}/>}
                                    </IconButton>
                                </InputAdornment>
                                )
                            }}
                            className={`form-control ${errors.password && "invalid"}`}
                            {...register("password", { 
                                required: "password is Required",
                                pattern: {
                                value: /^(?=.*[A-Za-z])[A-Za-z\d@$!%*#?&]{8,16}$/,
                                message:"Password must contain  a text length between 8 and 16 characters and any letter must be contain at least one number",
                                },
                            })}
                            onKeyUp={() => {
                                trigger("password");
                            }}
                            />

          {errors.password && (
            <small style={{color:"red",marginRight:"auto"}}>{errors.password.message}</small>
          )}
            
            <br/>

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                    startIcon={
                            <LocalGroceryStoreOutlinedIcon />
                    }
                >
                    Log in
                </Button>
                <Typography  fontWeight="bold" padding={3}>
                     Don't have an account?
                    <Button color="primary" component={Link} to="/register"  style={{ fontWeight: 'bold',marginLeft:"10px" }}>
                       Register
                    </Button>
                </Typography>
            </Box>
        </form>
    </div>
)
}

export default Login;