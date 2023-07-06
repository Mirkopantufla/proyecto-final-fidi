import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import logoImage2 from "../logo2rosa.png";



function LoginForm() {
  const clientId = '887454848030-hcrspiurrepmmojkcv1spvfh8607h1g9.apps.googleusercontent.com';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor, validar la autenticación, etc.
    // Si la autenticación es exitosa, redirige a la página de perfil
    navigate('/profile');
  };

  const handleGoogleSuccess = (response) => {
    // Aquí puedes realizar acciones adicionales cuando se acepta el inicio de sesión con Google
    // Si la autenticación es exitosa, redirige a la página de perfil
    navigate('/profile');
  };

  const handleGoogleFailure = (error) => {
    console.log('Error en la autenticación de Google:', error);
  };

  return (
    <div className="container">

      <div className="row justify-content-center p-4 custom-bg rounded-2">
        <div className="col-md-6 text-center">

          <form onSubmit={handleFormSubmit}>
            <br />
            <div className="form-group">
              <h4 className="email text-center ">Ingresa tu email</h4>
              <br />
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <br />
            </div>
            <div className="form-group">
              <h4 className="password text-center">Ingresa tu contraseña</h4>
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <br />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-dark">Iniciar sesión</button>
            </div>
            <br />
            <h4 className="password text-center">o</h4>

            <br />
            <div className="form-group d-flex justify-content-center">
              <GoogleLogin
                clientId={clientId}
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleFailure}
                buttonText="Iniciar sesión con Google"
                className="btn btn-danger"
              />
            </div>
            <br />
          </form>
          <div className="logo-container">

            <img
              src={logoImage2}
              alt="Logo"
              width="140"
              height="100"
              className="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
