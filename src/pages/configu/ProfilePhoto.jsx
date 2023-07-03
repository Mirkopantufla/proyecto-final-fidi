import React, { useState } from 'react';

const ProfilePhoto = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProfileImage(imageFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para guardar la nueva foto de perfil
    // ...

    setProfileImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Foto de perfil:</label>
        <input
          type="file"
          className="form-control-file"
          onChange={handleProfileImageChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar foto de perfil
      </button>
    </form>
  );
};

export default ProfilePhoto;
