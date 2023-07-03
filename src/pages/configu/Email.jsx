import React, { useState } from 'react';

const Email = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para guardar el nuevo correo electrónico
    // ...

    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Correo electrónico:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar correo electrónico
      </button>
    </form>
  );
};

export default Email;
