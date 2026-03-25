import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { LoginPage } from './pages/Login'
import Hero from './components/Hero'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hero' element={<Hero />} />
        <Route element={<ProductDetail />} path='/product/:id'/>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<AdminPage/>} path='/admin'/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App