import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import '../estilos/Settings.css';
import Password from './configu/Password.jsx';
import ProfilePhoto from './configu/ProfilePhoto.jsx';
import Email from './configu/Email.jsx';
import Interest from './configu/Interest.jsx';
import Notification from './configu/Notification.jsx';
import ProfileType from './configu/ProfileType.jsx';

const Settings = () => {
  return (
    <div className="container">
      <h1>¿Qué quieres hacer hoy?</h1>
      <br />
      <div className="d-grid gap-2">
        <Link to="Password" className="btn btn-dark custom-button">
          Modificación de Contraseña
        </Link>
        <Routes>
        <Route path="Password" element={<Password />} />
        </Routes>

        <Link to="ProfilePhoto" className="btn btn-dark custom-button">
          Modificación de Foto de Perfil
        </Link>
        <Routes>
        <Route path="ProfilePhoto" element={<ProfilePhoto />} />
        </Routes>
        <Link to="Email" className="btn btn-dark custom-button">
          Modificación de Correo Electrónico
        </Link>
        <Routes>
        <Route path="Email" element={<Email />} />
        </Routes>
        <Link to="Interest" className="btn btn-dark custom-button">
          Modificación de Intereses y Aprendizaje
        </Link>
        <Routes>
        <Route path="Interest" element={<Interest />} />
        </Routes>
        <Link to="Notification" className="btn btn-dark custom-button">
          Modificación de Notificación
        </Link>
        <Routes>
        <Route path="Notification" element={<Notification />} />
        </Routes>
        <Link to="ProfileType" className="btn btn-dark custom-button">
          Modificación de Tipo de Perfil
        </Link>
        <Routes>
        <Route path="ProfileType" element={<ProfileType />} />
        </Routes>
      </div>
    
    </div>
  );
};

export default Settings;

