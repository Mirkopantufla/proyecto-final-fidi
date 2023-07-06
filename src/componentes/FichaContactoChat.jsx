import React from 'react'
import '../estilos/FichaContactoChat.css'

const FichaContactoChat = ({ nombreContacto, fotoContacto }) => {
    return (
        <>
            <div className="col-lg-3 col-md-3 my-3">
                <img className='border rounded-5 fotoContacto' src={fotoContacto} alt="" />
            </div>
            <div className="col-lg-5 col-md-7 d-flex flex-column justify-content-center">
                <h4 id='tituloNombreContacto'>{nombreContacto}</h4>
                <div className='d-flex'>
                    <button className='btn btn-dark me-1'>Habilidad1</button>
                    <button className='btn btn-dark me-1'>Habilidad2</button>
                    <button className='btn btn-dark me-1'>Habilidad3</button>
                    <button className='btn btn-dark me-1'>Habilidad4</button>
                    <button className='btn btn-dark me-1'>Habilidad5</button>
                </div>
            </div>
        </>
    )
}

export default FichaContactoChat