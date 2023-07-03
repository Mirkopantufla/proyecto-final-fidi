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
    // ...

    setEmailNotifications(false);
    setAppNotifications(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Notificaciones por correo electrónico:</label>
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={handleEmailNotificationsChange}
        />
      </div>
      <div className="form-group">
        <label>Notificaciones en la aplicación:</label>
        <input
          type="checkbox"
          checked={appNotifications}
          onChange={handleAppNotificationsChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar configuración de notificación
      </button>
    </form>
  );
};

export default Notification;
