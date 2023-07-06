import React, { useState } from 'react';
import '../estilos/Matches.css'

const Matches = () => {
  // Perfil de la persona rescatada (ejemplo)
  const perfilRescatado = {
    nombre: 'John Doe',
    intereses: ['Chino', 'python', 'SEO'],
    habilidades: ['Programación', 'Aleman '],
    biografia: 'Soy una persona apasionada por el deporte y la música. Me encanta viajar y explorar nuevos lugares. También tengo habilidades en programación y diseño gráfico.',
    foto: 'ruta-a-la-foto-de-perfil.jpg',
  };

  // Lista de personas con las que ha habido match (ejemplo)
  const [matches, setMatches] = useState([
    { nombre: 'Jane Smith', foto: 'ruta-a-la-foto.jpg' },
    { nombre: 'Mike Johnson', foto: 'ruta-a-la-foto.jpg' },
    { nombre: 'Sarah Thompson', foto: 'ruta-a-la-foto.jpg' },
  ]);

  // Estado para controlar el match seleccionado
  const [matchSeleccionado, setMatchSeleccionado] = useState(null);

  // Función para analizar el perfil del match y enviar un mensaje
  const analizarPerfilYEnviarMensaje = (match) => {
    // Lógica para analizar el perfil del match y enviar un mensaje
    console.log('Analizando perfil y enviando mensaje a:', match.nombre);
  };

  return (
    <div className="container">
      <h1>Matches</h1>

      {/* Contenido de los matches realizados */}
      <div className="row">
        <div className="col-8">
          <h2>Perfil rescatado</h2>
          <h3>{perfilRescatado.nombre}</h3>
          <img src={perfilRescatado.foto} alt="Foto de perfil" />
          <p>Intereses: {perfilRescatado.intereses.join(', ')}</p>
          <p>Habilidades: {perfilRescatado.habilidades.join(', ')}</p>
          <p>Biografía: {perfilRescatado.biografia}</p>
          <button>Aceptar</button>
          <button>Rechazar</button>
        </div>
        <div className="col-4">
          <h2>Lista de matches</h2>
          <ul>
            {matches.map((match, index) => (
              <li key={index} onClick={() => setMatchSeleccionado(match)}>
                <div className="match-item">
                  <img src={match.foto} alt="Foto de perfil" />
                  <span>{match.nombre}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal para analizar el perfil y enviar mensaje */}
      {matchSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <h2>Perfil de {matchSeleccionado.nombre}</h2>
            <img src={matchSeleccionado.foto} alt="Foto de perfil" />
            {/* Aquí puedes mostrar más información del perfil del match */}
            <button onClick={() => analizarPerfilYEnviarMensaje(matchSeleccionado)}>Enviar mensaje</button>
            <button onClick={() => setMatchSeleccionado(null)}>Cerrar</button>
          </div>
       </div>
      )}
    </div>
  );
};

export default Matches;
