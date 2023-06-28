import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Formulario from './componentes/Formulario.jsx';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "./logo1.png";
import logoImage2 from "./logo2rosa.png";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return ;
}

function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor, guardarlos en una base de datos, etc.
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Clave:', clave);
    // Luego puedes redirigir al usuario a otra página o mostrar un mensaje de éxito, según tus necesidades
  };

  const registrarConFacebook = () => {
    // Lógica para registrar con Facebook
  };

  const registrarConTwitter = () => {
    // Lógica para registrar con Twitter
  };

  const registrarConLinkedIn = () => {
    // Lógica para registrar con LinkedIn
  };

  const registrarConGitHub = () => {
    // Lógica para registrar con GitHub
  };

  return (
    <div className="registro-container p-4">
      <h1>Regístrate en Fidi</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre" className="text-light">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo" className="text-light">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="clave" className="text-light">Clave:</label>
          <input
            type="password"
            className="form-control"
            id="clave"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <button type="submit" className="btn btn-dark">Registrarse</button>
        </div>
        <div className="text-center">
          <p>O regístrate con:</p>
          <div>
            <button className="btn btn-primary" onClick={registrarConFacebook}>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </button>
            <button className="btn btn-info" onClick={registrarConTwitter}>
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </button>
            <button className="btn btn-danger" onClick={registrarConLinkedIn}>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </button>
            <button className="btn btn-dark" onClick={registrarConGitHub}>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

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
              {mostrarFormulario && <Formulario />}
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
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
