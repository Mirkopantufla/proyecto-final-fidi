import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/AppContext';
//import '@fortawesome/fontawesome-svg-core/styles.css';

function Registro() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  //Corri esto para mostrar el formulario 
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

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
      <form onSubmit={(e) => actions.login(e, navigate)}>
        {/* Comente esta linea para probar el login
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
        </div> */}
        <div className="form-group">
          <label htmlFor="correo" className="text-light">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={store.correo}
            onChange={actions.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="clave" className="text-light">Clave:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={store.password}
            onChange={actions.handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <button>Login</button>
          <button type="submit" className="btn btn-dark">Registrarse</button>
        </div>
        <div className="text-center">
          <p>O regístrate con:</p>
          <div className="btn-group">
            <button className="btn btn-info" onClick={registrarConTwitter}>
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </button>
            <button className="btn btn-danger" onClick={registrarConLinkedIn}>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Registro;