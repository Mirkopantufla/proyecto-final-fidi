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
      <div className="row justify-content-center p-4 custom-bg rounded-2">
        <div className="col-md-6 text-center">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="profile-container">
                <div className="profile-image d-flex justify-content-center">
                  <img src={store.currentUser ? store.currentUser.data.user.src_imagen : ""} alt="Foto de perfil" style={{ width: '400px' }} />
                </div>
                <div className="profile-info">
                  <h2>{store.currentUser && store.currentUser.data.user.nombre != null ? store.currentUser.data.user.nombre : ""}</h2>
                  <p>Edad:  años</p>
                  <h3>Habilidades</h3>
                  {
                    store.habilidades && store.habilidades.length >= 1 ?
                      store.habilidades.map((habilidad, id) => {
                        return (
                          <div key={id} className="btn btn-dark">
                            {habilidad.descripcion}
                          </div>
                        )
                      })
                      :
                      null
                  }
                  <h3>Intereses</h3>
                  {
                    store.intereses && store.intereses.length >= 1 ?
                      store.intereses.map((interes, id) => {
                        return (
                          <div key={id} className="btn btn-dark">
                            {interes.descripcion}
                          </div>
                        )
                      })
                      :
                      null
                  }
                  <h3>Descripcion</h3>
                  <p>{store.currentUser ? store.currentUser.data.user.descripcion : ""}</p>
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
