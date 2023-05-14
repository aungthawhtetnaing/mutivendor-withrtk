import React from 'react'
import AddBrand from '../Body/Brand/AddBrand'
import AllBrand from '../Body/Brand/AllBrand'
import Category from '../Body/Category'
import Dashboard from '../Body/Dashboard'
import { Routes, Route, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  return (
    <div>
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/dashboard' element={<Dashboard />} />}
      />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/allBrand' element={<AllBrand />} />
      <Route path='/addBrand' element={<AddBrand />} />
      <Route path='/category' element={<Category />} />
      <Route path='/*' element={<Navigate to='/dashboard' />} />
    </Routes>
    </div>
  )
}

export default PrivateRoute