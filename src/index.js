import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Home from './routes/Home';
import Games from './routes/Games';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
       <Route index element={<Home/>} /> 
       <Route path="games" element={<Games />} />
       </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


