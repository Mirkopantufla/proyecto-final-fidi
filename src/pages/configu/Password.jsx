import React, { useState } from 'react';
import '../../estilos/Settings.css';


const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para validar la contraseña actual
    if (currentPassword !== 'contrasenaActual') {
      setError('La contraseña actual es incorrecta');
      return;
    }

    // Lógica para validar la complejidad de la nueva contraseña
    if (newPassword.length < 8) {
      setError('La nueva contraseña debe tener al menos 8 caracteres');
      return;
    }

    // Lógica para guardar la nueva contraseña
    //  para guardar la nueva contraseña en ls base de datos 

    // Reiniciar los campos después de guardar la contraseña
    setCurrentPassword('');
    setNewPassword('');
    setError('');
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
      <br />
      {error && <div className="error">{error}</div>}
      <br />
      <button type="submit" className="btn btn-dark custom-button">
        Guardar contraseña
      </button>
      <br />
    </form>
  );
};

export default Password;
