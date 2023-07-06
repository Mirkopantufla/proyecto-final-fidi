import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/AppContext';
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";
import logoImage from "../logo1.png";
import logoImage2 from "../logo2rosa.png";



gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId: "*****.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});

function Registro() {
  const clientId = '887454848030-hcrspiurrepmmojkcv1spvfh8607h1g9.apps.googleusercontent.com';
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('./formulario');
  };

  const handleLogin = () => {
    navigate('./LoginForm');
  };

  const handleGoogleSuccess = (response) => {
    navigate('./formulario');

    console.log("entre bien");
    // Aquí puedes obtener los datos de perfil del usuario autenticado con Google
    const { googleId, name, email } = response.profileObj;

    console.log(googleId);
    console.log(name);
    console.log(email);
    // Envía estos datos al backend para realizar la autenticación o el registro del usuario
    // ...
  };

  const handleGoogleFailure = (error) => {
    console.log(clientId);
    console.log("entre mal");
    console.log('Error en la autenticación de Google:', error);
  };

  return (
    
    <div className="container">
    
      <div className="row justify-content-center p-4">
        <div className="col-md-6 text-center">
          <form>
          <h3 className="titulos"> ¡Hagamos intercambio de conocimiento, registrate en Fidi!
          </h3>
<br />
            <div className="form-group">
              <h5 className="email">Email</h5>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <br />
            <div className="form-group">
              <h5 className="email">Nombre</h5>
              <input type="text" className="form-control" id="nombre" name="nombre" />
            </div>
            <br />
            <div className="form-group">
              <h5 className="email">Contraseña</h5>
              <input type="password" className="form-control" id="contraseña" name="contraseña" />
            </div>
          </form>
           <br />
          <button className="btn btn-dark custom-button text-center" onClick={handleJoinNow}>
            Únete ya
          </button>

          <div className="mt-4 mb-4">
            <GoogleLogin
              clientId={clientId}
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              buttonText="Registrate con Google"
              className="btn btn-dark"
            />
          </div>

          <button className="btn btn-dark text-center" onClick={handleLogin}>
            ¿Ya tienes cuenta?
          </button>
        </div>
      </div>
      <div className="logo-container">

      <img
        src={logoImage}
        alt="Logo"
        width="140"
        height="60"
        className="logo"
      />
      </div>
    </div>
  );
}

export default Registro;
