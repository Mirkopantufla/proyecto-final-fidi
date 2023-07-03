import React, { useState } from 'react';

const ProfileType = () => {
  const [profileType, setProfileType] = useState('');

  const handleProfileTypeChange = (e) => {
    setProfileType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para guardar el tipo de perfil
    // ...

    setProfileType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Tipo de perfil:</label>
        <input
          type="text"
          className="form-control"
          value={profileType}
          onChange={handleProfileTypeChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar tipo de perfil
      </button>
    </form>
  );
};

export default ProfileType;
