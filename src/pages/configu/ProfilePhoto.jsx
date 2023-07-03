import React, { useState } from 'react';
import '../../estilos/Settings.css';


const ProfilePhoto = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');

  const handleProfileImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProfileImage(imageFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para validar y guardar la nueva foto de perfil
    if (!profileImage) {
      setError('Debe seleccionar una imagen');
      return;
    }

    // Lógica para guardar la nueva foto de perfil
    //para guardar la imagen en la base de datos o en el lugar adecuado

    // Reiniciar el estado de la imagen después de guardarla
    setProfileImage(null);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <div className="form-group">
        <label><h2>Sube tu nueva foto de perfil:</h2></label>
        <br/>
        <br/>

        <input
          type="file"
          className="form-control-file"
          onChange={handleProfileImageChange}
        />
        <br/>
        <br/>

      </div>
      {error && <div className="error">{error}</div>}
      <br/>
      <br/>

      <button type="submit" className="btn btn-dark custom-button">
        Guardar foto de perfil
      </button>
    </form>
  );
};

export default ProfilePhoto;
