import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Ingresa tu email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Ingresa tu contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          {/* Agrega el botón de inicio de sesión con Google */}
          <GoogleLogin
            clientId={clientId}
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            buttonText="Iniciar sesión con Google"
            className="btn btn-danger"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
