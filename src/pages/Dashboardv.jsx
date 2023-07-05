import React from 'react';
import "../estilos/Dashboardv.css";
import MadCat3 from '../dashimg/madcat3.jpg';
import MadCat4 from '../dashimg/madcat4.jpg';
import MadCat5 from '../dashimg/madcat5.jpg';

const Dashboardv = () => {
  return (
    // <div className="dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-light-yellow">
           
            <div className="button-container">
              <button className="btn btn-fucsia rounded-circle">1</button>
              <button className="btn btn-fucsia rounded-circle">2</button>
              <button className="btn btn-fucsia rounded-circle">3</button>
              <button className="btn btn-fucsia rounded-circle">4</button>
            </div>
          </div>

          <div className="col-7 bg-light-yellow">
            
            <div className="d-flex justify-content-center align-items-center flex-column">
             
              <div className="card" style={{ width: "18rem" }}>
                <img src={MadCat5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Título de la noticia</h5>
                  <p className="card-text">Descripción de la noticia</p>
                  <a href="#" className="btn btn-primary">Ver más</a>
                </div>
              </div>

            
              <div className="button-container">
                <button className="btn btn-primary rounded-circle">1</button>
               
              </div>
            </div>
          </div>

          <div className="col-3">
           
            <div className="profile-section">
              <div className="profile">
                <img src={MadCat3} alt="Foto de perfil" className="rounded-circle" />
                <h5>Nombre de usuario</h5>
                <p>Frase linda</p>
                <div className="button-container">
                  <button className="btn btn-primary">Botón 1</button>
                  <button className="btn btn-primary">Botón 2</button>
                </div>
              </div>

              <div className="user-list">
                
                <div className="user-item">
                  <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                  <div className="user-details">
                    <h6>Nombre de usuario</h6>
                    <p>Frase</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Dashboardv;