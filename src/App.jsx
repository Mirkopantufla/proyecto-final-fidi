import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Formulario from './componentes/Formulario';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "./logo1.png";
import logoImage2 from "./logo2rosa.png";

function Home() {
  return <h2>Home</h2>;
}

function App() {
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
              <div className="explore-container  p-4">
                <h2>Explora personas que quieran intercambiar conocimiento</h2>
                <button className="btn btn-dark">Explorar</button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="registration-container  p-4">
                <h1>Regístrate en Fidi</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <br />
                  <Link to="/formulario" className="btn btn-dark">
                    Registrarse
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>

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
