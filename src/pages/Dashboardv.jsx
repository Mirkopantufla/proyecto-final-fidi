import React from 'react';
import "../estilos/Dashboardv.css";
import { FaEnvelopeOpen } from 'react-icons/fa';
import { PiPencilSimpleLineBold } from 'react-icons/pi';
import MadCat3 from '../dashimg/madcat3.jpg';
import MadCat4 from '../dashimg/madcat4.jpg';
import MadCat5 from '../dashimg/madcat5.jpg';


//font-family: 'Bagel Fat One', cursive;
//font-family: 'Modak', cursive;
//font-family: 'Shrikhand', cursive; 

const Dashboardv = () => {
  return (

    <div className="container-fluid">
      <div className="row">
        
    
        <div className="col-9 bg-light-yellow offset-1">

          <div className="d-flex justify-content-center align-items-center flex-column">

            <div className="card" style={{ width: "35rem" , height: "45rem" , marginTop:"20px" }}>
              <img src={MadCat5} className="card-img-top" style={{width: "35rem" , height: "35rem"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Título de la noticia</h5>
                <p className="card-text">Descripción de la noticia</p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
            </div>

            <div className="card" style={{ width: "35rem" , height: "45rem" , marginTop:"20px" }}>
              <img src={MadCat5} className="card-img-top" style={{width: "35rem" , height: "35rem"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Título de la noticia</h5>
                <p className="card-text">Descripción de la noticia</p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
            </div>
            <div className="card" style={{ width: "35rem" , height: "45rem" , marginTop:"20px" }}>
              <img src={MadCat5} className="card-img-top" style={{width: "35rem" , height: "35rem"}} alt="..." />
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
                <button className="btn btn-light-subtle" style={{backgroundColor: "#eaeaf0c9"}}>
                  <FaEnvelopeOpen/>
                  </button>
                <button className="btn btn-light-subtle"  style={{backgroundColor: "#eaeaf0c9"}}>
                  <PiPencilSimpleLineBold/>
                </button>
              </div>
            </div>

            <div className="user-list" style={{marginTop: '20px'}}>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '600'}}>Alejandro Miranda</p>
                  <p style={{fontSize:'15px' , marginTop:'2px'}}>Calla burro</p>
                  <button className="btn-user-detail btn-sm" style={{fontWeight:"bold"}}>
                  +Match
                  </button>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '600'}}>Armando Losas</p>
                  <p style={{fontSize:'15px' , marginTop:'2px'}}>Q pedo wey</p>
                  <button className="btn-user-detail btn-sm" style={{fontWeight:"bold"}}>
                  +Match
                  </button>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '600'}}>Rosa Deltransito</p>
                  <p style={{fontSize:'15px', marginTop:'2px'}}>Nada manito</p>
                  <button className="btn-user-detail btn-sm" style={{fontWeight:"bold"}}>
                  +Match
                  </button>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '600'}}>Matias Pasten</p>
                  <p style={{fontSize:'15px' , marginTop:'2px'}}>Ya merito llegamos?</p>
                  <button className="btn-user-detail btn-sm" style={{fontWeight:"bold"}}>
                  +Match
                  </button>
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