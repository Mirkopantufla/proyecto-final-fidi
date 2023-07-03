import React, { useState } from 'react';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para guardar la nueva contraseña
    // ...

    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Contraseña actual:</label>
        <input
          type="password"
          className="form-control"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
      </div>
      <div className="form-group">
        <label>Nueva contraseña:</label>
        <input
          type="password"
          className="form-control"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar contraseña
      </button>
    </form>
  );
};

export default Password;
