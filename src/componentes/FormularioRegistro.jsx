import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/AppContext';
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";

gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "*****.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});

function Registro() {

  const clientId = '887454848030-hcrspiurrepmmojkcv1spvfh8607h1g9.apps.googleusercontent.com';
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('./Formulario.jsx')
  }
  const handleLogin = () => {
    navigate('./LoginForm.jsx')
  }

  const handleGoogleSuccess = (response) => {
    navigate('.Formulario')

    console.log("entre bien")
    // Aquí puedes obtener los datos de perfil del usuario autenticado con Google
    const { googleId, name, email } = response.profileObj;

    console.log(googleId)

    console.log(name)

    console.log(email)
    // Envía estos datos al backend para realizar la autenticación o el registro del usuario
    // ...
  };

  const handleGoogleFailure = (error) => {
    console.log(clientId)
    console.log("entre mal")
    console.log('Error en la autenticación de Google:', error);
  };

  return (


    <div>
      {/* Agrega el botón de inicio de sesión con Google */}
      <GoogleLogin
        clientId={clientId}
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        buttonText="Iniciar sesión con Google"
      />
      <FontAwesomeIcon icon="fa-solid fa-square" />
    </div>
  );
}


export default Registro;