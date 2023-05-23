import { configureStore } from "@reduxjs/toolkit";
import registerAdminReducer from "./Components/registerSlice"
import loginAdminReducer from "./Components/loginSlice"
import logoutAdminReducer from "./Components/logoutSlice"
import profileDetailReducer from "./Components/Profile/profileInfoSlice"
import profileUpdateReducer from './Components/Profile/profileUpdateSlice'
import dashboardAdminReducer from './Components/SideBar/dashboardSlice'
import allBrandReducer from "./Components/Brand/allBrandSlice";
import editBrandReducer from "./Components/Brand/editBrandSlice";
import addBrandReducer from "./Components/Brand/addBrandSlice";
import allCategoryReducer from "./Components/Category/allCategorySlice";
import allSubCategoryReducer from "./Components/SubCategory/allSubCategorySlice";
import allSliderReducer from "./Components/SliderManage/allSliderSlice";
import AllBannerReducer from "./Components/BannerManage/AllBannerSlice";
import AllDivisionReducer from "./Components/ShippingArea/AllDivision/AllDivisionSlice";
import AllDistrictReducer from "./Components/ShippingArea/AllDistrict/AllDistrictSlice";
import AllStateReducer from "./Components/ShippingArea/AllState/AllStateSlice";
import AllCouponReducer from "./Components/Coupon/AllCouponSlice";
import AllProductReducer from "./Components/ProductManage/AllProductSlice";
import AllVendorReducer from "./Components/ProductManage/AllVendorSlice";
import allThambnailReducer from "./Components/ProductManage/ThambnailSlice";
import MutiImgReducer from "./Components/ProductManage/MutiImgSlice";
const store =configureStore({
    reducer:{
        register:registerAdminReducer,
        login:loginAdminReducer,
        logout:logoutAdminReducer,
        profile:profileDetailReducer,
        profileUpdate:profileUpdateReducer,
        dashboard:dashboardAdminReducer,
        allBrand:allBrandReducer,
        editBrand:editBrandReducer,
        addBrand:addBrandReducer,
        allCategory:allCategoryReducer,
        allSubCategory:allSubCategoryReducer,
        allSlide:allSliderReducer,
        allBanner:AllBannerReducer,
        allDivision:AllDivisionReducer,
        allDistrict:AllDistrictReducer,
        allState:AllStateReducer,
        allCoupon:AllCouponReducer,
        allProduct:AllProductReducer,
        allVendor:AllVendorReducer,
        allThambnail:allThambnailReducer,
        mutiDetail:MutiImgReducer,
    }
})

export default store