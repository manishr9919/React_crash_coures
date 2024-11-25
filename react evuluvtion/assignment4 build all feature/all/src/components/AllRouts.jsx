import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pagas/Home'
import Products from '../pagas/Products'
import Login from '../pagas/Login'
import ProductDetail from '../pagas/ProductDetail'
import PrivateRoute from './PrivateRoute'

export default function AllRouts() {
  return (
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/productview/:product_id' element={
    <PrivateRoute>
      <ProductDetail/>
    </PrivateRoute>
   }/>

   <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}
