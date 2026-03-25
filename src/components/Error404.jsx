import React from 'react';
import { Link } from 'react-router-dom';
import './error404.css';
import errorImage from '../assets/img/ERROR404PELIS.jpg'; 

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Corte!</h1>
      <div className="error-content">
        <img 
          src={errorImage} 
          alt="Error 404 - Escena no encontrada" 
          className="error-img" 
        />
        <p className="error-text">Esta escena ha sido eliminada del montaje final.</p>
      </div>      
      <Link to="/" className="btn-home">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;