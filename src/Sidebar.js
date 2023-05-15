// import { ThemeProvider } from "@emotion/react";
// import { createTheme } from "@mui/material";
// import {  Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import React, { useState } from "react";
// import Login from "./Auth/Login";
// import Navbar from "./Header/Navbar";
// import { Dashboard } from "@mui/icons-material";

// import Register from "./Auth/Register";
// import Category from "./Body/Category";
// import Brand from "./Body/Brand";
// import AddBrand from "./Body/Brand/AddBrand";
// import AllBrand from "./Body/Brand/AllBrand";

// const theme = createTheme({
//   palette:{
//     primary:{
//       main:"#B7277B"
//     }
//   },
//   typography:{
//     fontFamily:"Quicksand",
//     fontWeightLight:400,
//     fontWeightRegular:500,
//     fontWeightMedium:600,
//     fontWeightBold:700,
//   }
// });

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));

//   const handleLogin = (token) => {
//     if (token) {
//       localStorage.setItem('token', token);
//       setIsLoggedIn(true);
     
//     }
   
//   }

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   }

//   let loginOrNavbar;

//   if (isLoggedIn) {
//     loginOrNavbar = <Route path="/*" element={<Navigate to="/dashboard" />} />;
//   } else {
//     loginOrNavbar = <Route path="/*" element={<Navigate to="/login" />} />;
//   }
//   return (
//     <div className="App">
//       <ThemeProvider theme={theme}>
        
//           <Routes>
            
//           {loginOrNavbar}
//             {/* <Route path="/" element={isLoggedIn ? <Navigate to="/navbar" /> : <Navigate to="/login" />} /> */}
//             <Route path="/register" element={<Register/>}/>
//             <Route path="/login" element={<Login onLogin={handleLogin} />} />
//             {isLoggedIn && (
//               <>
//                 <Route path="/dashboard" element={<Navbar onLogout={handleLogout} />} >
                  
//                   <Route path="" element={<Dashboard/>}/>
//                   <Route path="allbrand" element={<AllBrand/>}/>
//                   <Route path="addbrand" element={<AddBrand/>}/>
//                   <Route path="category" element={<Category/>}/>

//                   </Route>
//               </>
//             )}
            
            
//           </Routes>
       
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;


