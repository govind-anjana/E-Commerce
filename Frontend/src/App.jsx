import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Silder from './Component/Silder/Silder'
import Frame1 from './Component/Frame/Frame1'
import Frame2 from './Component/Frame/Frame2'
import Frame3 from './Component/Frame/Frame3'
import Footer from './Component/Footer/Footer';
import ShopFrom from './Component/ShopFrom/ShopFrom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './Component/Sign_Login_Page/LoginPage'
import CardPage from './Component/Card/CardPage'
import SignUpPage from './Component/Sign_Login_Page/SignUpPage'
import Customer from './Component/Card/Customer'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import Scrolling from './Component/Scrolling/Scrolling'
import Profile from './Component/MyProfile/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
     <Header/>
      <Scrolling/>     
      
      <Routes>
      <Route path='/' element={<Silder/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/Sign' element={<SignUpPage/>}/>
      <Route path='/Card' element={<CardPage/>}/>
      <Route path='/customer'element={<Customer/>} />
      <Route path='/Details' element={<ProductDetails/>}/>
      <Route path='/Profile/:id' element={<Profile/>}/>
      </Routes>
       <br/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
