import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Componets/Header';
import Home from './Pages/Home';
import Product from './Pages/Product';

import Verify from './Pages/Verify';
import MyOrders from './Pages/MyOrders';
import { useState } from 'react';
import LoginPopup from './Componets/LoginPopup';
import Cart from './Pages/Cart';
import Order from './Pages/Order';

function App() {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      <BrowserRouter>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <Header setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
