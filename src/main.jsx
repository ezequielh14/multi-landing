import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatalogApp from './catalog/App';
import Landing1 from './landing1/App';
import Landing2 from './landing2/App';
import Landing3 from './landing3/App';
import './shared/styles/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CatalogApp />} />
        <Route path='/landing1' element={<Landing1 />} />
        <Route path='/landing2' element={<Landing2 />} />
        <Route path='/landing3' element={<Landing3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
