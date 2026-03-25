import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { LoginPage } from './pages/Login'
import Hero from './components/Hero'
import Detalle from './pages/Detalles-peliculas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/detalle/:id' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App