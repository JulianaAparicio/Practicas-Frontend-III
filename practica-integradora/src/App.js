import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/Info';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
