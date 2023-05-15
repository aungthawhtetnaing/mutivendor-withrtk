import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


import AccountCircle from '@mui/icons-material/AccountCircle';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Search from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAdmin } from '../Redux/Components/logoutSlice';
import {BrowserRouter,  Routes, Route, Navigate } from 'react-router-dom';
import Category from '../Body/Category';
import Dashboard from '../Body/Dashboard';
import Brand from '../Body/Brand';
import { useState } from 'react';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AllBrand from '../Body/Brand/AllBrand';
import AddBrand from '../Body/Brand/AddBrand';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { loginAdmin } from '../Redux/Components/loginSlice';
import Profile from '../Profile/Profile';
import { useEffect } from 'react';
import { profileDetail } from '../Redux/Components/Profile/profileInfoSlice';
import EditBrand from '../Body/Brand/EditBrand';
import AllCategory from '../Body/Category/AllCategory';
import AddCategory from '../Body/Category/AddCategory';
import EditCategory from '../Body/Category/EditCategory';
import AllSubCategory from '../Body/SubCategory/AllSubCategory';
import EditSubCategory from '../Body/SubCategory/EditSubCategory';
import AddSubCategory from '../Body/SubCategory/AddSubCategory';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import AllSlider from '../Body/SliderManage/AllSlider';
import AddSlider from '../Body/SliderManage/AddSlider';
import EditSlider from '../Body/SliderManage/EditSlider';
import DoorSlidingTwoToneIcon from '@mui/icons-material/DoorSlidingTwoTone';
import AllBanner from '../Body/BannerManage/AllBanner';
import AddBanner from '../Body/BannerManage/AddBanner';
import EditBanner from '../Body/BannerManage/EditBanner';
import ViewCarouselSharpIcon from '@mui/icons-material/ViewCarouselSharp';
import AllCoupon from '../Body/CouponSystem/AllCoupon';
import EditCoupon from '../Body/CouponSystem/EditCoupon';
import AddCoupon from '../Body/CouponSystem/AddCoupon';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AllDivision from '../Body/ShippingArea/AllDivision/AllDivision';
import AllDistrict from '../Body/ShippingArea/AllDistrict/AllDistrict';
import AllState from '../Body/ShippingArea/AllState/AllState';
import EditDivision from '../Body/ShippingArea/AllDivision/EditDivision';
import AddDivision from '../Body/ShippingArea/AllDivision/AddDivision';
import EditDistrict from '../Body/ShippingArea/AllDistrict/EditDistrict';
import AddDistrict from '../Body/ShippingArea/AllDistrict/AddDistrict';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EditState from '../Body/ShippingArea/AllState/EditState';
import AddState from '../Body/ShippingArea/AllState/AddState';
import AllProduct from '../Body/ProductManage/AllProduct';
import EditProduct from '../Body/ProductManage/EditProduct';
import AddProduct from '../Body/ProductManage/AddProduct';


const drawerWidth = 240;
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar= styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// Drawessr NNNN



