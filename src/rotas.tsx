import { Route, Routes } from 'react-router-dom'
import Home from './screens/home'
import Dicas from './screens/dicas'

function Rotas() {
  return (

 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dicas" element={<Dicas />} />
    </Routes>

  )
}

export default Rotas
