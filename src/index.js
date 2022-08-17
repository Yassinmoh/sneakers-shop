import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shop from './pages/Shop/Shop.jsx'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' exact element={<App />}/>
      <Route path='/shop' element={<Shop />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);


