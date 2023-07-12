import React, { useContext, useEffect, useState } from "react";
import "../estilos/Profile.css";
import { FaHeart, FaTimes } from "react-icons/fa";
import { Context } from "../store/AppContext";

const Profile = ({ profileId }) => {
  const [liked, setLiked] = useState(false);
  const [rejected, setRejected] = useState(false);
  const { store, actions } = useContext(Context);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [imagenUsuario, setImagenUsuario] = useState('');
  const [habilidades, setHabilidades] = useState([])
  const [intereses, setIntereses] = useState([])
  const [descripcionUsuario, setDescripcionUsuario] = useState('');

  useEffect(() => {
    console.log("Entre al principio")
    obtenerDatosUsuario(store.access_token)

  }, [])

  // Datos de ejemplo para la foto de perfil, intereses y lo que el usuario quiere aprender
  const profileData = {
    name: "Paz Valenzuela",
    age: 28,
    profileImage: "foto de perfil subida segun BD",
    interests: ["los que se seleccionaron en el formulario"],
    wantsToLearn: ["los que se seleccionaron en el formulario"],
  };

  //--------------------------------------------------------------------------------------------------------
  //Funcion para traer la habilidades en la base de datos, se conecta con la API y extrae cada una de ellas
  //estas las almaceno en el estado habilidadesDB para poder manipularlas en el front
  const obtenerDatosUsuario = (token) => {

    const options = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    actions.fetchData(`${store.apiURL}/api/profile`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setHabilidades(data.habilidades)
        setIntereses(data.intereses)
        setNombreUsuario(data.usuario.nombre)
        setImagenUsuario(data.usuario.src_imagen)
        setDescripcionUsuario(data.usuario.descripcion)
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <div className="row justify-content-center p-4 custom-bg rounded-2">
        <div className="col-md-6 text-center">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="profile-container">
                <div className="profile-image d-flex justify-content-center">
                  <img src={imagenUsuario} alt="Foto de perfil" style={{ width: '400px' }} />
                </div>
                <div className="profile-info">
                  <h2>{nombreUsuario != '' ? nombreUsuario : null}</h2>
                  <p>Edad: {profileData.age} años</p>
                  <h3>Habilidades</h3>
                  {
                    habilidades.length >= 1 ?
                      habilidades.map((habilidad, key) => (
                        <div name={key} className="btn btn-dark">
                          {habilidad}
                        </div>
                      ))
                      :
                      null
                  }
                  <h3>Intereses</h3>
                  {
                    intereses.length >= 1 ?
                      intereses.map((interes, key) => (
                        <div name={key} className="btn btn-dark">
                          {interes}
                        </div>
                      ))
                      :
                      null
                  }
                  <h3>Descripcion</h3>
                  <p>{descripcionUsuario}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
