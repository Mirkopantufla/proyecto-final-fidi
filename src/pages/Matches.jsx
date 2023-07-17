import React, { useContext, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import "../estilos/Matches.css";
import "../estilos/Profile.css";
import { FaHeart, FaTimes } from "react-icons/fa";
import { Context } from "../store/AppContext";
import { ToastContainer, toast } from 'react-toastify';

const Matches = () => {
  const [rejected, setRejected] = useState(false);
  const [estado, setEstado] = useState(0);
  const { store, actions } = useContext(Context);
  const [idUsuario, setIdUsuario] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [imagenUsuario, setImagenUsuario] = useState("");
  const [habilidadUsuario, setHabilidadUsuario] = useState("");
  const [interesUsuario, setInteresUsuario] = useState("");
  const [descripcionUsuario, setDescripcionUsuario] = useState("");
   const [liked, setLiked] = useState(false);
  const[indice, setIndice]= useState(0);
  const [data, setData] = useState(null);

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

        setData(data)

        //muestra primer usuario
        if (data.usuario.length > 0) {
          setIndice(0)
          const primerUsuario = data.usuario[indice];
          setIdUsuario(primerUsuario.id);
          setNombreUsuario(primerUsuario.nombre);
          setImagenUsuario(primerUsuario.src_imagen);
          setHabilidadUsuario (primerUsuario.habilidad);
          setInteresUsuario (primerUsuario.interes);
          setDescripcionUsuario(primerUsuario.descripcion);
        }
      })
      .catch((error) => console.log(error));
  };

  function tarjetaUsuario(indice){

    console.log("indice actualizado "+indice);
    const usuarioActual = data.usuario[indice];
          setIdUsuario(usuarioActual.id);
          setNombreUsuario(usuarioActual.nombre);
          setImagenUsuario(usuarioActual.src_imagen);
          setHabilidadUsuario (usuarioActual.habilidad);
          setInteresUsuario (usuarioActual.interes);
          setDescripcionUsuario(usuarioActual.descripcion);

          console.log("nombreeeeeeeeeeeeeee "+usuarioActual.nombre)
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
        toast.success(data.success);
        // Manejar la respuesta del servidor si es necesario
        console.log("indiceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee "+indice);

        var i = indice+1;

        console.log("indiceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee 2  "+i);
       

        setIndice(i);
        tarjetaUsuario(i);

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
                  style={{ top: 0, left: 0, width: '30%', height: 'auto',}}
                  />
            </div>    
            <div className="col-md-4 order-md-last ">
                  <h1 className="titulos">{nombreUsuario}</h1>
                  <div className="">
                    <h3 className="titulos">Lo que quiero aprender:</h3>
                    {perfilRescatado.intereses.map((interes) => (
                      <button
                      key={interesUsuario}
                      type="button"
                      className="btn btn-primary btn-sm m-1"
                      style={{ backgroundColor: "#0CD5A9" }}
                      >
                        {interesUsuario}
                      </button>
                    ))}
                  </div>
                  <div className="d-flex flex-wrap d-flex justify-content-center">
                    <h3 className="titulos">Lo que te puedo enseñar:</h3>
                    {perfilRescatado.habilidades.map((habilidad) => (
                      <button
                      key={habilidadUsuario}
                      type="button"
                      className="btn btn-primary btn-sm m-1"
                      style={{ backgroundColor: "#0CD5A9" }}
                      >
                        {habilidadUsuario}
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
        </div>
      
  );
  
};

export default Matches;