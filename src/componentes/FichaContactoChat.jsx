import React from 'react'

const FichaContactoChat = ({ nombreContacto, fotoContacto }) => {


    return (
        <>
            <div className="col-lg-3 col-md-3 my-3">
                <img className='border rounded-5' src={fotoContacto} alt="" />
            </div>
            <div className="col-lg-5 col-md-7 d-flex flex-column justify-content-center">
                <h4 id='tituloNombreContacto'>{nombreContacto}</h4>
                <div className='d-flex'>
                    <button className='btn btn-dark me-1'>interes1</button>
                    <button className='btn btn-dark me-1'>interes2</button>
                    <button className='btn btn-dark me-1'>interes3</button>
                    <button className='btn btn-dark me-1'>interes4</button>
                    <button className='btn btn-dark me-1'>interes5</button>
                </div>
            </div>
        </>
    )
}

export default FichaContactoChat