import React, { useState } from 'react';
import '../../estilos/Settings.css';


const Email = () => {
  const [email, setEmail] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSaving(true);

    try {
      // Simulación de una solicitud al servidor para actualizar el correo electrónico // debemos verlo con BD
      await saveEmailToServer(email);

      setSaveSuccess(true);
      setEmail('');
    } catch (error) {
      console.error(error);
      // Manejo de errores en caso de fallo al guardar el correo electrónico
    }

    setIsSaving(false);
  };

  const saveEmailToServer = (email) => {
    // Simulación de una solicitud asincrónica al servidor// todo esto tiene relacion con BD
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Aquí debmos hacer la lógica real para enviar la solicitud al servidor y actualizar el correo electrónico en la base de datos

        resolve();
      }, 2000);
    });
  };

  return (
    <div>
    <h2>Modificar Correo Electrónico</h2>
    {saveSuccess && <p className="alert alert-warning ">¡Correo electrónico guardado con éxito!</p>}
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Nuevo Correo Electrónico:</label>
        <input type="email" id="email" className="form-control" value={email} onChange={handleEmailChange} required />
      </div>
      <button type="submit" className="btn btn-dark custom-button" disabled={isSaving}>
        {isSaving ? 'Guardando...' : 'Guardar'}
      </button>
    </form>
  </div>
);
};


export default Email;
