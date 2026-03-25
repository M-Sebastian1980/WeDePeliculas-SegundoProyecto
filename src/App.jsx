import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { LoginPage } from './pages/Login'
import Hero from './components/Hero'
import AdminPage from './pages/Admin'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hero' element={<Hero />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/admin' element={<AdminPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App