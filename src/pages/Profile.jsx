import React, { useState } from 'react';
import "../estilos/Profile.css"
import { FaHeart, FaTimes } from 'react-icons/fa';

const Profile = ({ profileId }) => {
  const [liked, setLiked] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleLike = () => {
    setLiked(true);
    // Enviar solicitud al servidor para registrar el like
    fetch(`/api/profiles/${profileId}/like`, {
      method: 'POST',
      // Puedes incluir encabezados o datos adicionales si es necesario
    })
      .then(response => {
        // Manejar la respuesta del servidor si es necesario
      })
      .catch(error => {
        // Manejar el error si ocurre
      });
  };

  const handleReject = () => {
    setRejected(true);
    // Enviar solicitud al servidor para registrar el rechazo
    fetch(`/api/profiles/${profileId}/reject`, {
      method: 'POST',
      // Puedes incluir encabezados o datos adicionales si es necesario
    })
      .then(response => {
        // Manejar la respuesta del servidor si es necesario
      })
      .catch(error => {
        // Manejar el error si ocurre
      });
  };

  return (
    <div className='background'>
    <div className="container">
      <h1>Perfil</h1>
      <div className="profile-container">
        <div className="profile-image">
          {/* Aquí debemos incluir la lógica y elementos necesarios para mostrar la foto de perfil */}
        </div>
        <div className="profile-info">
          {/* Aquí debemos incluir la lógica y elementos necesarios para mostrar los intereses y lo que el usuario quiere aprender */}
        </div>
      </div>
      <div className="profile-actions">
        <button className="profile-action-btn" onClick={handleLike}>
          <FaHeart className="profile-action-icon like-icon" />
        </button>
        <button className="profile-action-btn" onClick={handleReject}>
          <FaTimes className="profile-action-icon reject-icon" />
        </button>
      </div>
      {liked && <p>¡Has dado like a este perfil!</p>}
      {rejected && <p>Has rechazado este perfil.</p>}
    </div>
    </div>
  );
};

export default Profile;
