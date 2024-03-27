// import { useState } from 'react'

import Shop from './pages/Shop';
import { Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AddProduct from './pages/admin/addProduct';
import EditProduct from './pages/admin/editProduct';
// import Checkout from './pages/Checkout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin/products' element={<AddProduct />} />
        <Route path='/admin/:id/edit' element={<EditProduct />} />
        {/* <Route path='/checkout' element={<Checkout />} /> */}
        {/* <Route path='/admin' element={<ProductsEdit />} /> */}
      </Routes>
    </>
  );
}

export default App
