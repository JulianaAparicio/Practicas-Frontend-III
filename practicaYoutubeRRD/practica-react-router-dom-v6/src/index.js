import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/Home';
import Users from './routes/Users';
import About from './routes/About';
import User from './routes/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/users' element={<Users/>}>
        <Route index element={<div>Select user</div>}/>
        <Route path=':userId' element={<User/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Navigate replace to="/" />}/>
    </Route>
  </Routes>
  </BrowserRouter>
  );