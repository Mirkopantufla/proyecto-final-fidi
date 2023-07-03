import React, { useState } from "react";
import "../estilos/Profile.css";
import { FaHeart, FaTimes } from "react-icons/fa";

const Profile = ({ profileId }) => {
  const [liked, setLiked] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleLike = () => {
    setLiked(true);
    // Enviar solicitud al servidor para registrar el like
    fetch(`/api/profiles/${profileId}/like`, {
      method: "POST",
      // Puedes incluir encabezados o datos adicionales si es necesario
    })
      .then((response) => {
        // Manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        // Manejar el error si ocurre
      });
  };

  const handleReject = () => {
    setRejected(true);
    // Enviar solicitud al servidor para registrar el rechazo
    fetch(`/api/profiles/${profileId}/reject`, {
      method: "POST",
      // Puedes incluir encabezados o datos adicionales si es necesario
    })
      .then((response) => {
        // Manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        // Manejar el error si ocurre
      });
  };

  // Datos de ejemplo para la foto de perfil, intereses y lo que el usuario quiere aprender
  const profileData = {
    name: "Paz Valenzuela",
    age: 28,
    profileImage: "foto de perfil subida segun BD",
    interests: ["los que se seleccionaron en el formulario"],
    wantsToLearn: ["los que se seleccionaron en el formulario"],
  };

  return (
    <div className="container main-container custom-bg rounded">
      <div className="row">
        <div className="col-sm-">
          <div className="explore-container p-4">
            <div className="background">
              <div>
                <h1>¡a conocer!</h1>
                <div className="profile-container">
                  <div className="profile-image">
                    <img src={profileData.profileImage} alt="Foto de perfil" />
                  </div>
                  <div className="profile-info">
                    <h2>{profileData.name}</h2>
                    <p>Edad: {profileData.age} años</p>
                    <h3>Intereses</h3>

                    {profileData.interests.map((interest, index) => (
                      <p key={index}>{interest}</p>
                    ))}

                    <h3>Quiere aprender</h3>
                    <p>{profileData.wantsToLearn}</p>
                  </div>
                </div>
                <div className="profile-actions d-flex align-items-center">
  <button className="btn btn-like" onClick={handleLike}>
    <span className="like-icon">
      <FaHeart />
    </span>
  </button>
  <button className="btn btn-reject" onClick={handleReject}>
    <span className="reject-icon">
      <FaTimes />
    </span>
  </button>
</div>
{liked && <p>¡Has dado like a este perfil!</p>}
{rejected && <p>Has rechazado este perfil.</p>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
