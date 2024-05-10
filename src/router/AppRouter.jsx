import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home"
import About from "../pages/About"
import Products from "../pages/Products";
import Notfound from "../pages/Notfound"
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
      <>
      <Navbar/>
    <Routes>
      <Route path="/" element={ <Login/>}/>
      <Route path="/dashboard" element={<PrivateRouter/>}>
        <Route path="/dashboard/home" element={ <Home/>}/>
        <Route path="about" element={ <About/>}/>
        <Route path="products" element={ <Products/>}/>
      </Route>
      <Route path="*" element={ <Notfound/>}/>
    </Routes>
      </>

    

  )
}

export default AppRouter