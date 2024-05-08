import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home"
import About from "../pages/About"
import Products from "../pages/Products";
import Notfound from "../pages/Notfound"

const AppRouter = () => {
  return (
    
    
    <Routes>
      <Route path="/" element={ <Login/>}/>
      <Route path="/home" element={ <Home/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/products" element={ <Products/>}/>
      <Route path="*" element={ <Notfound/>}/>
      
    </Routes>
   

    

  )
}

export default AppRouter