import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import {  Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Login from "./Auth/Login";
import Navbar from "./Header/Navbar";
import { Dashboard } from "@mui/icons-material";

import Register from "./Auth/Register";
import Category from "./Body/Category";
import Brand from "./Body/Brand";
import AddBrand from "./Body/Brand/AddBrand";
import AllBrand from "./Body/Brand/AllBrand";
import { useSelector } from "react-redux";
import Profile from "./Profile/Profile";
import EditBrand from "./Body/Brand/EditBrand";
import AllCategory from "./Body/Category/AllCategory";
import AddCategory from "./Body/Category/AddCategory";
import EditCategory from "./Body/Category/EditCategory";
import EditSubCategory from "./Body/SubCategory/EditSubCategory"
import AddSubCategory from "./Body/SubCategory/AddSubCategory"
import AllSubCategory from "./Body/SubCategory/AllSubCategory"
import EditSlider from "./Body/SliderManage/EditSlider";
import AllSlider from "./Body/SliderManage/AllSlider";
import AddSlider from "./Body/SliderManage/AddSlider";
import EditBanner from "./Body/BannerManage/EditBanner";
import AllBanner from "./Body/BannerManage/AllBanner";
import AddBanner from "./Body/BannerManage/AddBanner";
import EditCoupon from "./Body/CouponSystem/EditCoupon";
import AllCoupon from "./Body/CouponSystem/AllCoupon";
import AddCoupon from "./Body/CouponSystem/AddCoupon";
import AllDivision from "./Body/ShippingArea/AllDivision/AllDivision";
import AllDistrict from "./Body/ShippingArea/AllDistrict/AllDistrict";
import AllState from "./Body/ShippingArea/AllState/AllState";
import EditDivision from "./Body/ShippingArea/AllDivision/EditDivision";
import AddDivision from "./Body/ShippingArea/AllDivision/AddDivision";
import EditDistrict from "./Body/ShippingArea/AllDistrict/EditDistrict";
import AddDistrict from "./Body/ShippingArea/AllDistrict/AddDistrict";
import EditState from "./Body/ShippingArea/AllState/EditState";
import AddState from "./Body/ShippingArea/AllState/AddState";
import EditProduct from "./Body/ProductManage/EditProduct";
import AllProduct from "./Body/ProductManage/AllProduct";
import AddProduct from "./Body/ProductManage/AddProduct";


const theme = createTheme({
  palette:{
    primary:{
      main:"#B7277B"
    }
  },
  typography:{
    fontFamily:"Quicksand",
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
});
// const handleLogout = () => {
//   localStorage.clear(); // remove all localStorage items
  
// }
function Sidebar() {
const {token}= useSelector(state=>state.login)
console.log('token??????',{token});
// const[token,setToken]=useState(false)
// const token = useState((localStorage.getItem('token')));
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        
      <div>
      {token ? (
        <div>
          <Routes>
      <Route
        path='/'
        element={<Navigate to='/dashboard' element={<Navbar />} />}
      />
      <Route path='/dashboard' element={<Navbar/>} >
      <Route path="" element={<Dashboard/>}/>

      <Route path="allbrand" element={<AllBrand/>}/>
      <Route path="/dashboard/editbrand/:id" element={<EditBrand />} />
      <Route path="addbrand" element={<AddBrand/>}/>

      {/* <Route path="category" element={<Category/>}/> */}
      <Route path="/dashboard/editcategory/:id" element={<EditCategory />} />
      <Route path="allcategory" element={<AllCategory/>}/>
      <Route path="addcategory" element={<AddCategory/>}/>


      <Route path="/dashboard/editsubcategory/:id" element={<EditSubCategory />} />
      <Route path="allsubcategory" element={<AllSubCategory/>}/>
      <Route path="addsubcategory" element={<AddSubCategory/>}/>


      <Route path="/dashboard/editproduct/:id" element={<EditProduct />} />
      <Route path="allproduct" element={<AllProduct/>}/>
      <Route path="addproduct" element={<AddProduct/>}/>


      <Route path="/dashboard/editslider/:id" element={<EditSlider />} />
      <Route path="allslider" element={<AllSlider/>}/>
      <Route path="addslider" element={<AddSlider/>}/>


      <Route path="/dashboard/editbanner/:id" element={<EditBanner />} />
      <Route path="allbanner" element={<AllBanner/>}/>
      <Route path="addbanner" element={<AddBanner/>}/>


      <Route path="/dashboard/editcoupon/:id" element={<EditCoupon />} />
      <Route path="allcoupon" element={<AllCoupon/>}/>
      <Route path="addcoupon" element={<AddCoupon/>}/>

        {/* shippingArea */}
      <Route path="alldivision" element={<AllDivision />} />
      <Route path="/dashboard/editdivision/:id" element={<EditDivision />} />
      <Route path="/dashboard/adddivision" element={<AddDivision />} />

      <Route path="alldistrict" element={<AllDistrict/>}/>
      <Route path="/dashboard/editdistrict/:id" element={<EditDistrict />} />
      <Route path="/dashboard/adddistrict" element={<AddDistrict />} />

      <Route path="allstate" element={<AllState/>}/>
      <Route path="/dashboard/editstate/:id" element={<EditState />} />
      <Route path="/dashboard/addstate" element={<AddState />} />

      <Route path="profile" element={<Profile/>}/>
      </Route>
     
      <Route path='/*' element={<Navigate to='/dashboard' />} />
    </Routes>
        </div>
      ) : (
        <>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/register" element={<Register/>}/>
            <Route path='/*' element={<Navigate to='/login' />} />
          </Routes>
        </>
      )}

          </div>
       
      </ThemeProvider>
    </div>
  );
}

export default Sidebar;