export default function Navbar( ) {

  const [activeItem, setActiveItem] = useState('dashboard');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleItemClick = (item) => {
    setActiveItem(item);
  }
  // Define state to hold the token
  const [token, setToken] = React.useState('');
  console.log(token);
  // Get the token from localStorage when the component mounts
  React.useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    dispatch(logoutAdmin({id}))
    
    navigate('/login');
    // localStorage.removeItem("token");
  
   
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to='profile' style={{textDecoration:'none',color:"black"}}>
          <Button variant='outline' color='black' selected={activeItem === 'profile'} onClick={() => handleItemClick('profile')}>
          Profile
          </Button>
        </Link>
      </MenuItem>
      <MenuItem><Button onClick={handleLogout}variant='outline' color='black'>Logout</Button></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
 
  
  const [activeItem1, setActiveItem1] = useState('');

  const handleItemClick1 = (itemName) => {
    setActiveItem1(itemName);
  };

  const [showButtons, setShowButtons] = useState(false);

  const handleListItemClick = () => {
    setShowButtons(!showButtons);
  };



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const id=useSelector(state=>state.login.login.data.id)
  console.log('ID Admin',id);

  const adminDetail=useSelector(state=>state.profile.detail)
  console.log('admin photo????',adminDetail.photo);
  
  useEffect(()=>{
    dispatch(profileDetail({id}))
  },[])
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
         {/* Navbar main */}


         <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img src={adminDetail.photo} style={{borderRadius:'100%'}} width="50px" height="50px"/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>


        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to='' style={{textDecoration:'none',color:"black"}}>
          {['DashBoard'].map((text, index) => (
            <ListItem  key={text} disablePadding>
              <ListItemButton 
                // style={{ backgroundColor: activeItem === 'dashboard' ? '#B7277B' : 'white' }}
              selected={activeItem === 'dashboard'} onClick={() => handleItemClick('dashboard')} >
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary={text} />

              </ListItemButton>
            </ListItem>
          ))}

         </Link>
         <Divider />


           {/* //Brand???????????????????????????? */}
         <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeItem === 'Brand'}
              onClick={() => {
                handleItemClick('Brand');
                handleListItemClick();
              }}
            >
              <ListItemIcon>
                <AutoAwesomeMotionIcon/>
              </ListItemIcon>
              <ListItemText primary='Brand' />
              <ListItemIcon>
              {showButtons ? ( <KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
       
      </List>

      {showButtons && (
        <div>
          {/* <Button variant="contained">Button 1</Button>
          <Button variant="contained">Button 2</Button> */}
           <Link to="allbrand" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'allbrand'} onClick={() => handleItemClick('allbrand')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All Brand' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="addbrand" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'addbrand'} onClick={() => handleItemClick('addbrand')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='Add Brand' />
              </ListItemButton>
            </ListItem>
          </Link>
            
        </div>
      )}




      

      <Divider />





      {/* Category??????????????? */}


      <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeItem === 'Category'}
              onClick={() => {
                handleItemClick('Category');
                handleListItemClick();
              }}
            >
              <ListItemIcon>
                <CategoryIcon/>
              </ListItemIcon>
              <ListItemText primary='Category' />
              <ListItemIcon>
              {showButtons ? ( <KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
       
      </List>

      {showButtons && (
        <div>
          {/* <Button variant="contained">Button 1</Button>
          <Button variant="contained">Button 2</Button> */}
           <Link to="allcategory" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'allcategory'} onClick={() => handleItemClick('allcategory')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All Category' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="addcategory" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'addcategory'} onClick={() => handleItemClick('addcategory')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='Add Category' />
              </ListItemButton>
            </ListItem>
          </Link>
            
        </div>
      )}




      

      <Divider />



      {/* SubCategory */}



          <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeItem === 'SubCategory'}
              onClick={() => {
                handleItemClick('SubCategory');
                handleListItemClick();
              }}
            >
              <ListItemIcon>
                <BallotTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary='SubCategory' />
              <ListItemIcon>
              {showButtons ? ( <KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
       
      </List>

      {showButtons && (
        <div>
          {/* <Button variant="contained">Button 1</Button>
          <Button variant="contained">Button 2</Button> */}
           <Link to="allsubcategory" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'allsubcategory'} onClick={() => handleItemClick('allsubcategory')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All SubCategory' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="addSubcategory" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'addSubcategory'} onClick={() => handleItemClick('addSubcategory')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='Add SubCategory' />
              </ListItemButton>
            </ListItem>
          </Link>
            
        </div>
      )}

      <Divider />


     {/* ProfuctManage */}



     <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeItem === 'product'}
              onClick={() => {
                handleItemClick('product');
                handleListItemClick();
              }}
            >
              <ListItemIcon>
                <BallotTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary='Product Manage' />
              <ListItemIcon>
              {showButtons ? ( <KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
       
      </List>

      {showButtons && (
        <div>
          {/* <Button variant="contained">Button 1</Button>
          <Button variant="contained">Button 2</Button> */}
           <Link to="allproduct" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'allproduct'} onClick={() => handleItemClick('allproduct')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All Product ' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="addproduct" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'addproduct'} onClick={() => handleItemClick('addproduct')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='Add Product ' />
              </ListItemButton>
            </ListItem>
          </Link>
            
        </div>
      )}

      <Divider />




      {/* SliderManage */}

      <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeItem === 'SliderManage'}
              onClick={() => {
                handleItemClick('SliderManage');
                handleListItemClick();
              }}
            >
              <ListItemIcon>
                <DoorSlidingTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary='Slider' />
              <ListItemIcon>
              {showButtons ? ( <KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
       
      </List>

      {showButtons && (
        <div>
           <Link to="allslider" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'allslider'} onClick={() => handleItemClick('allslider')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All Slider' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="addslider" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'addslider'} onClick={() => handleItemClick('addslider')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='Add Slider' />
              </ListItemButton>
            </ListItem>
          </Link>
            
        </div>
      )}

      <Divider />


        {/* BannerManage */}



        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeItem === 'BannerManage'}
              onClick={() => {
                handleItemClick('BannerManage');
                handleListItemClick();
              }}
            >
              <ListItemIcon>
                <ViewCarouselSharpIcon/>
              </ListItemIcon>
              <ListItemText primary='Banner' />
              <ListItemIcon>
              {showButtons ? ( <KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
       
      </List>

      {showButtons && (
        <div>
           <Link to="allbanner" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'allbanner'} onClick={() => handleItemClick('allbanner')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All Banner' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="addbanner" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'addbanner'} onClick={() => handleItemClick('addbanner')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='Add Banner' />
              </ListItemButton>
            </ListItem>
          </Link>
            
        </div>
      )}

      <Divider />





       {/* CoupnSystem */}



       <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeItem === 'couponsystem'}
              onClick={() => {
                handleItemClick('couponsystem');
                handleListItemClick();
              }}
            >
              <ListItemIcon>
                <LocalActivityIcon/>
              </ListItemIcon>
              <ListItemText primary='Coupon' />
              <ListItemIcon>
              {showButtons ? ( <KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
       
      </List>

      {showButtons && (
        <div>
           <Link to="allcoupon" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'allcoupon'} onClick={() => handleItemClick('allcoupon')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All Coupon' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="addcoupon" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'addcoupon'} onClick={() => handleItemClick('addcoupon')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='Add Coupon' />
              </ListItemButton>
            </ListItem>
          </Link>
            
        </div>
      )}

      <Divider />



      {/* ShippingArea */}



      <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={activeItem === 'shippingarea'}
              onClick={() => {
                handleItemClick('shippingarea');
                handleListItemClick();
              }}
            >
              <ListItemIcon>
                <LocationCityIcon/>
              </ListItemIcon>
              <ListItemText primary='Shipping Area' />
              <ListItemIcon>
              {showButtons ? ( <KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
       
      </List>

      {showButtons && (
        <div>
           <Link to="alldivision" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'alldivision'} onClick={() => handleItemClick('alldivision')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All Division' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="alldistrict" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'alldistrict'} onClick={() => handleItemClick('alldistrict')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All District' />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="allstate" style={{textDecoration:'none',color:"black"}} >
            <ListItem  disablePadding>
              <ListItemButton  selected={activeItem === 'allstate'} onClick={() => handleItemClick('allstate')}>
              <ListItemIcon>
                 <KeyboardDoubleArrowRightIcon/>
                </ListItemIcon>
              <ListItemText primary='All State' />
              </ListItemButton>
            </ListItem>
          </Link>
            
        </div>
      )}

      <Divider />
          
      


            
        </List>


      </Drawer>
      <Main open={open}>
        <DrawerHeader />
            <Routes>

            <Route path="" element={<Dashboard />} />
            {/* Brand */}
            <Route path="allbrand" element={<AllBrand/>}/>
                <Route path="editbrand/:id" element={<EditBrand/>}/>
            <Route path="editbrand" element={<EditBrand/>}/>
            {/* Category */}
            <Route path="allcategory" element={<AllCategory/>}/>
               <Route path="editcategory/:id" element={<EditCategory/>}/>
            <Route path="addcategory" element={<AddCategory/>}/>
            {/* SubCategory */}
            <Route path="allsubcategory" element={<AllSubCategory/>}/>
               <Route path="editsubcategory/:id" element={<EditSubCategory/>}/>
            <Route path="addsubcategory" element={<AddSubCategory/>}/>

            {/* SubCategory */}
            <Route path="allproduct" element={<AllProduct/>}/>
               <Route path="editproduct/:id" element={<EditProduct/>}/>
            <Route path="addproduct" element={<AddProduct/>}/>

            {/* SliderManage */}
            <Route path="allslider" element={<AllSlider/>}/>
               <Route path="editslider/:id" element={<EditSlider/>}/>
            <Route path="addslider" element={<AddSlider/>}/>
            {/* bannerManage */}
            <Route path="allbanner" element={<AllBanner/>}/>
               <Route path="editbanner/:id" element={<EditBanner/>}/>
            <Route path="addbanner" element={<AddBanner/>}/>
            {/* bannerManage */}
            <Route path="allcoupon" element={<AllCoupon/>}/>
               <Route path="editcoupon/:id" element={<EditCoupon/>}/>
            <Route path="addcoupon" element={<AddCoupon/>}/>


            {/* ShippingArea */}

            {/* AllDivision */}
            <Route path="alldivision" element={<AllDivision/>}/>
            <Route path="editdivision/:id" element={<EditDivision/>}/>
            <Route path="adddivision" element={<AddDivision/>}/>
            {/* alldistrict */}
            <Route path="alldistrict" element={<AllDistrict/>}/>
            <Route path="editdistrict/:id" element={<EditDistrict/>}/>
            <Route path="adddistrict" element={<AddDistrict/>}/>
            {/* allstate */}
            <Route path="allstate" element={<AllState/>}/>
            <Route path="editstate/:id" element={<EditState/>}/>
            <Route path="addstate" element={<AddState/>}/>
          

             <Route path="addbrand" element={<AddBrand />} />
             <Route path="profile" element={<Profile />} />
             
            </Routes>
      </Main>
    </Box>
  );
}
