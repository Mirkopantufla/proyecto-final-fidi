import React, { useState, useEffect } from 'react';
import '../estilos/Explore.css'

const Explore = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    // Lógica para obtener los perfiles desde el servidor
    fetch('/api/profiles')
      .then(response => response.json())
      .then(data => {
        setProfiles(data);
      })
      .catch(error => {
        // Manejar el error si ocurre
      });
  }, []);

  const handleLike = () => {
    // Lógica para enviar el like al servidor
    const currentProfile = profiles[currentProfileIndex];
    fetch(`/api/profiles/${currentProfile.id}/like`, {
      method: 'POST',
    })
      .then(response => {
        // Manejar la respuesta del servidor si es necesario
        // Por ejemplo, mostrar un mensaje de éxito o cargar más contenido relacionado
      })
      .catch(error => {
        // Manejar el error si ocurre
      });

    // Pasar al siguiente perfil
    setCurrentProfileIndex(currentProfileIndex + 1);
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <div className="container">
      <h1>Explorar</h1>

      {currentProfile && (
        <div className="card">
          {/* Contenido del perfil */}
          <img src={currentProfile.photo} alt="Perfil" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{currentProfile.name}</h5>
            <p className="card-text">{currentProfile.description}</p>
          </div>
          {/* Botón de like */}
          <div className="card-footer">
            <button className="btn btn-primary" onClick={handleLike}>Like</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
