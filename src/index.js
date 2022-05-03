import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Home from './routes/Home';
import Products from './routes/Products';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
       <Route index element={<Home/>} /> 
       <Route path="products" element={<Products />} />
       </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


