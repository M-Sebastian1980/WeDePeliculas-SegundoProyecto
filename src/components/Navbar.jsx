import { useState } from 'react';
import logo from '../assets/img/LOGO.jpg';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const navigate = useNavigate();
  
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMensaje, setErrorMensaje] = useState(''); 
  
  const [busqueda, setBusqueda] = useState('');
  const [verPassword, setVerPassword] = useState(false);

  const userAuth = JSON.parse(localStorage.getItem("auth"));

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/");
    window.location.reload();
  }

  function handleLogin(e) {
    e.preventDefault(); 
    setErrorMensaje(''); 
    
    // USUARIOS DE NOSOTROS
    const usuariosValidos = [
      { email: 'octaviofernandez@10.com', password: 'octavio', nombre: 'Octavio Fernandez' },
      { email: 'santibrizuela@11.com', password: 'santiago', nombre: 'Santiago Brizuela' },
      { email: 'aldanaruiz@12.com', password: 'aldana', nombre: 'Aldana Ruiz' },
      { email: 'mauroseu@13.com', password: 'mauro', nombre: 'Mauro Seu' },
      { email: 'alejojose@14.com', password: 'alejo', nombre: 'Alejo Jose' }
    ];

    const usuarioEncontrado = usuariosValidos.find(
      (user) => user.email === email && user.password === password
    );

    if (usuarioEncontrado) {
      localStorage.setItem("auth", JSON.stringify({ email: email, nombre: usuarioEncontrado.nombre }));
      window.location.reload(); 
    } else {
      setErrorMensaje("Email o contraseña incorrectos.");
    }
  }

  function handleBuscar(e) {
    e.preventDefault();
    if (busqueda.trim() !== '') {
      console.log("Buscando película:", busqueda);
      alert(`Función de búsqueda lista para conectar. Buscaste: ${busqueda}`);
      setBusqueda('');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img 
            src={logo} 
            alt="Logo de RollZine" 
            className="d-inline-block align-top logo-navbar"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContenido"
          aria-controls="navbarContenido"
          aria-expanded="false"
          aria-label="Alternar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContenido">
          
          <form className="d-flex w-100 mx-lg-auto my-3 my-lg-0 navbar-search-form justify-content-center" style={{ maxWidth: '500px' }} onSubmit={handleBuscar}>
            <input
              className="form-control form-control-sm me-2 search-input"
              type="search"
              placeholder="Buscar película..."
              aria-label="Buscar película" 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className="btn btn-outline-light btn-sm search-btn" type="submit" aria-label="Botón de buscar">
              🔍
            </button>
          </form>

          <ul className="navbar-nav ms-auto align-items-center text-center gap-2 gap-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link text-white fw-bold active-link" : "nav-link text-white"} 
                to="/"
              >
                Inicio
              </NavLink>
            </li>

            {!userAuth ? (
              <li className="nav-item position-relative mt-2 mt-lg-0">
                <span 
                  className="nav-link text-white" 
                  style={{ cursor: 'pointer' }}
                >
                  Administrar
                </span>
              </li>
            ) : (          
              <li className="nav-item d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0">
                <span className="text-white small">
                  Hola, {userAuth.nombre}
                </span>
                <button 
                  className="btn btn-outline-danger btn-sm" 
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;