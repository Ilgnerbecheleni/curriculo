import { Route, Routes } from 'react-router-dom'
import Home from './screens/home'
import Dicas from './screens/dados'

function Rotas() {
  return (

 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dicas" element={<Dicas />} />
    </Routes>

  )
}

export default Rotas
