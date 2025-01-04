import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Products from './page/Products'
// import AddProduct from './page/AddProduct'
import PrivatePage from './components/PrivatePage'
import EditProduct from './page/EditProduct'
import Login from './page/LOgin'
import AddProduct from './page/AddProducts'

const AlllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={
            <PrivatePage>
                <Products />
            </PrivatePage>
            }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/addproduct' element={<AddProduct />}></Route> 
        <Route path='/editproduct/:id' element={<EditProduct />}></Route> 

    </Routes>
  )
}

export default AlllRoutes
