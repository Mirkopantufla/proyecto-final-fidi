import React, { useContext, useEffect, useState } from "react";
import "../estilos/Profile.css";
import { Context } from "../store/AppContext";

const Profile = () => {
  const { store, actions } = useContext(Context);

  //--------------------------------------------------------------------------------------------------------
  //Funcion para traer la habilidades en la base de datos, se conecta con la API y extrae cada una de ellas
  //estas las almaceno en el estado habilidadesDB para poder manipularlas en el front

  return (
    <div className="container">
      <div className="p-4 custom-bg rounded-2">
        <div className="row justify-content-center">
          <div className="col-5 mt-5">
            <img src={store.currentUser ? store.currentUser.data.user.src_imagen : ""} alt="Foto de perfil"
              className="image-overlay img-fluid max-100 rounded-5"
              style={{ top: 0, left: 0, width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-5 mt-5">
            <div className="container text-center ">
              <h2 className="titulos">{store.currentUser && store.currentUser.data.user.nombre != null ? store.currentUser.data.user.nombre : ""}</h2>
              <h3 className="titulos">Habilidades</h3>
              {
                store.habilidades && store.habilidades.length >= 1 ?
                  store.habilidades.map((habilidad, id) => {
                    return (
                      <div key={id} className="btn btn-dark m-1">
                        {habilidad.descripcion}
                      </div>
                    )
                  })
                  :
                  null
              }
              <h3 className="titulos">Intereses</h3>
              {
                store.intereses && store.intereses.length >= 1 ?
                  store.intereses.map((interes, id) => {
                    return (
                      <div key={id} className="btn btn-dark m-1">
                        {interes.descripcion}
                      </div>
                    )
                  })
                  :
                  null
              }
              <br />
              <br />
              <h3 className="titulos">Descripcion</h3>
              <h4 className="titulos">{store.currentUser ? store.currentUser.data.user.descripcion : ""}</h4>
            </div>
          </div>
        </div>
        <div className="col-2 mt-5"></div>
      </div>
    </div>
  );
};

export default Profile;
