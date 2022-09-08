import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./styles/App.css"

// Componentes
import Home from './components/Home'
import Login from './components/Login'
import Product from './components/Product'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

const App = () => {

    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route path="/product/:product" element={<Product/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
     </BrowserRouter>
    )
}

export default App;

