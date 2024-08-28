import React from 'react'
import Cabinet from './pages/cabinet'
import Product from "./pages/product"
import Blace from "./pages/balace"
import Settings from "./pages/settings"
import Details from "./pages/details"
import {  Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
       <Route path='/' element={<Cabinet/>} />
       <Route path='product'element={<Product/>} />
       <Route path='blace'element={<Blace/>} />
       <Route path='settings'element={<Settings/>} />
       <Route path='details'element={<Details/>} />
      </Routes>
    </>
  )
}

export default App