import React, { useState } from 'react';

const Notification = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [appNotifications, setAppNotifications] = useState(false);

  const handleEmailNotificationsChange = (e) => {
    setEmailNotifications(e.target.checked);
  };

  const handleAppNotificationsChange = (e) => {
    setAppNotifications(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para guardar las configuraciones de notificación
    // Aquí puedes implementar el código para guardar las configuraciones en tu base de datos o en el lugar adecuado

    setEmailNotifications(false);
    setAppNotifications(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forma de notificacion</h2>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="emailNotificationsSwitch"
          checked={emailNotifications}
          onChange={handleEmailNotificationsChange}
        />
        <label className="form-check-label" htmlFor="emailNotificationsSwitch">
          Notificaciones por correo electrónico
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="appNotificationsSwitch"
          checked={appNotifications}
          onChange={handleAppNotificationsChange}
        />
        <label className="form-check-label" htmlFor="appNotificationsSwitch">
          Notificaciones en la aplicación
        </label>
      </div>
      <br />
      <button type="submit" className="btn btn-dark custom-button ">
        Guardar 
      </button>
    </form>
  );
};

export default Notification;
