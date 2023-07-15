import React, { useContext, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import "../estilos/Matches.css";
import "../estilos/Profile.css";
import { FaHeart, FaTimes } from "react-icons/fa";
import { Context } from "../store/AppContext";

const Matches = () => {
  const [rejected, setRejected] = useState(false);
  const [estado, setEstado] = useState(0);
  const { store, actions } = useContext(Context);
  const [idUsuario, setIdUsuario] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [imagenUsuario, setImagenUsuario] = useState("");
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    obtenerDatosUsuarios(store.access_token);
  }, []);

  const obtenerDatosUsuarios = (token) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    actions
      .fetchData(`${store.apiURL}/api/listarUsuarios`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.usuario.length > 0) {
          const primerUsuario = data.usuario[0];
          setIdUsuario(primerUsuario.id);
          setNombreUsuario(primerUsuario.nombre);
          setImagenUsuario(primerUsuario.src_imagen);
        }
      })
      .catch((error) => console.log(error));
  };

  // Perfil de la persona rescatada (ejemplo)
  const perfilRescatado = {
    nombre: "John Doe",
    intereses: ["Chino", "python", "SEO"],
    habilidades: ["Programación", "Alemán"],
    biografia:
      "Soy una persona apasionada por el deporte y la música. Me encanta viajar y explorar nuevos lugares. También tengo habilidades en programación y diseño gráfico.",
    foto: "ruta-a-la-foto-de-perfil.jpg",
  };

  const handleLike = () => {
    setLiked(true);

    // Obtener los datos del emisor y receptor
    const form = new FormData();
    form.append('emisor_id', store.id_usuario);
    form.append('receptor_id', store.matches.usuario[0].id);

    // if (state.store.access_token) {
    //   state.actions.likeUser(id_usuario, receptor_id);
    // }

    const options = {
      method:'POST',
      body: form
    }
    actions.fetchData(`${store.apiURL}/api/like`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log("llego la respuesta aca??????????????'")
        // Manejar la respuesta del servidor si es necesario
        console.log(data);
      })
      .catch((error) => {
        // Manejar el error si ocurre
        console.log(error);
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
  const matches = [
    { id: 1, nombre: "Jane Smith", foto: "ruta-a-la-foto.jpg" },
    { id: 2, nombre: "Mike Johnson", foto: "ruta-a-la-foto.jpg" },
    { id: 3, nombre: "Sarah Thompson", foto: "ruta-a-la-foto.jpg" },
  ];

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row justify-content-center p-4 custom-bg rounded-2">
          <div className="col-md-6 text-center">
            <form>
              <div className="row">
                <div className="col-12">
                  <h2 className="titulos">Te podría interesar</h2>
                  <h3>{nombreUsuario}</h3>

                  <img
                    src={store.matches.usuario[0].src_imagen}
                    alt="Foto de perfil"
                  />
                  <div className="d-flex flex-wrap d-flex justify-content-center ">
                    <br />
                    <p>Lo que quiero aprender:</p>
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
                    <p>Lo que te puedo enseñar:</p>
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
                      <h2 id="offcanvasRightLabel">Mis Matches</h2>
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
                            <Link to={`/chat/${match.id}`}>{match.nombre}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="btn-toolbar d-flex justify-content-center "
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
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
              </div>
            </form>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-dark custom-button"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Revisar tus Matches
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
