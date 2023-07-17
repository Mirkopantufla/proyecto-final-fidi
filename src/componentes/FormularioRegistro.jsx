import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/AppContext';
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";
import logoImage from "../logo1.png";



gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId: "*****.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});

function Registro() {
  const { store: { new_user }, actions } = useContext(Context);

  let hayError;

  //Regex para validar
  const solocorreos = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const soloLetras = /^[a-zA-Z\s]+$/;

  //Estados Auxiliares
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const clientId = '887454848030-hcrspiurrepmmojkcv1spvfh8607h1g9.apps.googleusercontent.com';
  const navigate = useNavigate();

  const handleJoinNow = (e) => {
    e.preventDefault();

    validarDatos()

    if (hayError == false) {
      navigate('./formulario');
    }
  };

  const handleLogin = () => {
    navigate('/loginform');
  };

  const handleGoogleSuccess = (response) => {
    navigate('./formulario');

    console.log("entre bien");
    // Aquí puedes obtener los datos de perfil del usuario autenticado con Google
    const { googleId, name, email } = response.profileObj;

    118137373362146592449
    118137373362146592449

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

  const validarDatos = () => {
    //Siempre inicia falso al consultar, en caso de haber algun error cambiara a true
    hayError = false;

    //Validacion para el campo correo, que no este vacio y un formato valido: ejemplo@ejemplo.cl
    if (new_user.correo == '') {
      setErrorCorreo('No puedes dejar el campo de correo vacio')
      hayError = true;
    } else if (!solocorreos.test(new_user.correo)) {
      setErrorCorreo('El campo de correo debe tener un formato valido: ejemplo@ejemplo.cl')
      hayError = true;
    } else {
      setErrorCorreo('')
    }

    //Validacion para el campo nombre, que no este vacio y solo letras
    if (new_user.nombre == '') {
      setErrorNombre('No puedes dejar el campo de nombre vacio')
      hayError = true;
    } else if (!soloLetras.test(new_user.nombre)) {
      setErrorNombre('El campo de nombre debe tener solo')
      hayError = true;
    } else {
      setErrorNombre('')
    }

    //Validacion para el campo password, de momento solo si esta vacio
    if (new_user.password == '') {
      setErrorPassword('No puedes dejar el campo de password vacio')
      hayError = true;
    } else {
      setErrorPassword('')
    }

    return hayError;
  }


  return (

    <div className="container">
      <div className="row justify-content-center p-4">
        <div className="col-12 col-md-9 col-lg-9 text-center">
          <h1 className="titulos"> ¡Hagamos intercambio de conocimiento, registrate en Fidi!</h1>
          <br />
          <p className='fs-4'>Con el siguiente formulario puedes registrarte en nuestra plataforma!</p>
        </div>
      </div>
      <div className="row justify-content-center p-4">
        <div className="col-12 col-md-8 col-lg-6 text-center">
          <form>
            <div className="form-group">
              <h5 className="email">Email</h5>
              {/* Con el Onchange mando los cambios inmediatamente al context mediante una funcion dentro de flux */}
              <input type="email" className="form-control" id="correo" name="correo" onChange={actions.handleChange} />
              <small id='smallCorreo' className='fs-5 text-danger'>{errorCorreo}</small>
            </div>
            <br />
            <div className="form-group">
              <h5 className="email">Nombre</h5>
              <input type="text" className="form-control" id="nombre" name="nombre" onChange={actions.handleChange} />
              <small id='smallNombre' className='fs-5 text-danger'>{errorNombre}</small>
            </div>
            <br />
            <div className="form-group">
              <h5 className="email">Contraseña</h5>
              <input type="password" className="form-control" id="password" name="password" onChange={actions.handleChange} />
              <small id='smallPassword' className='fs-5 text-danger'>{errorPassword}</small>
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
