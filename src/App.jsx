import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/details/:id" element={<ProductDetail/>}/>
      </Routes>
  )
}

export default App
