import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import '../estilos/Settings.css';
import Password from './configu/Password.jsx';
import ProfilePhoto from './configu/ProfilePhoto.jsx';
import Email from './configu/Email.jsx';
import Interest from './configu/Interest.jsx';
import Notification from './configu/Notification.jsx';
import logoImage from "../logo1.png";


const Settings = () => {
  return (

    <div className="container-fluid">
      <div className="row justify-content-center p-4 custom-bg rounded-2">
        <div className="col-lg-8 col-md-10 col-sm-12 text-center">
          <h1 className='titulos text-center'>¿Qué quieres hacer hoy?</h1>

          <div className="d-grid gap-3">
            <br />
            <Link to="Password" className="btn btn-dark custom-button">
              Modificar Contraseña
            </Link>
            <Routes>
              <Route path="Password" element={<Password />} />
            </Routes>
            <Link to="ProfilePhoto" className="btn btn-dark custom-button">
              Modificar Foto de Perfil
            </Link>
            <Routes>
              <Route path="ProfilePhoto" element={<ProfilePhoto />} />
            </Routes>
            <Link to="Interest" className="btn btn-dark custom-button">
              Modificar de Habilidades, Intereses y Descripción
            </Link>
            <Routes>
              <Route path="Interest" element={<Interest />} />
            </Routes>
            <Link to="Notification" className="btn btn-dark custom-button">
              Modificar de Notificación
            </Link>
            <Routes>
              <Route path="Notification" element={<Notification />} />
            </Routes>

            <br />
            <br />
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

        </div>
      </div>
    </div>
  );
};

export default Settings;

