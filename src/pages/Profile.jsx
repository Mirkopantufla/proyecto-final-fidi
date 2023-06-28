import React, { useState } from 'react';
import '../estilos/Profile.css'

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
    <div className="container">
      <h1>Perfil</h1>
      {/* Contenido del perfil */}
      {/* Foto del usuario, intereses, edad, lo k sea */}
      <div>
        {/* Opciones para dar like o rechazar */}
        <button className="btn btn-primary" onClick={handleLike}>Like</button>
        <button className="btn btn-danger" onClick={handleReject}>Rechazar</button>
      </div>
      {/* Mensaje de match */}
      {liked && <p>¡Has dado like a este perfil!</p>}
      {rejected && <p>Has rechazado este perfil.</p>}
    </div>
  );
};

export default Profile;
