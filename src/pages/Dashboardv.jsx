import React from 'react';
import "../estilos/Dashboardv.css";
import { FaEnvelopeOpen } from 'react-icons/fa';
import { PiPencilSimpleLineBold } from 'react-icons/pi';
import MadCat3 from '../dashimg/madcat3.jpg';
import MadCat4 from '../dashimg/madcat4.jpg';
import MadCat5 from '../dashimg/madcat5.jpg';

const Dashboardv = () => {
  return (

    <div className="container-fluid">
      <div className="row">
        
    
        <div className="col-9 bg-light-yellow offset-1">

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

        <div className="col-2">

          <div className="profile-section">
            <div className="profile-first border rounded-2">
              <img src={MadCat3} alt="Foto de perfil" className="rounded-circle" />
              <h5>Nombre de usuario</h5>
              <p>Frase linda</p>
              <div className="button-container">
                <button className="btn btn-light">
                  <FaEnvelopeOpen/>
                  </button>
                <button className="btn btn-light">
                  <PiPencilSimpleLineBold/>
                </button>
              </div>
            </div>

            <div className="user-list">

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '500'}}>Alejandro Miranda</p>
                  <p style={{fontSize:'15px'}}>Calla burro</p>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '500'}}>Armando Losas</p>
                  <p style={{fontSize:'15px'}}>Q pedo wey</p>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '500'}}>Rosa Deltransito</p>
                  <p style={{fontSize:'15px'}}>Nada manito</p>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '500'}}>Matias Pasten</p>
                  <p style={{fontSize:'15px'}}>Ya merito llegamos?</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboardv;