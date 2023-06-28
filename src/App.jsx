import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Formulario from './componentes/Formulario.jsx';
import Registro from './componentes/FormularioRegistro.jsx';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "./logo1.png";
import logoImage2 from "./logo2rosa.png";



function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="/">
            <img
              src={logoImage}
              alt="Logo"
              width="150"
              height="150"
              className="logo"
            />
          </a>
        </nav>

        <div className="container main-container custom-bg rounded">
          <div className="row">
            <div className="col-sm-6">
              <div className="explore-container p-4">
                <h2>Explora personas que quieran intercambiar conocimiento</h2>
                <button className="btn btn-dark">Explorar</button>
              </div>
            </div>
            <div className="col-sm-6">
              {!mostrarFormulario && (
                <Registro />
              )}
              {mostrarFormulario && <Registro />}
            </div>
          </div>
        </div>

        
        <footer className="text-center py-4">
          <p>&copy; 2023 Fidi. Todos los derechos reservados.</p>
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-12 text-center">
                <img src={logoImage2} alt="Logo" width="50" height="40" className="footer-logo" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
