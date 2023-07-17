import React, { useContext, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import "../estilos/Matches.css";
import "../estilos/Profile.css";
import { FaHeart, FaTimes } from "react-icons/fa";
import { Context } from "../store/AppContext";
import { ToastContainer, toast } from 'react-toastify';

const Matches = () => {
  const [rejected, setRejected] = useState(false);
  const { store, actions } = useContext(Context);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [imagenUsuario, setImagenUsuario] = useState("");
  const [habilidadUsuario, setHabilidadUsuario] = useState("");
  const [interesUsuario, setInteresUsuario] = useState("");
  const [descripcionUsuario, setDescripcionUsuario] = useState("");
  const [liked, setLiked] = useState(false);
  const [indice, setIndice] = useState(0);

  let aux = [];

  useEffect(() => {


  }, []);


  function tarjetaUsuario(indice) {

    const usuarioActual = store.matches.usuario[indice];

    console.log("indice actualizado " + indice);

    setNombreUsuario(usuarioActual.nombre);
    setImagenUsuario(usuarioActual.src_imagen);
    setDescripcionUsuario(usuarioActual.descripcion);

    actions.obtenerHabilidadesUsuarioMatch(usuarioActual.id)
  }

  // Perfil de la persona rescatada (ejemplo)
  const perfilRescatado = {
    nombre: "John Doe",
    intereses: ["Chino", "python", "SEO"],
    habilidades: ["Programación", "Alemán"],
    biografia:
      "Soy una persona apasionada por el deporte y la música. Me encanta viajar y explorar nuevos lugares. También tengo habilidades en programación y diseño gráfico.",
    foto: "ruta-a-la-foto-de-perfil.jpg",
  };


  const handleLike = (e) => {
    e.preventDefault();

    setLiked(true);
    console.log();

    // Obtener los datos del emisor y receptor
    const form = new FormData();
    form.append('emisor_id', store.id_usuario);
    form.append('receptor_id', store.matches.usuario[0].id);

    console.log('YO: ', store.id_usuario)

    // if (state.store.access_token) {
    //   state.actions.likeUser(id_usuario, receptor_id);
    // }

    const options = {
      method: 'POST',
      body: form,
      headers: {
        'Authorization': `Bearer ${store.access_token}`
      }
    }

    actions.fetchData(`${store.apiURL}/api/match/like`, options)
      .then((response) => response.json())
      .then((data) => {
        toast.success(data.success);
        // Manejar la respuesta del servidor si es necesario
        console.log("indiceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee " + indice);

        var i = indice + 1;

        console.log("indiceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee 2  " + i);
        tarjetaUsuario(i);
        setIndice(i);

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
      <div className="container-fluid justify-content-around">
        <div className="row custom-bg rounded-2 ">
          <form>
            <div className="col-md-8 justify-content-center">
              <img
                //src={store.matches.usuario[0].src_imagen}
                src={imagenUsuario}
                alt="Foto de perfil"
                className="image-overlay img-fluid max-100"
                style={{ top: 0, left: 0, width: '30%', height: 'auto', }}
              />
            </div>
            <div className="col-md-4 order-md-last ">
              <h1 className="titulos">{nombreUsuario}</h1>
              <div className="">
                <h3 className="titulos">Lo que quiero aprender:</h3>
                {store?.habilidadesUsuarioMatch?.intereses.map((interes, index) => (
                  <button
                    key={index}
                    type="button"
                    className="btn btn-primary btn-sm m-1"
                    style={{ backgroundColor: "#0CD5A9" }}
                  >
                    {interes.descripcion}
                  </button>
                ))}
              </div>
              <div className="d-flex flex-wrap d-flex justify-content-center">
                <h3 className="titulos">Lo que te puedo enseñar:</h3>
                {store?.habilidadesUsuarioMatch?.habilidades.map((habilidad, index) => (
                  <button
                    key={index}
                    type="button"
                    className="btn btn-primary btn-sm m-1"
                    style={{ backgroundColor: "#0CD5A9" }}
                  >
                    {habilidad.descripcion}
                  </button>
                ))}
              </div>
              <p className="titulos">{descripcionUsuario}</p>
            </div>
          </form>
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
            className="btn-toolbar d-flex justify-content-left "
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
                onClick={(e) => handleLike(e)}
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
      <div className="col-md-6">
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>

  );

};

export default Matches;
