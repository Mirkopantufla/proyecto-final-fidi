import React, { useState } from "react";
import "../estilos/Profile.css";
import { FaHeart, FaTimes } from "react-icons/fa";

const Profile = ({ profileId }) => {
 
  

  // Datos de ejemplo para la foto de perfil, intereses y lo que el usuario quiere aprender
  const profileData = {
    name: "Paz Valenzuela",
    age: 28,
    profileImage: "foto de perfil subida segun BD",
    interests: ["los que se seleccionaron en el formulario"],
    wantsToLearn: ["los que se seleccionaron en el formulario"],
  };

  return (
    <div className="container">
    <div className="container-fluid">
      <div className="row justify-content-center p-4 custom-bg rounded-2">
        <div className="col-md-6 text-center">
          <div className="row">
            <div className="col-md-8">
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
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
