import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Page2 from './pages/maths.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/page2" element={<Page2 />} /> */}
    </Routes>
  </BrowserRouter>
)