import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/home'
import Dados from './screens/dados'

function Rotas() {
  return (

 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dados" element={<Dados />} />
    </Routes>

  )
}

export default Rotas
