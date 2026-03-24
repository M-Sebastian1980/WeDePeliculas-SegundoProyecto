import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { LoginPage } from './pages/Login'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hero' element={<Hero />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App