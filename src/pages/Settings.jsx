import React, { useState } from 'react';
import '../estilos/Settings.css'

const Settings = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [interests, setInterests] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const imageFile = e.target.files[0];
    // Lógica para subir la imagen al servidor y obtener su URL todo esto debemos verlo luego con la base de datos
    const imageUrl = // URL de la imagen subida
    setProfileImage(imageUrl);
  };

  const handleInterestsChange = (e) => {
    // Lógica para manejar los intereses seleccionados por el usuario
    const selectedInterests = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setInterests(selectedInterests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los cambios de configuración al servidor
    // Actualizar la configuración del usuario
  };

  return (
    <div className="container">
      <h1>Configuración</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Contraseña actual:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
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
        <div className="form-group">
          <label>Foto de perfil:</label>
          <input
            type="file"
            className="form-control-file"
            onChange={handleProfileImageChange}
          />
        </div>
        <div className="form-group">
          <label>Intereses:</label>
          <select
            multiple
            className="form-control"
            value={interests}
            onChange={handleInterestsChange}
          >
            <option value="interes1">Interés 1</option>
            <option value="interes2">Interés 2</option>
            <option value="interes3">Interés 3</option>
            <option value="interes4">Interés 4</option>
            <option value="interes5">Interés 5</option>
            <option value="interes6">Interés 6</option>
            <option value="interes7">Interés 7</option>
            <option value="interes8">Interés 8</option>
            <option value="interes9">Interés 9</option>
            <option value="interes10">Interés 10</option>


          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default Settings;
