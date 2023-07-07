import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/Matches.css";
import "../estilos/Profile.css";

import { FaHeart, FaTimes } from "react-icons/fa";
import { Context } from "../store/AppContext";

const Matches = () => {
  const [liked, setLiked] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [estado, setEstado] = useState(0);
  const { store, setStore } = useContext(Context);

  // Perfil de la persona rescatada (ejemplo)
  const perfilRescatado = {
    nombre: "John Doe",
    intereses: ["Chino", "python", "SEO"],
    habilidades: ["Programación", "Alemán"],
    biografia:
      "Soy una persona apasionada por el deporte y la música. Me encanta viajar y explorar nuevos lugares. También tengo habilidades en programación y diseño gráfico.",
    foto: "ruta-a-la-foto-de-perfil.jpg",
  };

  const traerDatosUsuario2 = () => {

  }

  const handleLike = () => {
    setLiked(true);
    // Enviar solicitud al servidor para registrar el like
    fetch(`/api/profiles/${profileId}/like`, {
      method: "POST",
      // Puedes incluir encabezados o datos adicionales si es necesario
    })
      .then((response) => {
        // Manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        // Manejar el error si ocurre
      });
  };

  const handleReject = () => {
    setRejected(true);
    // Enviar solicitud al servidor para registrar el rechazo
    fetch(`/api/profiles/${profileId}/reject`, {
      method: "POST",
      // Puedes incluir encabezados o datos adicionales si es necesario
    })
      .then((response) => {
        // Manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        // Manejar el error si ocurre
      });
  };
  // Lista de personas con las que ha habido match (ejemplo)
  const [matches, setMatches] = useState([
    { id: 1, nombre: "Jane Smith", foto: "ruta-a-la-foto.jpg" },
    { id: 2, nombre: "Mike Johnson", foto: "ruta-a-la-foto.jpg" },
    { id: 3, nombre: "Sarah Thompson", foto: "ruta-a-la-foto.jpg" },
  ]);

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row justify-content-center p-4 custom-bg rounded-2">
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-12">
                <h2 className="titulos">Te podria interesar</h2>
                <h3>{perfilRescatado.nombre}</h3>
                <img src={perfilRescatado.foto} alt="Foto de perfil" />
                <div className="d-flex flex-wrap d-flex justify-content-center ">
                  <br />
                  <p>Lo que quiero aprender </p>
                  <br />
                  {perfilRescatado.intereses.map((interes) => (
                    <button
                      key={interes}
                      type="button"
                      className="btn btn-primary btn-sm m-1"
                      style={{ backgroundColor: "#0CD5A9" }}
                    >
                      {interes}
                    </button>
                  ))}
                </div>
                <div className="d-flex flex-wrap d-flex justify-content-center">
                  <p>Lo que te puedo enseñar</p>
                  {perfilRescatado.habilidades.map((habilidad) => (
                    <button
                      key={habilidad}
                      type="button"
                      className="btn btn-primary btn-sm m-1"
                      style={{ backgroundColor: "#0CD5A9" }}
                    >
                      {habilidad}
                    </button>
                  ))}
                </div>
                <p>Biografía: {perfilRescatado.biografia}</p>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header text-center">
                    <h2 id="offcanvasRightLabel">Mis Matchs</h2>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="list-group">
                      {matches.map((match) => (
                        <li className="list-group-item" key={match.id}>
                          <Link to={`/matches/${match.id}`}>
                            {match.nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="btn-toolbar d-flex justify-content-center " role="toolbar" aria-label="Toolbar with button groups" >
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      className="btn btn-secondary btn-like me-1"
                      onClick={handleLike}
                    >
                      <span className="like-icon">
                        <FaHeart />
                      </span>
                    </button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <button
                      className="btn btn-secondary btn-reject"
                      onClick={handleReject}
                    >
                      <span className="reject-icon">
                        <FaTimes />
                      </span>
                    </button>
                  </div>
                </div>
                {liked && <p>¡Has dado like a este perfil!</p>}
                {rejected && <p>Has rechazado este perfil.</p>}
              </div>

              <div className="col">
                <button
                  className="btn btn-dark custom-button"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Revisa tus Matchs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
