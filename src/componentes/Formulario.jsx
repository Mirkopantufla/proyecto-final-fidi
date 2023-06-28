import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/Formulario.css" // Importa tu archivo de estilos CSS personalizado para el formulario

function Formulario() {
  const [intereses, setIntereses] = useState('');
  const [aprendizaje, setAprendizaje] = useState('');
  const [biografia, setBiografia] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor, guardarlos en una base de datos, etc.
    console.log('Intereses:', intereses);
    console.log('Aprendizaje:', aprendizaje);
    console.log('Biografía:', biografia);
    console.log('Foto de perfil:', fotoPerfil);
    // Luego puedes redirigir al usuario a otra página o mostrar un mensaje de éxito, según tus necesidades
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="intereses" className="text-light">Intereses:</label>
              <input
                type="text"
                className="form-control"
                id="intereses"
                value={intereses}
                onChange={(e) => setIntereses(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="aprendizaje" className="text-light">Lo que quiero aprender:</label>
              <input
                type="text"
                className="form-control"
                id="aprendizaje"
                value={aprendizaje}
                onChange={(e) => setAprendizaje(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="biografia" className="text-light">Biografía:</label>
              <textarea
                className="form-control"
                id="biografia"
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
                maxLength={500}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fotoPerfil" className="text-light">Foto de perfil:</label>
              <input
                type="file"
                className="form-control-file"
                id="fotoPerfil"
                onChange={(e) => setFotoPerfil(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
